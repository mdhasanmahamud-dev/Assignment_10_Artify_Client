import React from "react";
import MyFavoriteCard from "../MyFavoriteCard/MyFavoriteCard";
import Spiner from "../../../components/Spiner";

const MyFavoriteCards = ({ fetchLoading, favorite }) => {
    console.log(favorite)
  if (fetchLoading) return <Spiner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorite.map((fav, index) => (
        <MyFavoriteCard key={index} fav={fav} />
      ))}
    </div>
  );
};

export default MyFavoriteCards;
