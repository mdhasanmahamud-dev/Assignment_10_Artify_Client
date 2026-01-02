
import { FaHeart, FaImage } from "react-icons/fa";

const TopArtistsCard = () => {
  const topArtists = [
    {
      id: 1,
      name: "Aarav Das",
      image: "https://i.ibb.co.com/0y8p21y0/download-2.jpg",
      banner:
        "https://i.ibb.co.com/840BQK3x/chuck-gould-Lg1eti-SEc-DY-unsplash.jpg",
      bio: "Digital Illustrator & Concept Artist",
      artworks: 18,
      likes: 254,
    },
    {
      id: 2,
      name: "Maya Rahman",
      image: "https://i.ibb.co.com/KxWsJK3T/royal-anwar-g-Do-NB-BCkd-E-unsplash.jpg",
      banner:
        "https://i.ibb.co.com/fV3PC6bZ/lok-gwan-B0-F4-Qr8ird8-unsplash.jpg",
      bio: "Modern Painter & Visual Storyteller",
      artworks: 22,
      likes: 312,
    },
    {
      id: 3,
      name: "Rayan Ahmed",
      image: "https://i.ibb.co.com/JWvgMvRc/download-3.jpg",
      banner:
        "http://i.ibb.co.com/xK0W40Yc/anya-smith-CL-Us-MAODJk-unsplash.jpg",
      bio: "3D Artist & Sculpt Designer",
      artworks: 15,
      likes: 198,
    },
    {
      id: 4,
      name: "Sadia Noor",
      image: "https://i.ibb.co.com/bgSTFy4q/images.jpg",
      banner:
        "https://i.ibb.co.com/TDn29PcF/adel-z-r-Ob-W0-HFa-KNw-unsplash.jpg",
      bio: "Watercolor Artist & Creative Thinker",
      artworks: 20,
      likes: 276,
    },
  ];

  return (
    <div  className="my-20 container mx-auto max-w-7xl px-4">
      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {topArtists.map((artist, index) => (
          <div
            key={artist.id}
            className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 group border border-zinc-800"
          >
            {/* Banner Image */}
            <div className="relative h-36">
              <img
                src={artist.banner}
                alt="banner"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900"></div>
              <div className="absolute top-3 left-3 bg-teal-500 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                #{index + 1}
              </div>
            </div>

            {/* Profile Image */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-zinc-900 shadow-lg"
              />
            </div>

            {/* Artist Info */}
            <div className="text-center mt-14 px-4 pb-6">
              <h3 className="text-lg font-semibold text-white">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{artist.bio}</p>

              <div className="flex justify-center items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaImage className="text-blue-400" />
                  <span className="text-gray-200">{artist.artworks} Works</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-pink-500" />
                  <span className="text-gray-200">{artist.likes} Likes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtistsCard;
