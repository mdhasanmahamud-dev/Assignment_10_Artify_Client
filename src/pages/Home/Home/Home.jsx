import React from "react";
import Banner from "../Banner/Banner";
import FeaturedArtworks from "../FeaturedArtworks/FeaturedArtworks";
import TopArtists from "../TopArtists/TopArtists";
import CommunityHighlights from "../CommunityHighlights/CommunityHighlights";
import ArtCategories from "../ArtCategories/ArtCategories";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedArtworks />
      <TopArtists />
      <CommunityHighlights />
      <ArtCategories/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default Home;
