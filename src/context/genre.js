import { createContext, useContext, useState } from "react";
import { games } from "../data/api";

export const CartContext = createContext();
export const GenreContext=createContext();

export const GenreProvider = ({ children }) => {
    const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => {
  const context = useContext(GenreContext);
  const chooseGenre = (genre) => {
         // Filter games by selected genre, or return all games if no genre is selected so that all games are displayed.
    context.setSelectedGenre(genre)
  };

 
 
  return {
    selectedGenre: context.genre,
    setSelectedGenre:chooseGenre,
  };
};
