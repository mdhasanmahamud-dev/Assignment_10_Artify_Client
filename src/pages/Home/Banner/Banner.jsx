import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  const bannerSlides = [
    {
      id: 1,
      title: "Neon Dreams",
      description: "Explore the vibrant world of neon-inspired artworks.",
      image:
        "https://i.ibb.co/Df0PkF5j/vitaly-gariev-4-DPz2v-I4-Ge-M-unsplash.jpg",
    },
    {
      id: 2,
      title: "Abstract Colors",
      description:
        "Dive into the abstract universe filled with colors and imagination.",
      image:
        "https://i.ibb.co.com/mCs8d3kT/neon-wang-jb-WNYBp-Do-Yk-unsplash.jpg",
    },
    {
      id: 3,
      title: "Modern Art Highlights",
      description: "Discover the beauty of modern artistic expressions.",
      image:
        "https://i.ibb.co.com/prJbLHfh/neon-wang-60-NH1-NVEe-C4-unsplash.jpg",
    },
    {
      id: 4,
      title: "Digital Creativity",
      description:
        "Celebrate the creativity of digital artists around the world.",
      image:
        "https://i.ibb.co.com/zTLmB695/neon-wang-Pm-F9-Ec-Hv-FB0-unsplash.jpg",
    },
    {
      id: 5,
      title: "Masterpieces in Focus",
      description:
        "Showcasing the most captivating masterpieces from talented artists.",
      image:
        "https://i.ibb.co.com/p6SLzcd9/lin-renais-NOs-Ck-C7jzl-M-unsplash.jpg",
    },
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {bannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-screen object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-5 bg-black bg-opacity-50 p-4 rounded">
              <h3 className="text-white text-lg md:text-2xl font-bold">
                {slide.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
