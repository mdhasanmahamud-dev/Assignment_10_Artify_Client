// components/RecentArtworks.jsx
import React from "react";

const RecentArtworks = () => {
  const artworks = [
    { name: "Sunset Canvas", date: "2 days ago" },
    { name: "Abstract Flow", date: "3 days ago" },
    { name: "Night City", date: "5 days ago" },
    { name: "Minimal Lines", date: "1 week ago" },
  ];

  return (
    <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
      <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Recent Artworks
      </h2>

      <ul className="space-y-3">
        {artworks.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentArtworks;
