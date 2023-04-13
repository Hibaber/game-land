
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

// determinar el interface de game

interface Game {
  id: number;
  name: string;
}

// determinar el interface del array de objetos que fetcheamos

interface FetchingGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState(" ");

  useEffect(() => {

    // handle cancellation 
    const controller = new AbortController()
    apiClient
      .get<FetchingGamesResponse>("/games",{signal:controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // check if there is a cancel request
        if (err instanceof CanceledError) return;
        setErrors(err.message)
      });
    
    // call clean up function
    return () => controller.abort();
  }, []);

  return (
    {games, error}
  )
  
}

export default useGames;