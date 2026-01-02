import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  const bannerSlides = [
    {
      id: 1,
      title: "Discover the World of Digital Creativity",
      subtitle:
        "Explore a curated collection of breathtaking digital artworks crafted by talented artists from around the world. Experience creativity beyond imagination.",
      image:
        "https://i.ibb.co.com/ym9wn1hR/royce-fonseca-2-ZHI2m-SGld-Y-unsplash.jpg",
    },
    {
      id: 2,
      title: "Where Art Meets Innovation",
      subtitle:
        "Dive into a space where modern design, imagination, and technology come together to create visually stunning masterpieces.",
      image:
        "https://i.ibb.co.com/JWN26Q0W/jovan-vasiljevic-e4kru-OZB9cw-unsplash.jpg",
    },
    {
      id: 3,
      title: "Empowering Creative Minds",
      subtitle:
        "Showcase your artistic vision, connect with creators, and be inspired by unique visual stories from around the globe.",
      image:
        "https://i.ibb.co.com/CsHdtVgb/note-thanun-GI10-Zi-PO-3w-unsplash.jpg",
    },
    {
      id: 4,
      title: "A Platform Built for Artists",
      subtitle:
        "From digital illustrations to modern art concepts, explore a platform designed to celebrate creativity without limits.",
      image:
        "https://i.ibb.co.com/S8hQvDF/sigmund-OV44gx-H71-DU-unsplash.jpg",
    },
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {bannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-screen md:h-[70vh]">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                {slide.title}
              </h1>

              <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
