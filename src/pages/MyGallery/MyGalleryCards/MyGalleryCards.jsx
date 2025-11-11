import Spiner from "../../../components/Spiner";
import MyGalleryCard from "../MyGalleryCard/MyGalleryCard";

const MyGalleryCards = ({ myGallery, galleryLoading }) => {
  if (galleryLoading) return <Spiner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4">
      {myGallery && myGallery.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myGallery.map((gallery, index) => (
            <MyGalleryCard key={index} gallery={gallery} />
          ))}
        </div>
      ) : (
        <p className="text-gray-100 font-semibold text-center">
          No artworks found in your gallery.
        </p>
      )}
    </div>
  );
};

export default MyGalleryCards;
