import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";

interface SongToPlaylist {
  // songId: number | null;
  addToPlaylist: (playlistId: number, songId: number) => Promise<void>;
  // setSongForPlaylist: (number) => void;
}

const useAddToPlayslistStore = create<SongToPlaylist>((set, get) => ({
  // songId: null,
  async addToPlaylist(playlistId, songId) {
    const http = getAxiosInstance();
    await http.post(`/playlists/${playlistId}/song/${songId}`);
  },
}));

export const useAddToPlayslist = () => {
  return useAddToPlayslistStore((state) => state);
};
