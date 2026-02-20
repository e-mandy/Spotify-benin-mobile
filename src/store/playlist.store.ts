import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";
import { IPlaylistItem } from "./types/play.types";
import { IPlaylist } from "./types/playlist.type";

interface IPlaylistStore {
  isLoadingSongs: boolean;
  playlists: IPlaylist[];
  playlistsSongs: Record<string | number, IPlaylistItem[]>;
  setPlaylists: (p: IPlaylist[]) => void;
  fetchPlaylists: () => Promise<void>;
  createPL: (playlistName: string) => Promise<void>;
  deletePL: (playlistId: number | string) => Promise<void>;
  getPlaylistItems: (playlistId: number | string) => Promise<IPlaylistItem[]>;
  deletePLSongs: (
    playlistId: number | string,
    titleId: number,
  ) => Promise<boolean>;
}

const usePlaylist = create<IPlaylistStore>((set, get) => ({
  isLoadingSongs: false,
  playlistsSongs: {},
  playlists: [],
  async getPlaylistItems(playlistId) {
    set({ isLoadingSongs: true });
    const fetcher = playlistId === "favorites" ? fetchFav : fetchSongs;
    const songs = await fetcher(playlistId);
    set({ isLoadingSongs: false });
    set({
      playlistsSongs: { ...get().playlistsSongs, [playlistId]: songs },
    });
    return songs;
  },
  async fetchPlaylists() {
    try {
      const http = getAxiosInstance();
      const res = await http.get(`/playlists/`);
      const playlists = res.data.data as IPlaylist[];
      set({ playlists });
    } catch (error) {
      console.log("Error fetching playlist", error);
    }
  },
  async createPL(playlistName) {
    try {
      const http = getAxiosInstance();
      const res = await http.post(`/playlists`, { name: playlistName });
      const playlist = res.data.data;
      set({
        playlists: [
          ...get().playlists,
          { id: playlist.id, name: playlistName },
        ],
      });
    } catch (error) {
      console.log("Error creating playlist", error);
    }
  },
  setPlaylists(p: IPlaylist[]) {
    set({ playlists: p });
  },
  async deletePL(playlistId) {
    try {
      const http = getAxiosInstance();
      await http.delete(`/playlists/${playlistId}`);
      set({ playlists: get().playlists.filter((p) => p.id !== playlistId) });
    } catch (error) {
      console.log("Error deleting playlist", error);
      console.log(error.response.data, error.message);
    }
  },
  async deletePLSongs(playlistId, titleId): Promise<boolean> {
    try {
      const http = getAxiosInstance();
      await http.delete(`/playlists/${playlistId}/song/${titleId}`);
      const optimisticSongs = get().playlistsSongs[playlistId].filter(
        (song) => song.id !== titleId,
      );

      set({
        playlistsSongs: {
          ...get().playlistsSongs,
          [playlistId]: optimisticSongs,
        },
      });
      return true;
    } catch (error) {
      console.log("Error deleting playlist", error);
      console.log(error.response.data, error.message);
      return false;
    }
  },
}));

async function fetchSongs(playlistId): Promise<IPlaylistItem[]> {
  try {
    const http = getAxiosInstance();
    const res = await http.get(`/playlists/${playlistId}`);

    return res.data.response.map((item) => ({
      id: item.titleId,
      title: item.title.label,
      cover: item.title.photo,
      duration: item.title.duration,
      singer: item.title.album.Singers[0].Singer.singerName,
    }));
  } catch (error) {
    console.log("Error fetching playlists songs", error.message);
  }
}

async function fetchFav(): Promise<IPlaylistItem[]> {
  try {
    const http = getAxiosInstance();
    const res = await http.get("/favorites");

    return res.data.data.map((item) => ({
      id: item.title.id,
      title: item.title.label,
      cover: item.title.photo,
      duration: item.title.duration,
      singer: item.title.album.singers[0].singerName,
    }));
  } catch (error) {
    console.log("Fav list err", error);
  }
}

export const usePlaylistStore = () => usePlaylist((state) => state);
