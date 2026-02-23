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

  const checkFavoriteUrl = `/favorites/${titleId}/check`;
  const createFavoriteUrl = `/favorites/${titleId}`;
  const http = getAxiosInstance();

  const checkFavorite = useCallback(
    async function () {
      try {
        const response = await http.get(checkFavoriteUrl);
        if (response.data.isFavorite) {
          setFavorite(true);
        }
      } catch (error) {
        console.log("Favorite error", error);
        setError(error?.response?.data.message || "Une erreur est survenue");
      }
    },
    [checkFavoriteUrl],
  );

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
  }, [titleId, checkFavorite]);

  return { makeFavorite, unFavorite, isFavorite, error };
}
