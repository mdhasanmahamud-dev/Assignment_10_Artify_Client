import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router";
import useArtWorkHook from "../../../hooks/useArtWorkHook";

const MyGalleryCard = ({ gallery }) => {
  const { _id, imageUrl, title, userName, category, like } = gallery;
  const { deleteLoading, deleteArtFromGallery } = useArtWorkHook();

  const handleDelete = async (id) => {
    await deleteArtFromGallery(id);
  };
  return (
    <div className="group bg-zinc-900 hover:bg-zinc-950 text-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-md">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-md rounded-b-none"
      />

      {/* Content */}
      <div
        className="
          p-6 
          flex flex-col justify-between 
          h-52 
          border-l border-r border-b border-transparent
          group-hover:border-l group-hover:border-r group-hover:border-b group-hover:border-teal-400
          transition-all duration-300 ease-in-out
          bg-zinc-900 group-hover:bg-zinc-950
          rounded-b-sm
        "
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-100 truncate font-playfair">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-1">
            <span className="font-medium">Artist:</span> {userName}
          </p>
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-medium">Category:</span> {category}
          </p>
        </div>

        {/*  Likes  Action Buttons */}
        <div className="flex items-center justify-between mt-4">
          {/* Likes */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <span className="font-medium">Likes:</span> {like}
          </p>

          {/* Edit & Delete Icons */}
          <div className="flex items-center gap-3">
            <NavLink
              to={`/my-gallery/edit/${_id}`}
              className="p-2 rounded-full bg-teal-600 hover:bg-teal-700 transition"
              title="Edit Artwork"
            >
              <FaEdit size={16} />
            </NavLink>

            <button
              onClick={() => handleDelete(_id)}
              className={`p-2 rounded-full bg-red-600 hover:bg-red-700 transition cursor-pointer`}
              title="Delete Artwork"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGalleryCard;
