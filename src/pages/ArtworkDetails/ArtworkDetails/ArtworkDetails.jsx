import React, { useEffect } from "react";
import ArtworkDetailsCard from "../ArtworkDetailsCard/ArtworkDetailsCard";
import useArtWorkHook from "../../../hooks/useArtWorkHook";
import { useParams } from "react-router";
import RecommendedArtCard from "../RecommendedArt/RecommendedArtCard";
import SectionTitle from "../../../components/SectionTitle";

const ArtworkDetails = () => {
  const { id } = useParams();
  const {
    fetchArtworkDetails,
    artworkDetail,
    artDetailLoading,
    recommendedLoading,
    fetchRecommendedArtworks,
    recommendedArts,
  } = useArtWorkHook();

  useEffect(() => {
    if (id) {
      fetchArtworkDetails(id);
      fetchRecommendedArtworks(id);
    }
  }, [id]);
  console.log(recommendedArts);
  return (
    <div>
      <ArtworkDetailsCard
        artworkDetail={artworkDetail}
        artDetailLoading={artDetailLoading}
      />
      <SectionTitle title="Recommended Artworks" subTitle="You may also like" />
      <RecommendedArtCard
        recommendedArts={recommendedArts}
        recommendedLoading={recommendedLoading}
      />
    </div>
  );
};

export default ArtworkDetails;
