import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchStore } from "../store/search.store";

export const useSearch = () => {
  const { query: search, setResults, currentGenre } = useSearchStore.getState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) setResults(null);
    const searchFetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/api/search?query=${search}`,
        );

        setResults(
          "data" in response?.data ? response?.data?.data : response?.data,
        );
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    searchFetchData();
  }, [search]);

  const fetchGenre = (currentGenre) => {
    useEffect(() => {
      const dataFromGenre = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `${process.env.EXPO_PUBLIC_API_URL}/api/search?query=${search}`,
          );
        } catch (error) {}
      };
      dataFromGenre();
    }, [currentGenre]);
  };

  return { isLoading, fetchGenre };
};
