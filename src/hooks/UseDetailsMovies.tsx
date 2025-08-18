"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "@/interfaces/moviesType";

const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";

export function useGetPopularMoviesWithDetails() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMoviesWithDetails = async () => {
    try {
      const popularRes = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
      );

      const moviesData = popularRes.data.results;

      const moviesWithDetails = await Promise.all(
        moviesData.map(async (movie: { id: number }) => {
          const detailRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`
          );
          return detailRes.data;
        })
      );

      setMovies(moviesWithDetails);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesWithDetails();
  }, []);

  return { movies, isLoading, isError };
}
