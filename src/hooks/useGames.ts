
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// determinar el interface del array de objetos que fetcheamos

interface FetchingGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState(" ");
  const[isLoading, setLoading]=useState(false);

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchingGamesResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        // check if there is a cancel request
        if (err instanceof CanceledError) return;
        setErrors(err.message)
        setLoading(false)
      });
    
    // call clean up function
    return () => controller.abort();
  }, []);

  return (
    {games, error, isLoading}
  )
  
}

export default useGames;