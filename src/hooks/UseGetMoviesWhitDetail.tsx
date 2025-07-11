"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "@/interfaces/moviesType";

const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";

export function useGetMoviesByGenreWithDetails(genreId: number | null) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let res;
        if (genreId === null) {
          res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`
          );
        } else {
          res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}`
          );
        }

        const moviesData = res.data.results;
        setMovies(moviesData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [genreId]);

  return { movies, isLoading, isError };
}