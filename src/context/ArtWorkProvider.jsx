import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import apiClient from "../api/apiClient";
export const ArtWorkContext = createContext(null);

const ArtWorkProvider = ({ children }) => {
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [latestArtWorkLoading, setLatestArtWorkLoading] = useState(true);
  const [addNewArtsLoading, setAddNewArtsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArtworks = async () => {
      setLatestArtWorkLoading(true);
      try {
        const response = await apiClient.get(`/artworks/latest`);
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

  const addNewArt = async (artWorkData) => {
    setAddNewArtsLoading(true);
    try {
      const response = await apiClient.post("/artworks", artWorkData);
      if (response.data.success) {
        setLatestArtworks((prev) => [response.data.data, ...prev]);
      }
      console.log(response);
    } catch (error) {
      console.log("Error adding artwork:", error);
    } finally {
      setAddNewArtsLoading(false);
    }
  };
  const artInfo = {
    latestArtWorkLoading,
    addNewArtsLoading,
    latestArtworks,
    addNewArt,
  };
  return (
    <ArtWorkContext.Provider value={artInfo}>
      {children}
    </ArtWorkContext.Provider>
  );
};

export default ArtWorkProvider;
