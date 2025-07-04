import { useSearchContext } from "@/contexts/SearchContext";
import React from "react";

type InputTypes = {
  className: string;
}

function SearchInput({className}: InputTypes) {

  const { searchTerm, setSearchTerm } = useSearchContext();

  return (
    <div>

      <div className="flex flex-col w-[160px] h-[40px] min-w-[160px] max-w-[256px] relative">

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={className}
        />

        <img
          src="/vectorSearch.png"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
    </div>
  );
}

export default SearchInput;
