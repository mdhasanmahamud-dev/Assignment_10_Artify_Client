import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import TopArtistsCard from "./TopArtistsCard";

const TopArtists = () => {
  return (
    <div data-aos="fade-down-left" className="py-10 bg-slate-200 dark:bg-black">
      <SectionTitle
        title="Top Artists"
        subTitle="Celebrating the most creative minds"
      />
      <TopArtistsCard />
    </div>
  );
};

export default TopArtists;
