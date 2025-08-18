"use client";
import { useGetGenres } from "@/hooks/UseGetGenres";
import PlusJakartaSans from "@/TextFonts/Fonts";

interface Props {
  selectedGenre: number | null;
  setSelectedGenre: (id: number | null) => void;
}

export default function SearchCategories({
  selectedGenre,
  setSelectedGenre,
}: Props) {
  const { genres, isLoading, isError } = useGetGenres();

  if (isLoading) return <p>Cargando categorías...</p>;
  if (isError) return <p>Error al cargar categorías</p>;

  return (
    <div className="flex flex-nowrap overflow-x-auto w-full h-fit min-h-14 p-3">
      {genres.map((genre) => (
        <div
          key={`${genre.id}`}
          className="flex w-fit h-[32px] rounded-[8px] pr-2 pl-2 gap-2"
        >
          <button
            key={genre.id}
            onClick={() =>
              setSelectedGenre(selectedGenre === genre.id ? null : genre.id)
            }
            className={`flex justify-center items-center w-fit h-[32px] rounded-[8px] pr-2 pl-2  ${
              selectedGenre === genre.id ? "bg-bottons-selected" : "bg-buttoms"
            }`}
          >
            <div className="flex flex-col w-full h-fit">
              <span
                className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}
              >
                {genre.name}
              </span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
