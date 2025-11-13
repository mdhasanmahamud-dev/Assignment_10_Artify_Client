import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6 py-5">
      <h1 className="text-3xl font-bold text-black dark:text-white">{title}</h1>
      {subtitle && <p className="text-gray-800 dark:text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
