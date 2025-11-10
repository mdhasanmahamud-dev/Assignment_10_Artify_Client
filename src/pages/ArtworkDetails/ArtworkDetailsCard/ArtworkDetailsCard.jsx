import { FaHeart, FaStar } from "react-icons/fa";
import useUserHook from "../../../hooks/useUserHook";
import useArtWorkHook from "../../../hooks/useArtWorkHook";

const ArtworkDetailsCard = ({ artworkDetail }) => {
  const { user } = useUserHook();
  const { increaseLike } = useArtWorkHook();

  // Like button click handler
  const handleLike = async () => {
    if (!artworkDetail?._id) return;
    await increaseLike(artworkDetail._id);
    console.log("Like updated successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto  text-gray-200 rounded-3xl shadow-2xl overflow-hidden border border-zinc-800 mt-10 md:px-4 p-3">
      <div className="md:flex items-center">
        {/* Artwork Image */}
        <div className="md:w-1/2">
          <img
            src={artworkDetail?.imageUrl}
            alt={artworkDetail?.title}
            className="w-full h-92 object-cover  rounded-lg"
          />
        </div>

        {/* Artwork Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
          {/* Title, Medium & Category */}
          <div>
            <h1 className="text-3xl font-bold text-teal-400 mb-2">
              {artworkDetail?.title}
            </h1>
            <p className="text-gray-300 italic mb-1">
              Medium: {artworkDetail?.medium}
            </p>
            <p className="text-gray-400 italic mb-4">
              Category: {artworkDetail?.category || "Digital Art"}
            </p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Description
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {artworkDetail?.description}
            </p>
          </div>

          {/* Artist Info (Static) */}
          <div className="flex items-center gap-4 border-t border-zinc-700 pt-4">
            <img
              src={user?.photoURL}
              alt="Artist Name"
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
            />
            <div>
              <p className="font-semibold text-white">
                {artworkDetail?.userName}
              </p>
              <p className="text-gray-400 text-sm">5 Artworks</p>
            </div>
          </div>

          {/* Action Buttons (Static) */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleLike}
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
            >
              <FaHeart /> Like
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-md  transition-all duration-300 cursor-pointer">
              <FaStar /> Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailsCard;
