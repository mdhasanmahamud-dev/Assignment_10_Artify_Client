import React, { useEffect } from "react";
import useFavoriteHook from "../../../hooks/useFavoriteHook";
import useUserHook from "../../../hooks/useUserHook";
import PageHeader from "../../../components/PageHeader";
import MyFavoriteCards from "../MyFavoriteCards/MyFavoriteCards";

const MyFavorites = () => {
  const { fetchLoading, fetchFavorite , favorite} = useFavoriteHook();
  const { user } = useUserHook();
  useEffect(() => {
    const loadFavorite = async () => {
      await fetchFavorite(user?.email);
    };
    loadFavorite();
  }, [user?.email]);
  return (
    <div className="py-10">
      <PageHeader
        title="My Favorite Artworks"
        subtitle="Here are all the artworks you've added to your favorites."
      />
      <MyFavoriteCards
        fetchLoading={fetchLoading}
        favorite={favorite}
      />
    </div>
  );
};

export default MyFavorites;
