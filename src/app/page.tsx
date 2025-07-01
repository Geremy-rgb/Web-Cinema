"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import plusJakartaSans from "../TextFonts/Fonts";
import Link from "next/link";
import MovieType from "../interfaces/moviesType";
import { useSearch } from "@/contexts/SearchContext";

function App() {
  const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { searchTerm } = useSearch();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const HandleGetMovies = async () => {
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
    HandleGetMovies();
  }, []);

  return (
    <div className="flex w-full h-full pt-5 px-40">
      <div className="flex flex-col w-full max-w-[960px] mx-auto">
        <div className="flex w-full h-[72px] justify-between p-4">
          <div className="flex w-[300px] h-10 min-w-[288px]">
            <h1
              className={`${plusJakartaSans.className} w-[700] text-[32px] leading-[40px] tracking-[0]`}
            >
              Popular Movies
            </h1>
          </div>
        </div>

        {isLoading ? <h1>Cargando...</h1> : null}

        {/* grilla de peliculas*/}

        <div className="flex-col w-full h-[967px] p-4 gap-3 grid grid-cols-5">
          {filteredMovies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={`${movie.title}`}>
              <div
                key={movie.id}
                className="flex flex-col w-[176px] 
              h-[303.67px] pb-4 gap-3"
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={"w-[176px] h-[235px] rounded-2"}
                  />
                </div>

                {/* Title y vote_average*/}

                <div className="flex flex-col justify-between w-full">
                  <h1
                    className={`${plusJakartaSans.className} text-4 leading-6 font-medium truncate max-w-32]`}
                  >
                    {movie.title}
                  </h1>
                  <span className="text-[14px] text-neutral-400">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex items-center justify-center w-[960px] h-[967]">
            {isError ? (
              <h1 className={`${plusJakartaSans} text-10`}>
                ¡ Ups ! Ocurrió un error
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
