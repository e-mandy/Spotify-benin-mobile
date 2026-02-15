export interface IPlaylist {
  id: number;
  name: string;
  songs?: number[];
}

export interface IPlaylistStore {
  create: (playlistName: string) => Promise<void>;
  delete: (playlistId: number) => Promise<void>;
  getAll: () => Promise<IPlaylist[]>;
  playlists: IPlaylist[];
}
