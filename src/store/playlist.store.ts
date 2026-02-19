import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";
import { IPlaylist } from "./types/playlist.type";

interface IPlaylistStore {
  playlists: IPlaylist[];
  setPlaylists: (p: IPlaylist[]) => void;
  fetchPlaylists: () => Promise<void>;
  createPL: (playlistName: string) => Promise<void>;
  deletePL: (playlistId: number) => Promise<void>;
}

const usePlaylist = create<IPlaylistStore>((set, get) => ({
  async fetchPlaylists() {
    try {
      const http = getAxiosInstance();
      const res = await http.get(`/playlists/`);
      const playlists = res.data.response as IPlaylist[];
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
  playlists: [],
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
}));

export const usePlaylistStore = () => usePlaylist((state) => state);
