"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "@/interfaces/moviesType";

const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";

export function useGetMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
      );
      setMovies(response.data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, isError };
}