import FeaturedArtworksCard from "./FeaturedArtworksCard";
import useArtWorkHook from "../../../hooks/useArtWorkHook";
import Spiner from "../../../components/Spiner";

const FeaturedArtworksCards = () => {
  const { latestArtWorkLoading, latestArtworks: featuredArtworks } =
    useArtWorkHook();

  if (latestArtWorkLoading) return <Spiner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {featuredArtworks.map((art, index) => (
        <FeaturedArtworksCard key={index} art={art} />
      ))}
    </div>
  );
};

export default FeaturedArtworksCards;
