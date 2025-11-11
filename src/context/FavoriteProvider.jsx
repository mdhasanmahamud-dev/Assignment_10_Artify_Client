import { createContext, useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [addLoading, setAddLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const addToFavorite = async (userEmail, artwork) => {
    if (!userEmail || !artwork?._id) return;
    setAddLoading(true);
    try {
      const response = await apiClient.post(`/my-favorite`, {
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
      const response = await apiClient.get(`/my-favorite/${email}`);
      if (response.data.success) {
        setFavorite(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFetchLoading(false);
    }
  };

  const favoriteInfo = {
    addLoading,
    fetchLoading,
    /////////////
    favorite,
    //////////////
    addToFavorite,
    fetchFavorite,
  };
  return (
    <FavoriteContext.Provider value={favoriteInfo}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
