import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialsCard = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Das",
      avatar: "https://i.ibb.co/0y8p21y0/download-2.jpg",
      feedback:
        "Artify helped me showcase my artworks to a global audience. Amazing platform!",
      rating: 5,
    },
    {
      id: 2,
      name: "Maya Rahman",
      avatar:
        "https://i.ibb.co/KxWsJK3T/royal-anwar-g-Do-NB-BCkd-E-unsplash.jpg",
      feedback:
        "I love the creative community here! Collaborations are so easy and fun.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sadia Noor",
      avatar: "https://i.ibb.co/bgSTFy4q/images.jpg",
      feedback:
        "The platform is very user-friendly, and I received amazing feedback on my works!",
      rating: 5,
    },
    {
      id: 1,
      name: "Aarav Das",
      avatar: "https://i.ibb.co/0y8p21y0/download-2.jpg",
      feedback:
        "Artify helped me showcase my artworks to a global audience. Amazing platform!",
      rating: 5,
    },
  ];

  return (
    <div className="my-20 container mx-auto max-w-7xl px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {t.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t.feedback}
              </p>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < t.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;
