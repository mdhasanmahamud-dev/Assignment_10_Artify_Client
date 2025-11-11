import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import useFavoriteHook from "../../../hooks/useFavoriteHook";

const MyFavoriteCard = ({ fav }) => {
  console.log(fav._id);
  const { _id, title, imageUrl, category, medium, description, userEmail } =
    fav;

  const { deleteArtFromFavorite } = useFavoriteHook();
  const handleDeleteArtworkFromFavorite = async () => {
    try {
      await deleteArtFromFavorite(_id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="group bg-zinc-900 hover:bg-zinc-950 text-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-t-md"
      />

      {/* Content */}
      <div
        className=" flex flex-col justify-between flex-1 p-6 border-l border-r border-b border-transparent group-hover:border-l group-hover:border-r group-hover:border-b group-hover:border-teal-400 transition-all duration-300 ease-in-out bg-zinc-900 group-hover:bg-zinc-950 rounded-b-md
        "
      >
        {/* Top Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-100 truncate font-playfair">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-1">
            <span className="font-medium">Artist Email:</span> {userEmail}
          </p>
          <p className="text-gray-400 text-sm mb-1">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="text-gray-400 text-sm mb-1">
            <span className="font-medium">Medium:</span> {medium}
          </p>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>

        {/* Bottom Button */}
        <button
          onClick={handleDeleteArtworkFromFavorite}
          className="mt-4 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer w-full"
        >
          <FaHeartBroken /> Unfavorite
        </button>
      </div>
    </div>
  );
};

export default MyFavoriteCard;
