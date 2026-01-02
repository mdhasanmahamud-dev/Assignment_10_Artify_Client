// EventCard.jsx
import React from "react";

const EventCard = () => {
  const events = [
    {
      id: 1,
      title: "Artify Creative Contest 2026",
      date: "Jan 15, 2026",
      location: "Online",
      image:
        "https://i.ibb.co.com/tT3FCzkv/yeonhee-TJQ81-Pl-Er-II-unsplash.jpg",
      organizer: "Artify Team",
      description:
        "Join the ultimate digital art competition and showcase your creativity to a global audience. Open for all skill levels.",
      seats: "Open",
      tags: ["Contest", "Digital Art"],
    },
    {
      id: 2,
      title: "Fusion of Colors – Collaboration",
      date: "Feb 10, 2026",
      location: "New York, USA",
      image:
        "https://i.ibb.co.com/N6bZGzzt/hillary-ungson-Tdp-SX7-XAc-Ko-unsplash.jpg",
      organizer: "Creative Hub NYC",
      description:
        "Collaborate with top artists in this live event focusing on mixed media and color theory.",
      seats: "50",
      tags: ["Collaboration", "Workshop"],
    },
    {
      id: 3,
      title: "Digital Art Workshop",
      date: "Mar 5, 2026",
      location: "Online",
      image:
        "https://i.ibb.co.com/XZVrZLMw/spencer-chow-7m6-SF-cdh-s-unsplash.jpg",
      organizer: "Artify Academy",
      description:
        "Learn advanced digital painting techniques and tools from professional artists.",
      seats: "100",
      tags: ["Workshop", "Learning"],
    },
  ];

  return (
    <div className="my-20 container mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div
          key={event.id}
          className="relative bg-white dark:bg-zinc-900 rounded-2xl  overflow-hidden  transition-all duration-300"
        >
          {/* Event Image */}
          <div className="relative h-56">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            {/* Tags */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Event Info */}
          <div className="p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
              {event.date} | {event.location}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm italic">
              Organizer: {event.organizer}
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 line-clamp-3">
              {event.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Seats: {event.seats}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
