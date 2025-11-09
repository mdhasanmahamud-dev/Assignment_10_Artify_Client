import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import apiClient from "../api/apiClient";
export const ArtWorkContext = createContext(null);

const ArtWorkProvider = ({ children }) => {
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [latestArtWorkLoading, setLatestArtWorkLoading] = useState(true);
  const [artLoading, setArtLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArtworks = async () => {
      setLatestArtWorkLoading(true);
      try {
        const response = await apiClient.get(`/artworks/latest`);
        console.log(response.data.latestArtWorks);
        if (response.data.success) {
          setLatestArtworks(response.data.latestArtWorks);
        }
      } catch (error) {
        console.log("Error fetching latest artworks:", error);
      } finally {
        setLatestArtWorkLoading(false);
      }
    };
    fetchLatestArtworks();
  }, []);
  const artInfo = {
    artLoading,
    latestArtWorkLoading,
    latestArtworks,
  };
  return (
    <ArtWorkContext.Provider value={artInfo}>
      {children}
    </ArtWorkContext.Provider>
  );
};

export default ArtWorkProvider;
