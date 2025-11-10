import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6 py-5">
      {/* Heading: light text for dark background */}
      <h1 className="text-3xl font-bold text-white">{title}</h1>

      {/* Subheading: slightly muted light color */}
      {subtitle && <p className="text-gray-300 mt-2">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
