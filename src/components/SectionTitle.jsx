import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-12">
      {/* Subtitle */}
      {subTitle && (
        <p className="text-indigo-400 text-sm md:text-base font-medium capitalize tracking-wider mb-2">
          {subTitle}
        </p>
      )}
      {/* Title */}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">
          {title}
        </h2>
      )}
      {/* Border */}
      <div className="w-20 md:w-30 h-1 bg-indigo-500 mx-auto mt-4 rounded"></div>
    </div>
  );
};

export default SectionTitle;
