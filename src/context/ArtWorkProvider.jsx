import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const ArtWorkContext = createContext(null);

const ArtWorkProvider = ({ children }) => {
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [latestArtWorkLoading, setLatestArtWorkLoading] = useState(true);
  const [artLoading, setArtLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArtworks = async () => {
      setLatestArtWorkLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/artworks/latest`
        );
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
