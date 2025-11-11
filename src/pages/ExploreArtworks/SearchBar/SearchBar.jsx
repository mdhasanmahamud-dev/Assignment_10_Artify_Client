import { useState } from "react";
import useArtWorkHook from "../../../hooks/useArtWorkHook";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchPublicArtworks } = useArtWorkHook();

  const handleSearch = async () => {
    try {
      await fetchPublicArtworks(searchTerm);
    } catch (error) {
      console.log("Error searching artworks:", error);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    fetchPublicArtworks();
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title category or artist name........."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          flex-1 p-2 border border-teal-300 rounded text-white
          focus:outline-none focus:ring-2 focus:ring-teal-400
          placeholder:text-gray-300 placeholder:text-sm placeholder:italic
        "
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition cursor-pointer"
      >
        Search
      </button>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
