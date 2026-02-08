import { createAudioPlayer } from "expo-audio";
import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";
import useAuth from "./auth.store";
import {
  ITrackPlay,
  SongDetails,
  TPartialItrackPlay,
} from "./types/play.types";

//currentSong
//onPause
//onNext
//onPrev
//onSeek
//onEnd
//playlists
//startSong
//startFromPlaylist
//randomStart

const useTrackPlay = create<ITrackPlay>((set, get) => ({
  playlistName: "Découvertes",
  currentSong: {
    info: null,
  },
  isPlaying: false,
  async trackHandler(songId: string | number) {
    const sound = get().currentSong.sound;
    const songInfo = get().currentSong?.info;

    //if he press a song on play
    if (songId === songInfo?.id) {
      if (!sound.playing) sound.play();
      set({ isPlaying: true });
      return;
    }

    const song = await getSongById(songId);
    const userId = useAuth.getState().user.id;
    const uri = getStreamUrl(song.audioFile, userId, song.id);
    get().pause();
    sound?.replace(uri);
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
}));

async function createSongAudio(
  get: () => TPartialItrackPlay,
  uri: string,
): Promise<TPartialItrackPlay> {
  const newSound = createAudioPlayer(uri);

  newSound.addListener("playbackStatusUpdate", (e) => {
    if (e.didJustFinish) {
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
