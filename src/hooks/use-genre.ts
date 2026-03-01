import axios from "axios";
import { useEffect, useState } from "react";
import { useGenreStore } from "../store/genre.store";

export const useGenre = (currentGenre: string) => {
  const { setCurrentGenreInfo } = useGenreStore();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchGenreInfo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/api/search/categorie/${currentGenre}`,
        );
        setCurrentGenreInfo(
          "data" in response.data
            ? response.data.data.response
            : response.data.response,
        );
        console.log(response.data.response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchGenreInfo();
  }, [currentGenre]);

  return { isLoading };
};
