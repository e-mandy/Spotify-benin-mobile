import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { getAxiosInstance } from "../lib/axios.config";
import { useAddToPlayslist } from "../store/song-add-to-playlist.store";

export function usePlaylistSong(playlistId: number) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { removeFromPlaylist } = useAddToPlayslist();

  async function fetchSong() {
    try {
      const http = getAxiosInstance();
      setLoading(true);
      const res = await http.get(`/playlists/${playlistId}`);

      const songs = res.data.response.map((item) => ({
        id: item.titleId,
        title: item.title.label,
        cover: item.title.photo,
        duration: item.title.duration,
        singer: item.title.album.Singers[0].Singer.singerName,
      }));

      setData(songs);
    } catch (error) {
      console.log("Error fetching playlists songs", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function removeItem() {
    console.log("Removing playlist item");
  }

  useFocusEffect(
    useCallback(() => {
      fetchSong();
    }, [playlistId]),
  );

  return { isLoading, data, removeItem };
}
