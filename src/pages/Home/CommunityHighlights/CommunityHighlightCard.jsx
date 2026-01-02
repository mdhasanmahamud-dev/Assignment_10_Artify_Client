import React from "react";
import { FaHeart } from "react-icons/fa";

const CommunityHighlightCard = () => {
  const highlights = [
    {
      id: 1,
      title: "Artify Creative Contest 2025",
      category: "Event",
      image:
        "https://i.ibb.co.com/1tRTK2nW/sandro-lopes-art-P0-Z9z-F-rnq-Q-unsplash.jpg",
      artist: "Aarav Das",
    },
    {
      id: 2,
      title: "Fusion of Colors – Collaboration Project",
      category: "Collaboration",
      image:
        "https://i.ibb.co.com/0khcCW0/dwayne-joe-eqmz-Wl-L-YWg-unsplash.jpg",
      artist: "Maya Rahman",
    },
    {
      id: 3,
      title: "Sadia Noor – Transforming Nature",
      category: "Spotlight",
      image:
        "https://i.ibb.co.com/KxWsJK3T/royal-anwar-g-Do-NB-BCkd-E-unsplash.jpg",
      artist: "Sadia Noor",
    },
  ];

  return (
    <div  className="my-16 container mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-700 group"
          >
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-zinc-900"></div>
            {/* Background Image */}
            <div
              className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent flex flex-col justify-end p-4">
                <button className="absolute top-5 right-5 text-xs bg-pink-600 px-2 py-1.5 rounded-sm">
                  {item.category}
                </button>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlightCard;
