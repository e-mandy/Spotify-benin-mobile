import { AudioPlayer } from "expo-audio";

interface SongDetails {
  title: string;
  cover: string;
  singer: string;
  duration: string;
  playlistName: string;
  audioFile: string;
}

export interface ICurrentSong {
  info: SongDetails;
  sound?: AudioPlayer;
}

export interface ITrackPlay {
  currentSong?: ICurrentSong;
  playlistName: string;
  isPlaying: boolean;
  startSong?: (audioFile: string) => Promise<void>;
  pause: () => void;
  seek: (time: number) => Promise<void>;
  setSong: (song?: SongDetails) => void;
}

export type TPartialItrackPlay = Partial<ITrackPlay>;
