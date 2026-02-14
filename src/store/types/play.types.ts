import { AudioPlayer } from "expo-audio";

export interface SongDetails {
  id: number;
  title: string;
  cover: string;
  singer: string;
  duration: string;
  playlistName: string;
  audioFile: string;
  isFavorite: boolean;
}

export interface ICurrentSong {
  info: SongDetails;
  sound?: AudioPlayer;
}

export interface ITrackPlay {
  currentSong?: ICurrentSong;
  playlistName?: string;
  isPlaying: boolean;
  playlists: {
    name: string | null;
    songs: string[];
    currentIndex: number | null;
  };
  pause: () => void;
  resume: () => void;
  goToNext: () => Promise<void>;
  backToPrev: () => Promise<void>;
  seek: (time: number) => Promise<void>;
  trackHandler: (song: number | string) => Promise<void>;
  playFromPlaylist: (
    playlistName: string,
    songs: string[],
    songId?: number | string,
  ) => Promise<void>;
}

export type TPartialItrackPlay = Partial<ITrackPlay>;
