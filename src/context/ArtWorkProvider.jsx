import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import apiClient from "../api/apiClient";
export const ArtWorkContext = createContext(null);
import SuccessSweetAlart from "../components/SuccessSweetAlart";
const ArtWorkProvider = ({ children }) => {
  //Loading States
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [latestArtWorkLoading, setLatestArtWorkLoading] = useState(true);
  const [publicArtLoading, setPublicArtLoading] = useState(true);
  const [artDetailLoading, setArtDetailLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(true);
  //Data States
  const [addNewArtsLoading, setAddNewArtsLoading] = useState(true);
  const [publicArtworks, setPublicArtworks] = useState([]);
  const [artworkDetail, setArtworkDetail] = useState(null);

  // Fetch Latest Artworks
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

  // Add New Art Work
  const addNewArt = async (artWorkData) => {
    setAddNewArtsLoading(true);
    try {
      const response = await apiClient.post("/artworks", artWorkData);
      if (response.data.success) {
        setLatestArtworks((prev) => [response.data.data, ...prev]);
      }
      SuccessSweetAlart(response.data.message);
      console.log(response);
    } catch (error) {
      console.log("Error adding artwork:", error);
    } finally {
      setAddNewArtsLoading(false);
    }
  };

  //Fetch Public Artworks
  const fetchPublicArtworks = async (searchTerm = "") => {
    setPublicArtLoading(true);
    try {
      const url = searchTerm
        ? `/artworks/public?search=${searchTerm}`
        : `/artworks/public`;
      const response = await apiClient.get(url);
      if (response.data.success) {
        setPublicArtworks(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching public artworks:", error);
    } finally {
      setPublicArtLoading(false);
    }
  };

  // Fetch Single Artwork Details
  const fetchArtworkDetails = async (id) => {
    setArtDetailLoading(true);
    try {
      const response = await apiClient.get(`/artworks/${id}`);
      console.log(response);
      if (response.data.success) {
        setArtworkDetail(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching artwork details:", error);
    } finally {
      setArtDetailLoading(false);
    }
  };

  //Handle increase like
  const increaseLike = async (id) => {
    setLikeLoading(true);
    try {
      const response = await apiClient.patch(`/artworks/like/${id}`);
     console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLikeLoading(false);
    }
  };
  const artInfo = {
    latestArtWorkLoading,
    addNewArtsLoading,
    publicArtLoading,
    artDetailLoading,
    ////////////////////////
    latestArtworks,
    publicArtworks,
    artworkDetail,
    //////////////////////
    setPublicArtworks,
    addNewArt,
    fetchPublicArtworks,
    fetchArtworkDetails,
    increaseLike,
  };
  return (
    <ArtWorkContext.Provider value={artInfo}>
      {children}
    </ArtWorkContext.Provider>
  );
};

export default ArtWorkProvider;
