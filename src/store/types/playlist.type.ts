export interface IPlaylist {
  id: number;
  name: string;
  songs?: number[];
  titles?: number;
}

export interface IPlaylistStore {
  playlists: IPlaylist[];
  setPlaylists: (p: IPlaylist[]) => void;
  fetchPlaylists: () => Promise<void>;
  createPL: (playlistName: string) => Promise<void>;
  deletePL: (playlistId: number) => Promise<void>;
}
