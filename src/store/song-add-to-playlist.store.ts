import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";

interface SongToPlaylist {
  addToPlaylist: (playlistId: number, songId: number) => Promise<void>;
  removeFromPlaylist: (playlistId: number, songId: number) => Promise<boolean>;
}

const useAddToPlayslistStore = create<SongToPlaylist>((set, get) => ({
  async addToPlaylist(playlistId, songId) {
    const http = getAxiosInstance();
    await http.post(`/playlists/${playlistId}/song/${songId}`);
  },
  async removeFromPlaylist(playlistId, songId) {
    try {
      const http = getAxiosInstance();
      await http.delete(`/playlists/${playlistId}/song/${songId}`);
    } catch (error) {
      console.log("Error while deleting song from playlist", error.message);
      return false;
    }
  },
}));

export const useAddToPlayslist = () => {
  return useAddToPlayslistStore((state) => state);
};
