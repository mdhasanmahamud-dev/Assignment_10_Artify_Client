import { Fade } from "react-awesome-reveal";

const ArtCategoriesCard = () => {
  const categories = [
  {
    name: "Digital Art",
    image: "https://i.ibb.co/60J3cP4P/ryan-ancill-eeu-Pt-EVuof-Q-unsplash.jpg",
  },
  {
    name: "Oil Painting",
    image: "https://i.ibb.co/KxXwNMyM/krists-luhaers-Yh-C216t-AYAg-unsplash.jpg",
  },
  {
    name: "Abstract",
    image: "https://i.ibb.co/DPL2Kyz8/jamie-street-q-WYv-QMIJyf-E-unsplash.jpg",
  },
  {
    name: "Photography",
    image: "https://i.ibb.co/zWsQxGx0/rene-bohmer-Ye-UVDKZWSZ4-unsplash.jpg",
  },
  {
    name: "Watercolor",
    image: "https://i.ibb.co.com/Hf3gWKKW/saif71-com-a-Xjgxr-BEQ04-unsplash.jpg",
  },
  {
    name: "Street Art",
    image: "https://i.ibb.co.com/VYZrzZcn/lisette-harzing-v-Z4-APr-MDXa4-unsplash.jpg",
  },
  {
    name: "Sculpture",
    image: "https://i.ibb.co.com/d064gz57/abhinav-sharma-ikr5f8z-cwo-unsplash.jpg",
  },
  {
    name: "Illustration",
    image: "https://i.ibb.co.com/DPyGng7Z/nik-v54w-V0e2o-FQ-unsplash.jpg",
  },
];


  return (
    <section className="my-20 container mx-auto max-w-7xl px-4">
      <Fade cascade damping={0.1} direction="up" triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-900 border border-zinc-800 cursor-pointer"
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
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-indigo-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default ArtCategoriesCard;
