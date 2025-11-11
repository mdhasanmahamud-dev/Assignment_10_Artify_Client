import React from "react";
import ArtCategoriesCard from "./ArtCategoriesCard";
import SectionTitle from "../../../components/SectionTitle";

const ArtCategories = () => {
  return (
    <div className="py-10 bg-black/95">
      <SectionTitle
        subTitle="Discover Artistic Styles"
        title="Art Categories Showcase"
      />
      <ArtCategoriesCard />
    </div>
  );
};

export default ArtCategories;
