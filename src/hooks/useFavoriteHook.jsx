import  { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteProvider";

const useFavoriteHook = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Favorite Hook must be used within Favorite Provider");
  }
  return context;
};

export default useFavoriteHook;
