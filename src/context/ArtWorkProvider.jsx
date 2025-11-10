import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";
import apiClient from "../api/apiClient";
export const ArtWorkContext = createContext(null);
import SuccessSweetAlart from "../components/SuccessSweetAlart";
const ArtWorkProvider = ({ children }) => {
  //Loading States
  const [addNewArtsLoading, setAddNewArtsLoading] = useState(false);
  const [latestArtWorkLoading, setLatestArtWorkLoading] = useState(false);
  const [publicArtLoading, setPublicArtLoading] = useState(false);
  const [artDetailLoading, setArtDetailLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  //Data States
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [publicArtworks, setPublicArtworks] = useState([]);
  const [artworkDetail, setArtworkDetail] = useState(null);
  const [myGallery, setMyGallery] = useState([]);

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
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLikeLoading(false);
    }
  };

  //////////////////////////////My Gallery Page related //////////////////////////////
  // My Gallery Artworks function
  const fetchMyGallery = async (userEmail) => {
    if (!userEmail) return;
    setGalleryLoading(true);
    try {
      const response = await apiClient.get(`/my-gallery/${userEmail}`);
      if (response.data.success) {
        setMyGallery(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching My Gallery artworks:", error);
    } finally {
      setGalleryLoading(false);
    }
  };

  // Delete artwork from gallery with confirmation
  const deleteArtFromGallery = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirmResult.isConfirmed) {
      try {
        setDeleteLoading(true);
        const response = await apiClient.delete(`/my-gallery/${id}`);

        if (response.data.success) {
          setMyGallery((prev) => prev.filter((art) => art._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your artwork has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while deleting.",
          icon: "error",
        });
      } finally {
        setDeleteLoading(false);
      }
    }
  };

  //Update Art work
  const updateArtWork = async (id, updatedData) => {
    setUpdateLoading(true);
    try {
      const response = await apiClient.put(`/my-gallery/${id}`, updatedData);
      console.log(response)
      if (response.data.success) {
        setMyGallery((prev) =>
          prev.map((art) => (art._id === id ? response.data.data : art))
        );
        Swal.fire({
          title: "Updated!",
          text: "Your artwork has been updated successfully.",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while updating.",
        icon: "error",
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  const artInfo = {
    ////////loading////////////
    latestArtWorkLoading,
    addNewArtsLoading,
    publicArtLoading,
    artDetailLoading,
    galleryLoading,
    deleteLoading,
    updateLoading,
    ///////////state data/////////////
    latestArtworks,
    publicArtworks,
    artworkDetail,
    myGallery,
    ///////////function///////////
    setPublicArtworks,
    addNewArt,
    fetchPublicArtworks,
    fetchArtworkDetails,
    increaseLike,
    fetchMyGallery,
    deleteArtFromGallery,
    updateArtWork,
  };
  return (
    <ArtWorkContext.Provider value={artInfo}>
      {children}
    </ArtWorkContext.Provider>
  );
};

export default ArtWorkProvider;
