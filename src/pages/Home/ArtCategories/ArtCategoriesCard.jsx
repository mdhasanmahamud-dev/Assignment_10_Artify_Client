import { Fade } from "react-awesome-reveal";

const ArtCategoriesCard = () => {
  const categories = [
    {
      name: "Digital Art",
      image:
        "https://i.ibb.co.com/zH2XrSZn/simon-lee-z-A66-MV4-Ey-Xc-unsplash.jpg",
    },
    {
      name: "Oil Painting",
      image:
        "https://i.ibb.co.com/b5xqx4TW/jamie-street-q-WYv-QMIJyf-E-unsplash.jpg",
    },
    {
      name: "Abstract",
      image:
        "https://i.ibb.co.com/svZrwXy6/polina-kondrashova-fhr-WAh2-HMn-M-unsplash.jpg",
    },
    {
      name: "Photography",
      image: "https://i.ibb.co.com/twnMt61f/milad-fakurian-PGd-W-b-HDbp-I-unsplash.jpg",
    },
    {
      name: "Watercolor",
      image:
        "https://i.ibb.co.com/R4gm1jZg/maxim-berg-3-E2xgrl-NXq4-unsplash.jpg",
    },
    {
      name: "Street Art",
      image:
        "https://i.ibb.co.com/Jwz08QWT/alexander-park-i6-XX1p7ai4-unsplash.jpg",
    },
    {
      name: "Sculpture",
      image:
        "https://i.ibb.co.com/nMr7v7p9/tim-walter-Ul-Vv-JUu-Mrx-Q-unsplash.jpg",
    },
    {
      name: "Illustration",
      image: "https://i.ibb.co.com/xK0W40Yc/anya-smith-CL-Us-MAODJk-unsplash.jpg",
    },
  ];

  return (
    <section  className="my-20 container mx-auto max-w-7xl px-4">
      <Fade cascade damping={0.1} direction="up" triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white bg-black/30 backdrop-blur-md px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </h3>
              </div>

              {/* Decorative Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-indigo-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default ArtCategoriesCard;
