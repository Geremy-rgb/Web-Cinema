"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";

export interface Genre {
  id: number;
  name: string;
}

export function useGetGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchGenres = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`
      );
      setGenres(res.data.genres);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return { genres, isLoading, isError };
}