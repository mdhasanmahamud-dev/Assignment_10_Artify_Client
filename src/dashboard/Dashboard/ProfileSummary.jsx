// components/ProfileSummary.jsx
import React from "react";
import useUserHook from "../../hooks/useUserHook";

const ProfileSummary = () => {
  const { user } = useUserHook();
  // console.log(user);

  const profile = {
    initial: user?.displayName ? user.displayName[0].toUpperCase() : "A",
    name: user?.displayName || "Artify Creator",
    email: user?.email || "artist@artify.com",
    photoURL: user?.photoURL || null,
    joined: user?.createdAt
      ? new Date(parseInt(user.createdAt)).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      : "Jan 2024",
    role: user?.role || "Artist",
    status: user?.status || "Active",
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
      <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Profile Summary
      </h2>

      <div className="flex items-center gap-4">
        {profile.photoURL ? (
          <img
            src={profile.photoURL}
            alt={profile.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
            {profile.initial}
          </div>
        )}

        <div>
          <h3 className="font-medium">{profile.name}</h3>
          <p className="text-xs text-gray-500">{profile.email}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <p>
          <span className="font-medium">Joined:</span> {profile.joined}
        </p>
        <p>
          <span className="font-medium">Role:</span> {profile.role}
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span
            className={
              profile.status === "Active" ? "text-green-600" : "text-red-600"
            }
          >
            {profile.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileSummary;
