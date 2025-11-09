import React from "react";
import FeaturedArtworksCard from "./FeaturedArtworksCard";

const FeaturedArtworksCards = ({ featuredArtworks }) => {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {featuredArtworks.map((art, index) => (
        <FeaturedArtworksCard key={index} art={art} />
      ))}
    </div>
  );
};

export default FeaturedArtworksCards;
