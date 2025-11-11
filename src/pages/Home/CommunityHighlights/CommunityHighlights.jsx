import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import CommunityHighlightCard from "./CommunityHighlightCard";

const CommunityHighlights = () => {
  return (
    <div className="py-10">
      <SectionTitle
        title="Community Highlights"
        subTitle="Explore the most engaging creations and activities from our vibrant community"
      />
      <CommunityHighlightCard />
    </div>
  );
};

export default CommunityHighlights;
