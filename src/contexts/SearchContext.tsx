"use client"

import { createContext, useContext, useState, ReactNode } from "react";


type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);


export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
    const context = useContext(SearchContext)
    if(!context){
        throw new Error("Necesito un provider") 
    }
    return context;
}
