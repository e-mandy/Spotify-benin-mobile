import { createAudioPlayer } from "expo-audio";
import { create } from "zustand";
import useAuth from "./auth.store";
import { ITrackPlay, TPartialItrackPlay } from "./types/play.types";

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
  playlistName: "Fun",
  startSong: async (uri: string) => {
    set(await playSong(get, uri));
  },
  currentSong: {
    info: null,
  },
  isPlaying: false,
  async setSong(song) {
    const sound = get().currentSong.sound;
    const userId = useAuth.getState().user.id;
    const uri = getStreamUrl(song.audioFile, userId, song.id);

    if (song.audioFile === get().currentSong?.info?.audioFile) {
      if (!sound.playing) sound.play();
      set({ isPlaying: true });
      return;
    } else {
      get().pause();
      sound?.replace(uri);
      set({ isPlaying: true });
    }

    const res = await playSong(get, uri);
    res.currentSong.sound.play();
    set(res);

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
    get().resume();
  },
}));

async function playSong(
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

export function useTrackStore() {
  return useTrackPlay((state) => state);
}

export function getStreamUrl(audioFile: string, userId, songId) {
  return `${process.env.EXPO_PUBLIC_STREAM_URL}/stream?userId=${userId}&titleId=${songId}&audioFile=${audioFile}`;
}

export default useTrackPlay;
