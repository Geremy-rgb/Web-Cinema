"use client";
import { useState } from "react";
import { useGetMoviesByGenreWithDetails } from "@/hooks/UseGetMoviesWhitDetail";
import SearchCategories from "@/components/categories/SearchCategories";
import MovieGrid from "@/components/categories/MovieGrid";
import PlusJakartaSans from "@/TextFonts/Fonts";

export default function SearchPage() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const { movies, isLoading, isError } =
    useGetMoviesByGenreWithDetails(selectedGenre);

  return (
    <div className="flex justify-center w-full h-full pt-5 pr-40 pb-5 pl-40">
      <div className="flex justify-center flex-col w-full h-fit max-w-[960px]">
        <div className="flex flex-col w-full h-fit pt-5 pr-4 pb-3 pl-4">
          <h1 className={`${PlusJakartaSans} font-bold text-3xl leading-9 tracking-normal `}>Explore by Genre</h1>
        </div>

        <SearchCategories
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        {isLoading && <p className="text-white">Cargando películas...</p>}
        {isError && <p className="text-white">Error al cargar películas</p>}

        <MovieGrid movies={movies} />

      </div>
    </div>
  );
}
