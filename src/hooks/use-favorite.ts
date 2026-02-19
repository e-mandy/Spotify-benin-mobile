import { useEffect, useState } from "react";
import { getAxiosInstance } from "../lib/axios.config";
import { SongDetails } from "../store/types/play.types";

export type Favorite = { favoritedAt: string } & Omit<
  SongDetails,
  "isFavorite"
>;

export function useFavorite(titleId: number) {
  const [isFavorite, setFavorite] = useState(false);
  const [error, setError] = useState(null);

  const http = getAxiosInstance();

  const checkFavoriteUrl = `/favorites/${titleId}/check`;
  const createFavoriteUrl = `/favorites/${titleId}`;

  async function checkFavorite() {
    try {
      const response = await http.get(checkFavoriteUrl);
      if (response.data.isFavorite) {
        setFavorite(true);
      }
    } catch (error) {
      console.log("Favorite error", error);
      setError(error?.response?.data.message || "Une erreur est survenue");
    }
  }

  async function makeFavorite() {
    try {
      setFavorite(true);
      await http.post(createFavoriteUrl);
    } catch (error) {
      setFavorite(false);
      setError(error?.response?.data.message || "Une erreur est survenue");
      console.log(error);
    }
  }

  async function unFavorite() {
    try {
      setFavorite(false);
      await http.delete(createFavoriteUrl);
    } catch (error) {
      setFavorite(true);
      setError(error?.response?.data.message || "Une erreur est survenue");
      console.log(error);
    }
  }

  useEffect(() => {
    checkFavorite();
  }, [titleId]);

  return { makeFavorite, unFavorite, isFavorite, error };
}

export function useFavoriteList() {
  const [data, setData] = useState<Favorite[]>([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchFav() {
    try {
      const http = getAxiosInstance();
      setLoading(true);
      const res = await http.get("/favorites");
      const responses: Favorite[] = res.data.data.map((item) => ({
        id: item.title.id,
        favoritedAt: item.favoritedAt,
        title: item.title.label,
        cover: item.title.photo,
        duration: item.title.duration,
        singer: item.title.album.singers[0].singerName,
      }));
      console.log("favorites responses");

      setData(responses);
    } catch (error) {
      console.log("Fav list err", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFav();
  }, []);

  return { data, isLoading };
}
