import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import FeaturedArtworksCards from "./FeaturedArtworksCards";

const FeaturedArtworks = () => {
  const featuredArtworks = [
    {
      id: 1,
      title: "Neon Dreams",
      artistName: "Wang Z",
      category: "Digital",
      image:
        "https://i.ibb.co.com/KpRrVKtS/neon-wang-z-V5-PF1-BMIBo-unsplash.jpg",
    },
    {
      id: 2,
      title: "Abstract Colors",
      artistName: "Wang JB",
      category: "Abstract",
      image:
        "https://i.ibb.co.com/mCs8d3kT/neon-wang-jb-WNYBp-Do-Yk-unsplash.jpg",
    },
    {
      id: 3,
      title: "Modern Art Highlights",
      artistName: "Wang 60",
      category: "Modern",
      image:
        "https://i.ibb.co.com/prJbLHfh/neon-wang-60-NH1-NVEe-C4-unsplash.jpg",
    },
    {
      id: 4,
      title: "Digital Creativity",
      artistName: "Wang PM",
      category: "Digital",
      image:
        "https://i.ibb.co.com/zTLmB695/neon-wang-Pm-F9-Ec-Hv-FB0-unsplash.jpg",
    },
    {
      id: 5,
      title: "Nature Inspired Art",
      artistName: "Shubham Dhage",
      category: "Nature",
      image:
        "https://i.ibb.co.com/60yZVh72/shubham-dhage-KRXJWZHaa-WA-unsplash.jpg",
    },
    {
      id: 6,
      title: "Masterpieces in Focus",
      artistName: "Lin Renais",
      category: "Contemporary",
      image:
        "https://i.ibb.co.com/p6SLzcd9/lin-renais-NOs-Ck-C7jzl-M-unsplash.jpg",
    },
  ];

  return (
    <div className="py-10">
      <SectionTitle
        title="Featured Artworks"
        subTitle="Discover the latest creations from talented artists"
      />
      <FeaturedArtworksCards featuredArtworks={featuredArtworks}/>
    </div>
  );
};

export default FeaturedArtworks;
