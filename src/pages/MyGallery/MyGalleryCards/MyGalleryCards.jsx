import Spiner from "../../../components/Spiner";
import MyGalleryCard from "../MyGalleryCard/MyGalleryCard";

const MyGalleryCards = ({ myGallery, galleryLoading }) => {
  if (galleryLoading) return <Spiner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {myGallery.map((gallery, index) => (
        <MyGalleryCard key={index} gallery={gallery} />
      ))}
    </div>
  );
};

export default MyGalleryCards;
