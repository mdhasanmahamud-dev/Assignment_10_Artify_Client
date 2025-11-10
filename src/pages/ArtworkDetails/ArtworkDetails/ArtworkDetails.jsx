import React, { useEffect } from "react";
import ArtworkDetailsCard from "../ArtworkDetailsCard/ArtworkDetailsCard";
import useArtWorkHook from "../../../hooks/useArtWorkHook";
import { useParams } from "react-router";

const ArtworkDetails = () => {
  const { id } = useParams();
  const { fetchArtworkDetails, artworkDetail, artDetailLoading } =
    useArtWorkHook();

  useEffect(() => {
    const getArtwork = async () => {
      try {
        if (id) {
          await fetchArtworkDetails(id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getArtwork();
  }, [id]);

  return (
    <div>
      <ArtworkDetailsCard
        artworkDetail={artworkDetail}
        artDetailLoading={artDetailLoading}
      />
    </div>
  );
};

export default ArtworkDetails;
