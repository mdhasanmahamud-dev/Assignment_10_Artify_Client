import React from "react";
import Banner from "../Banner/Banner";
import FeaturedArtworks from "../FeaturedArtworks/FeaturedArtworks";
import TopArtists from "../TopArtists/TopArtists";
import CommunityHighlights from "../CommunityHighlights/CommunityHighlights";
import ArtCategories from "../ArtCategories/ArtCategories";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";
import Events from "../Events/Events";

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
      <Events/>
    </div>
  );
};

export default Home;
