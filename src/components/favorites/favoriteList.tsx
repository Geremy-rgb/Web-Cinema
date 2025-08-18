"use client";

import { useContext, useState } from "react";
import { FavoriteContext } from "@/contexts/favoriteContext";
import Movie from "@/interfaces/moviesType";
import PlusJakartaSans from "@/TextFonts/Fonts";
import BackButton from "../ui/backBotton";
import { useSearchContext } from "@/contexts/SearchContext";
import Link from "next/link";

export default function FavoriteList() {
  const context = useContext(FavoriteContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { searchTerm } = useSearchContext();

  if (!context) return null;
  const { favorites, removeFavorite } = context;

  const filteredFavorites = favorites.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFavorites.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavorites = filteredFavorites.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (favorites.length === 0) {
    return <p>No tienes películas favoritas aún.</p>;
  }

  return (
    <div className="flex flex-col w-full h-fit m-w-[960px]">
      {/* Titulo */}
      <div className="flex w-full h-fit justify-between p-4">
        <div className="flex flex-col w-fit h-fit min-w-72">
          <h1 className={`${PlusJakartaSans} w-[700] text-4xl leading-10 `}>
            My Favorite Movies
          </h1>
        </div>
      </div>

      {/* mapeado de peliculas */}

      {currentFavorites.map((movie: Movie) => (
        <div
          key={movie.id}
          className="flex w-full h-fit justify-between pt-3 pr-4 pb-3 pl-4"
        >
          <div className="flex items-start gap-4 mb-6">
            <Link href={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title}
                className="w-[70px] h-[93px] rounded-tr-lg]"
              />
            </Link>

            <div className="flex flex-col w-full h-fit">
              <div className="flex flex-col w-full h-fit">
                <h2 className={`${PlusJakartaSans} text-xl font-bold`}>
                  {movie.title}
                </h2>
              </div>

              <div className="flex flex-col w-full h-fit">
                <span className={`${PlusJakartaSans} text-sm text-gray-300`}>
                  {movie.overview}
                </span>
              </div>

              <div className="flex flex-col w-full h-fit">
                <span
                  className={`${PlusJakartaSans} w-[400] text-[14px] leading-5`}
                >
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* boton para eliminar de favoritos  */}
          <div className="flex flex-col w-fit h-24">
            <div className="flex w-7 h-7">
              <button onClick={() => removeFavorite(movie.id)}>
                <img src="/trashIcon.png" alt="Eliminar" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Paginacion */}

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
              currentPage === page ? "bg-[#472426] text-white" : "bg-[#5a3638]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* boton para volver  */}

      <div className="flex justify-end">
        <BackButton />
      </div>
    </div>
  );
}
