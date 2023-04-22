import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchingGenresResponse{
  count: number;
  results: Genre []
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setErrors] = useState(" ");
  const[isLoading, setLoading]=useState(false);

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchingGenresResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setGenres(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message)
        setLoading(false)
      });
    
    return () => controller.abort();
  }, []);

  return (
    {genres, error, isLoading}
  )
}

export default useGenres;
