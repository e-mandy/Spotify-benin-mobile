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

const dumpSong = {
  id: 1,
  title: "Agolo",
  cover:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Uhs-zpl6Hn0-NcjnkTxMRGqEFIk21XJjUmKSXaxvVcYZ9hXkjdCQIrB4H1FJr1dqWFo7CGJl7y3bOoqhjzyABvV-vKXRQz2TeI-wCnJEh0Ci11Hi87Kysl1bnFCA-eRmWbNUjwnUE8LUC8mbxSUWTMj_5_W6Ow3KvhFRZRdenPPRMEeACdqKWMRlz3osqyhyiTsj8-ptxE52ujFoYTGfGNyJkg8iG7ERcgUBUn9X1ZjZSd1Uhns2RGfrG2fAn8vmhwK1X6GefhHa",
  singer: "Angélique Kidjo",
  duration: "06:13",
  playlistName: "Top Bénin 50",
  audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};

const useTrackPlay = create<ITrackPlay>((set, get) => ({
  playlistName: "Fun",
  startSong: async (uri: string) => {
    set(await playSong(get, uri));
  },
  currentSong: {
    info: dumpSong,
  },
  isPlaying: false,
  async setSong(song) {
    const userId = useAuth.getState().user.id;
    const uri = getStreamUrl(song.audioFile, userId, song.id);
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
