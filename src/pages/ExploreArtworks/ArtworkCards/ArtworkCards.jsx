import Spiner from "../../../components/Spiner";
import ArtworkCard from "../ArtworkCard/ArtworkCard";

const ArtworkCards = ({ publicArtworks, publicArtLoading }) => {
  if (publicArtLoading) return <Spiner />;
  return (
    <div data-aos="fade-down" className="container max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {publicArtworks.map((art, index) => (
        <ArtworkCard key={index} art={art} />
      ))}
    </div>
  );
};

export default ArtworkCards;
