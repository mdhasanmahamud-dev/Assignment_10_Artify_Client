// components/StatCard.jsx
import React, { useEffect, useState } from "react";
import { FaImages, FaPaintBrush, FaHeart, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosProtected";

const StatCard = () => {
  const axiosSecure = useAxiosSecure();

  const [totalArtworks, setTotalArtworks] = useState(0);
  const [totalFavorites, setTotalFavorites] = useState(0);

  useEffect(() => {
    const fetchTotalArtworks = async () => {
      try {
        const res = await axiosSecure.get("/artworks/my-total-artworks");
        console.log(res);
        setTotalArtworks(res.data.totalArtworks);
      } catch (error) {
        console.error("Error fetching total artworks:", error);
      }
    };
    const fetchTotalFavorites = async () => {
      try {
        const res = await axiosSecure.get("/my-favorite/my-total-favorites");
        setTotalFavorites(res.data.totalFavorites);
      } catch (error) {
        console.error("Error fetching total favorites:", error);
      }
    };
    fetchTotalArtworks();
    fetchTotalFavorites();
  }, [axiosSecure]);
  const stats = [
    { title: "Total Artworks", value: totalArtworks, icon: <FaImages /> },
    { title: "My Gallery", value: "36", icon: <FaPaintBrush /> },
    { title: "Favorites", value: totalFavorites, icon: <FaHeart /> },
    { title: "Followers", value: "1.2K", icon: <FaUsers /> },
  ];

  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {stat.value}
            </h3>
          </div>
          <div className="text-2xl text-indigo-600">{stat.icon}</div>
        </div>
      ))}
    </>
  );
};

export default StatCard;
