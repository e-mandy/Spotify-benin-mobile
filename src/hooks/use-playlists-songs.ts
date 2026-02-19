import { useEffect, useState } from "react";
import { getAxiosInstance } from "../lib/axios.config";

export function usePlaylistSong(playlistId: number) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchSong() {
    try {
      const http = getAxiosInstance();
      setLoading(true);
      const res = await http.get(`/playlists/${playlistId}`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("Error fetching playlists songs", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSong();
  }, []);

  return { isLoading, data };
}
