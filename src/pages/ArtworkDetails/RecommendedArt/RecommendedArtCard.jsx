import { NavLink } from "react-router";
import Spiner from "../../../components/Spiner";

const RecommendedArtCard = ({ recommendedLoading, recommendedArts }) => {
  if (recommendedLoading) return <Spiner />;

  if (!recommendedArts || recommendedArts.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No recommended artworks found.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-4 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedArts.map(
          ({ _id, title, imageUrl, userName, category, like }) => (
            <div
              key={_id}
              data-aos="fade-up"
              className="group bg-zinc-900 hover:bg-zinc-950 text-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 pb-3"
            >
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
                  dark:group-hover:border-l dark:group-hover:border-r dark:group-hover:border-b dark:group-hover:border-teal-400
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
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-4">
                    <span className="font-medium">Likes:</span> {like}
                  </p>
                </div>

                {/* View Details Button */}
                <NavLink
                  to={`/artworks/${_id}`}
                  className="
                    bg-indigo-600 hover:bg-indigo-700
                    text-white font-semibold
                    px-5 py-2
                    rounded-lg
                    transition-all duration-300
                    shadow-sm hover:shadow-md
                    w-full
                    text-center
                  "
                >
                  View Details
                </NavLink>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecommendedArtCard;
