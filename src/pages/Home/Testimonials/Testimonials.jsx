import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div
      data-aos="zoom-in"
      className="py-16 bg-gray-100 dark:bg-black"
    >
      <SectionTitle
        title="What Our Artists Say"
        subTitle="Hear from our creative community about their experiences"
      />
      <div className="container mx-auto max-w-7xl px-4 mt-10">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
