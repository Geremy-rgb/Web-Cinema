"use client";

import { useContext } from "react";
import plusJakartaSans from "../../TextFonts/Fonts";
import BackButton from "../ui/backBotton";
import Movie from "../../interfaces/moviesType";
import { FavoriteContext } from "../../contexts/favoriteContext";


export default function MovieDetail({ movie }: { movie: Movie }) {

  const context = useContext(FavoriteContext);
  if (!context) return null;

  const { favorites, addFavorite, removeFavorite } = context;
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="flex w-full h-full pt-[20px] pr-[160px] pb-[20px] pl-[160px] justify-center">
      <div className="flex flex-col w-full h-[695px] max-w-[960px]">
        <div className="flex w-[960px] h-[344px] min-h-[344px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] ">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={`${movie.title}`}
            className="w-full h-full rounded-[10px] object-cover bg-black"
          />
        </div>

        <div className="flex w-full h-[72px] justify-between p-[16px]">
          <div className="flex flex-col w-[288px] h-[40px] w-min-[288px]">
            <h1
              className={`${plusJakartaSans} flex w-[700] text-[32px] leading-[40px] font-bold`}
            >
              {movie.title}
            </h1>
          </div>
          <div className="flex w-[141] h-[40px] min-w-[84px] max-w-[480px] pt-[8px]">
            <button
              onClick={() =>
                isFavorite ? removeFavorite(movie.id) : addFavorite(movie)
              }
              className="bg-buttoms text-[16px] w-[141px] h-[32px] rounded-2xl"
            >
              {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
          </div>
        </div>
        <div className="flex w-full h-[37px] pt-[4px] pb-[12px] pr-[16px] pl-[16px]">
          <div className="w-[928] h-[21px]">
            <h2
              className={`${plusJakartaSans} text-[#C79194] w-[400] text-[14px] leading-[21px]`}
            >
              Release Date: {movie.release_date} | Rating:{" "}
              {movie.vote_average.toFixed(1)} | Duration: {movie.runtime} min
            </h2>
          </div>
        </div>

        {/* mapeado de botones para generos */}

        <div className="flex w-full h-[58px] pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[12px]">
          <div className="flex w-auto h-[32px] rounded-[8px] pr-[16px] pl-[16px] gap-[8px]">
            {movie.genres.map((genre) => (
              <button
                key={genre.id}
                className="px-2 py-1 bg-buttoms rounded text-sm"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* descripcion de la pelicula */}

        <div className="flex flex-col w-[960px] h-[136px] pt-[4px] pr-[16px] pb-[12px] pl-[16px]">
          <div className="flex w-[928px] h-[120px]">
            <h2
              className={`${plusJakartaSans} font-normal text-base leading-6 tracking-normal`}
            >
              {movie.overview}
            </h2>
          </div>
        </div>

        <BackButton />
      </div>
    </div>
  );
}
