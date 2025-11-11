import { createContext, useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosProtected";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [addLoading, setAddLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [favorite, setFavorite] = useState([]);

  const axiosSecure = useAxiosSecure();

  const addToFavorite = async (userEmail, artwork) => {
    if (!userEmail || !artwork?._id) return;
    setAddLoading(true);
    try {
      const response = await axiosSecure.post(`/my-favorite`, {
        userEmail,
        artwork,
      });
      if (response.data.success) {
        toast.success("Added to favorites!");
      } else {
        toast.error("Already in favorites!");
      }
      console.log(response);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add favorite!");
      console.log(error);
    } finally {
      setAddLoading(false);
    }
  };

  const fetchFavorite = async (email) => {
    if (!email) return;
    setFetchLoading(true);
    try {
      const response = await axiosSecure.get(`/my-favorite/${email}`);
      if (response.data.success) {
        setFavorite(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFetchLoading(false);
    }
  };

  const deleteArtFromFavorite = async (id) => {
    if (!id) return;
    setDeleteLoading(true);
    try {
      const response = await axiosSecure.delete(`/my-favorite/${id}`);

      if (response.data.success) {
        setFavorite((prev) => prev.filter((fav) => fav._id !== id));
        toast.success("Artwork removed from favorites successfully");
      } else {
        toast.error(response.data.message || "Failed to remove artwork");
      }
    } catch (error) {
      console.error("Error removing favorite artwork:", error.message);
      toast.error("Something went wrong while removing the favorite artwork");
    } finally {
      setDeleteLoading(false);
    }
  };

  const favoriteInfo = {
    //.........loading.........../
    addLoading,
    fetchLoading,
    deleteLoading,
    //............Data.............../
    favorite,
    //...........function............/
    addToFavorite,
    fetchFavorite,
    deleteArtFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={favoriteInfo}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
