import React from "react";

const ArtworkCard = ({ art }) => {
  const { imageUrl, title, userName, category } = art;

  return (
    <div className="group bg-zinc-900 hover:bg-zinc-950 text-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
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
          <p className="text-gray-400 text-sm mb-4">
            <span className="font-medium">Category:</span> {category}
          </p>
        </div>

        {/* View Details Button */}
        <button
          className="
          bg-indigo-600 hover:bg-indigo-700
          text-white font-semibold
          px-5 py-2
          rounded-lg
          transition-all duration-300
          shadow-sm hover:shadow-md
          w-full
        "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ArtworkCard;
