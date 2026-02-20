import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
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

      setData(responses);
    } catch (error) {
      console.log("Fav list err", error);
    } finally {
      setLoading(false);
    }
  }

  async function unFavorite(titleId: number) {
    try {
      const http = getAxiosInstance();
      const favoritesCopy = [...data];
      const optimisticData = data.filter((s) => s.id !== titleId);
      setData(optimisticData);
      http
        .delete(`/favorites/${titleId}`)
        .then(() => {})
        .catch(() => setData(favoritesCopy));
    } catch (error) {
      console.log(error);
    }
  }

  //it is just like the useEffect of react in web
  //but the difference is it is play whenever the route focus or unfocus
  //useful here because in RN , component did not unmount by default on screen changes
  //so in this case we can use the useFocusEffect to simualte the same behaviour like in
  //a browser

  useFocusEffect(
    useCallback(() => {
      fetchFav();
    }, []),
  );

  return { data, isLoading, removeItem: unFavorite };
}
