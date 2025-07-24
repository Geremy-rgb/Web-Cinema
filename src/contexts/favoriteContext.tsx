"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Movie from "../interfaces/moviesType";

interface favoriteContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}

export const FavoriteContext = createContext<favoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };


  return (
     <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
    const context = useContext(FavoriteContext)
    if(!context){
        throw new Error("Necesito un provider") 
    }
    return context;
}