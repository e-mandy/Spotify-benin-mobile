import { AudioPlayer } from "expo-audio";

export interface SongDetails {
  id: number;
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
  pause: () => void;
  resume: () => void;
  seek: (time: number) => Promise<void>;
  trackHandler: (song: number | string) => Promise<void>;
}

export type TPartialItrackPlay = Partial<ITrackPlay>;
