import { createAudioPlayer } from "expo-audio";
import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";
import { notifyInfo } from "../utils/react-toast";
import useAuth from "./auth.store";
import {
  ITrackPlay,
  SongDetails,
  TPartialItrackPlay,
} from "./types/play.types";

const useTrackPlay = create<ITrackPlay>((set, get) => ({
  playlists: {
    name: null,
    songs: [],
    currentIndex: null,
  },
  currentSong: {
    info: null,
  },
  isPlaying: false,
  async playFromPlaylist(playlistName, songs, songId) {
    console.log(playlistName, songs, songId);

    let songIndex = 0;
    if (!songId) {
      songIndex = Math.floor(Math.random() * (songs.length - 1));
      songId = songs[songIndex];
    } else {
      songIndex = songs.findIndex((titleId) => +songId === +titleId);
    }

    console.log(songIndex, "index");

    set({
      playlistName,
      playlists: {
        name: playlistName,
        songs,
        currentIndex: songIndex,
      },
    });
    await get().trackHandler(songId);
  },
  async backToPrev() {
    //if there is no song on track and user click on back then seek the song to the beginning
    if (!get().playlists.name) {
      await get().seek(0);
      return notifyInfo("Vous êtes déjà au début de la file");
    }

    const currentIndex = get().playlists.currentIndex;
    const prevIndex = Math.max(0, currentIndex - 1);
    const prevSongId = get().playlists.songs[prevIndex];

    //the playlist contain just 1 song then from 0 to 0 he clicked on prev
    if (+prevSongId === +get().currentSong.info.id) {
      await get().seek(0); //we replaced him at the song beginning
      return notifyInfo("Vous êtes déjà au début de la file");
    }
    set({
      playlists: {
        ...get().playlists,
        currentIndex: prevIndex,
      },
    });
    await get().trackHandler(prevSongId);
  },
  async goToNext() {
    //if there is no song on track and user click on back then seek the song to the beginning
    if (!get().playlists.name) {
      return notifyInfo("Vous êtes déjà à la fin de la file");
    }

    const currentIndex = get().playlists.currentIndex;
    const nextIndex = Math.min(
      get().playlists.songs.length - 1,
      currentIndex + 1,
    );
    console.log("current index: ", currentIndex, "next index: ", nextIndex);
    const nextSongId = get().playlists.songs[nextIndex];

    if (+nextIndex === +currentIndex) {
      return notifyInfo("Vous êtes déjà à la fin de la file");
    }
    set({
      playlists: {
        ...get().playlists,
        currentIndex: nextIndex,
      },
    });
    await get().trackHandler(nextSongId);
  },

  pause() {
    get().currentSong?.sound?.pause();
    set({ isPlaying: false });
  },

  resume() {
    get().currentSong?.sound?.play();
    set({ isPlaying: true });
  },

  async seek(time) {
    await get().currentSong.sound.seekTo(time);
  },

  async trackHandler(songId: string | number) {
    const sound = get().currentSong?.sound;
    const songInfo = get().currentSong?.info;

    //if he press a song on play
    if (songId === songInfo?.id) {
      if (!sound?.playing) {
        sound?.play();
        set({ isPlaying: true });
      }
      return;
    }

    const song = await getSongById(songId);
    const userId = useAuth.getState().user.id;
    const uri = getStreamUrl(song.audioFile, userId, song.id);
    get().pause(); //in case there is some past song on play
    sound?.replace(uri); //work even if there was no song  on play
    set({ isPlaying: true });

    const audio = await createSongAudio(get, uri);
    audio.currentSong.sound.play();
    set(audio);
    set(() => ({
      currentSong: {
        ...(get().currentSong ?? {}),
        info: song,
      },
    }));
  },
}));

async function createSongAudio(
  get: () => TPartialItrackPlay,
  uri: string,
): Promise<TPartialItrackPlay> {
  const newSound = createAudioPlayer(uri);

  newSound.addListener("playbackStatusUpdate", async (e) => {
    if (e.didJustFinish) {
      if (
        get()?.playlists?.name &&
        get().playlists.currentIndex !== get().playlists?.songs?.length - 1
      ) {
        await get().goToNext();
        return;
      }
      get().pause();
      get().seek(0);
    }
  });
  return {
    currentSong: {
      info: {
        ...get().currentSong?.info,
      },
      sound: newSound,
    },
    isPlaying: true,
  };
}

async function getSongById(songId: string | number): Promise<SongDetails> {
  try {
    const http = getAxiosInstance();
    const { data } = await http.get(`/titles/${songId}`);
    const song = data.data;
    return {
      id: song.id,
      audioFile: song.audioFile,
      title: song.label,
      cover: song.photo,
      singer: song.singers.map((s) => s.singerName).join(" & "),
      duration: song.duration,
      playlistName: "Découvertes",
      isFavorite: song.isFavorite,
    };
  } catch (error) {
    console.log("Error on track item: ", error);
    return null;
  }
}

export function useTrackStore() {
  return useTrackPlay((state) => state);
}

export function getStreamUrl(audioFile: string, userId, songId) {
  return `${process.env.EXPO_PUBLIC_STREAM_URL}/stream?userId=${userId}&titleId=${songId}&audioFile=${audioFile}`;
}

export default useTrackPlay;
