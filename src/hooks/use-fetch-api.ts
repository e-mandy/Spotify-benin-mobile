import axios from "axios";
import { useEffect, useState } from "react";
import { notifError } from "../utils/react-toast";

export const useFetch = (url, defaultValue = []): any => {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData("data" in response.data ? response.data.data : response.data);
      } catch (err) {
        const errMessage =
          err.response?.data?.message || err?.response?.data?.message;
        setError(errMessage);
        notifError("Une erreur est survenue!");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
