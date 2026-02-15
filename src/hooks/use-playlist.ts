import { useEffect, useState } from "react";
import { getAxiosInstance } from "../lib/axios.config";
import { IPlaylist } from "../store/types/playlist.type";

export function usePlaylist() {
  const http = getAxiosInstance();
  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

  async function getAll() {
    try {
      const res = await http.get(`/playlists/`);
      const playlists = res.data.response as IPlaylist[];
      setPlaylists(playlists);
    } catch (error) {
      console.log("Error creating playlist", error);
    }
  }

  async function createPL(playlistName: string) {
    try {
      const res = await http.post(`/playlists`, { name: playlistName });
      const playlist = res.data.data;
      setPlaylists([...playlists, { id: playlist.id, name: playlistName }]);
      console.log(res.data);
    } catch (error) {
      console.log("Error creating playlist", error);
    }
  }

  async function deletePL(playlistId: number) {
    try {
      await http.delete(`/playlists/${playlistId}`);
      setPlaylists(playlists.filter((p) => p.id !== playlistId));
    } catch (error) {
      console.log("Error deleting playlist", error);
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return { playlists, deletePL, createPL };
}
