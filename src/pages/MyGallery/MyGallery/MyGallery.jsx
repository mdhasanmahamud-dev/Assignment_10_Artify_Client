import { useEffect } from "react";
import useArtWorkHook from "../../../hooks/useArtWorkHook";
import useUserHook from "../../../hooks/useUserHook";
import PageHeader from "../../../components/PageHeader";
import MyGalleryCards from "../MyGalleryCards/MyGalleryCards";
const MyGallery = () => {
  const { galleryLoading, myGallery, fetchMyGallery } = useArtWorkHook();
  const { user } = useUserHook();
  useEffect(() => {
    const loadGallery = async () => {
      await fetchMyGallery(user?.email);
    };
    loadGallery();
  }, [user?._id]);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10">
      <PageHeader
        title="My Personal Art Gallery"
        subtitle="Explore all your uploaded artworks in one place. Update, manage, and showcase your creativity effortlessly!"
      />
      <MyGalleryCards myGallery={myGallery} galleryLoading={galleryLoading} />
    </div>
  );
};

export default MyGallery;
