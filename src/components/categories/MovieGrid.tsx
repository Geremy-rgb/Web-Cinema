"use client";
import Link from "next/link";
import Movie from "@/interfaces/moviesType";
import PlusJakartaSans from "@/TextFonts/Fonts";
import { useSearchContext } from "@/contexts/SearchContext";

interface Props {
  movies: Movie[];
}

export default function MovieGrid({ movies }: Props) {
  const { searchTerm } = useSearchContext();

  const filteredMovies = movies.filter((movie) => {
    const term = searchTerm.toLowerCase();
    return movie.title.toLowerCase().includes(term);
  });

  return (
    <div className="flex flex-col w-full h-fit p-4 gap-4">
      <div className="grid grid-cols-5 w-full h-fit gap-3">
        {filteredMovies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <div className="flex flex-col w-44 h-fit min-h-[283px] pb-3 gap-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-44 h-[235px] rounded-[8px]"
              />

              <div className="flex flex-col w-full h-fit">
                <h3
                  className={`${PlusJakartaSans} font-medium text-[16px] leading-6 tracking-normal`}
                >
                  {movie.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
