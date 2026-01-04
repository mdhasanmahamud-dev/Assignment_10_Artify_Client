import React from "react";
import Spiner from "../../components/Spiner";

const RecentArtworkCard = ({ latestArtworks, latestArtWorkLoading }) => {
  if (latestArtWorkLoading) return <Spiner />;
  return (
    <div>
      <ul className="space-y-3">
        {latestArtworks?.map((art) => (
          <li
            key={art._id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            <span className="text-sm font-medium">{art.title}</span>
            <span className="text-xs text-gray-500">
              {new Date(art.createdAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentArtworkCard;
