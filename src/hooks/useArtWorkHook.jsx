import React from "react";
import { useContext } from "react";
import { ArtWorkContext } from "../context/ArtWorkProvider";

const useArtWorkHook = () => {
  const context = useContext(ArtWorkContext);
  if (!context) {
    throw new Error("useArtHook must be used within AuthProvider");
  }
  return context;
};

export default useArtWorkHook;
