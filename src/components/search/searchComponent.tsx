"use client";

import { useSearchContext } from "@/contexts/SearchContext";
import PlusJakartaSans from "@/TextFonts/Fonts";
import Link from "next/link";
import { useState } from "react";
import { useGetPopularMoviesWithDetails } from "@/hooks/UseDetailsMovies";

export default function SearchCompo() {
  const { movies, isLoading, isError } = useGetPopularMoviesWithDetails();
  const { searchTerm, setSearchTerm } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredMovies = movies.filter((movie) => {
    const term = searchTerm.toLowerCase();

    const matchTitle = movie.title.toLowerCase().includes(term);

    const matchGenre = movie.genres.some((genre) =>
      genre.name.toLowerCase().includes(term)
    );

    return matchTitle || matchGenre;
  });

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col w-full h-[695px]">
      <div className="flex flex-col w-full h-fit pt-3 pr-4 pb-3 pl-4">
        <div className="flex flex-col w-full h-[48px] min-w-40">
          <div className="flex w-full h-full rounded-[12px]">
            {/* Imagen busqueda */}

            <div className="flex items-center justify-center w-fit h-full rounded-tl-[12px] rounded-bl-[12px] pl-4 bg-buttoms">
              <img src="/vectorSearch.png" className="" />
            </div>

            {/* input */}

            <div className="flex w-full h-full p-2 bg-buttoms">
              <input
                className={`${PlusJakartaSans} w-full h-full font-normal text-[16px] leading-6 `}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* imagen reset */}
            <div className="flex w-fit items-center justify-center min-w-[40px] h-full rounded-tr-[12px] rounded-br-[12px] bg-buttoms">
              <div className="flex w-full h-6 max-w-[480px] rounded-[12px] gap-2">
                <div
                  className="flex flex-col W-full h-full"
                  onClick={() => setSearchTerm("")}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/resetSearch.png" className="" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full min-w-[960px] h-12 pt-4 pr-4 pb-2 pl-4">
        <h1
          className={`${PlusJakartaSans} font-bold text-[18] leading-6 tracking-normal`}
        >
          Search Results
        </h1>
      </div>

      {/* grilla de peliculas */}

      <div className="flex flex-vertical w-full min-w-[960px] h-fit min-h-[398px] p-4 g-3">
        {isLoading ? <h1>Cargando...</h1> : null}

        <div className="flex-col w-full h-fit p-4 gap-3 grid grid-cols-4">
          {currentMovies.map((movie) => (
            <Link href={`/pages/movies/${movie.id}`} key={`${movie.title}`}>
              <div className="flex flex-col w-full h-full min-h-[366px] pb-3 gap-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-56 h-[297px] rounded-[12px]"
                />

                <div className="flex flex-col w-full h-fit">
                  <h1>{movie.title}</h1>
                  <p>{movie.genres.map((item) => item.name).join(", ")}</p>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex items-center justify-center w-[960px] h-[967]">
            {isError ? (
              <h1 className={`${PlusJakartaSans} text-10`}>
                ¡ Ups ! Ocurrió un error
              </h1>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                currentPage === page ? "bg-buttoms" : "bg-bottons-selected"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
