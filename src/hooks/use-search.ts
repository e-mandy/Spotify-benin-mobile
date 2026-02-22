import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchStore } from "../store/search.store";

export const useSearch = () => {
  const { setResults, setGenreInfos, setGenreName } = useSearchStore.getState();
  const search = useSearchStore((state) => state.query);
  const currentGenre = useSearchStore((state) => state.currentGenre);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBase = async (query: string) => {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}${query}`,
    );
    const result =
      "data" in response?.data ? response?.data?.data : response?.data;

    return result;
  };

  useEffect(() => {
    if (!search.trim()) setResults(null);
    const timetoutId = setTimeout(() => {
      const searchFetchData = async () => {
        try {
          setIsLoading(true);
          const result = await fetchBase(`/api/search/global/${search}`);
          setResults(result);
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      };

      searchFetchData();
    }, 500);

    return () => clearTimeout(timetoutId);
  }, [search]);

  useEffect(() => {
    if (!currentGenre) setGenreInfos(null);
    const dataFromGenre = async () => {
      try {
        setIsLoading(true);
        const genreInfos = await fetchBase(
          `/api/search/categorie/${currentGenre}`,
        );
        setGenreInfos(genreInfos);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    dataFromGenre();
  }, [currentGenre]);

  const fetchGenreName = async () => {
    try {
      setIsLoading(true);
      const genreName = await fetchBase(`/api/search/categories`);
      setGenreName(genreName.response);
    } catch (error) {}
  };

  return { isLoading, fetchGenreName };
};
