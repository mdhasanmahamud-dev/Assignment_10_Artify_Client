import React from "react";
import ArtCategoriesCard from "./ArtCategoriesCard";
import SectionTitle from "../../../components/SectionTitle";

const ArtCategories = () => {
  return (
    <div className="py-10 bg-slate-200 dark:bg-zinc-900">
      <SectionTitle
        subTitle="Discover Artistic Styles"
        title="Art Categories Showcase"
      />
      <ArtCategoriesCard />
    </div>
  );
};

export default ArtCategories;
