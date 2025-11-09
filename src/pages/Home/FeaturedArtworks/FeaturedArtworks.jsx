import SectionTitle from "../../../components/SectionTitle";
import FeaturedArtworksCards from "./FeaturedArtworksCards";

const FeaturedArtworks = () => {
  return (
    <div className="py-10">
      <SectionTitle
        title="Featured Artworks"
        subTitle="Discover the latest creations from talented artists"
      />
      <FeaturedArtworksCards />
    </div>
  );
};

export default FeaturedArtworks;
