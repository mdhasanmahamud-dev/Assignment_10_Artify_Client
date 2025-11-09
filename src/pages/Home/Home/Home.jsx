import React from "react";
import Banner from "../Banner/Banner";
import FeaturedArtworks from "../FeaturedArtworks/FeaturedArtworks";
import TopArtists from "../TopArtists/TopArtists";
import CommunityHighlights from "../CommunityHighlights/CommunityHighlights";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedArtworks />
      <TopArtists />
      <CommunityHighlights />
    </div>
  );
};

export default Home;
