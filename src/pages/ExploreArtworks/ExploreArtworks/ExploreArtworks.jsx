import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PageHeader from "../../../components/PageHeader";
import useArtWorkHook from "../../../hooks/useArtWorkHook";
import ArtworkCards from "../ArtworkCards/ArtworkCards";

const ExploreArtworks = () => {
  const { fetchPublicArtworks, publicArtworks, publicArtLoading } =
    useArtWorkHook();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) await fetchPublicArtworks();
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10">
      <PageHeader
        title="Explore Artworks"
        subtitle="Discover amazing artworks from talented artists. Search by title or artist to find your favorite pieces."
      />
      <SearchBar />
      <ArtworkCards
        publicArtworks={publicArtworks}
        publicArtLoading={publicArtLoading}
      />
    </div>
  );
};

export default ExploreArtworks;
