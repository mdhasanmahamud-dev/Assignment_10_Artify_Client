import React from "react";
import {
  FaPaintBrush,
  FaImages,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here is a quick summary of your activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Artworks"
          value="128"
          icon={<FaImages />}
        />
        <StatCard
          title="My Gallery"
          value="36"
          icon={<FaPaintBrush />}
        />
        <StatCard
          title="Favorites"
          value="54"
          icon={<FaHeart />}
        />
        <StatCard
          title="Followers"
          value="1.2K"
          icon={<FaUsers />}
        />
      </div>

      {/* Recent Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Artworks */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
            Recent Artworks
          </h2>

          <ul className="space-y-3">
            {["Sunset Canvas", "Abstract Flow", "Night City", "Minimal Lines"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Profile Summary */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
            Profile Summary
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h3 className="font-medium">Artify Creator</h3>
              <p className="text-xs text-gray-500">artist@artify.com</p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="font-medium">Joined:</span> Jan 2024
            </p>
            <p>
              <span className="font-medium">Role:</span> Artist
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600">Active</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {value}
        </h3>
      </div>
      <div className="text-2xl text-indigo-600">
        {icon}
      </div>
    </div>
  );
};

export default Dashboard;
