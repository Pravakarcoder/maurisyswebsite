import React from "react";

const WorkStep = ({ stepNumber, title, description }) => {
  return (
    <div className="mb-6 transform rounded-lg p-6 text-black shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-one dark:border-white dark:border-opacity-10 dark:bg-dark dark:text-white dark:shadow-three dark:hover:shadow-gray-dark">
      <h2 className="mb-2 text-4xl font-bold">{stepNumber}</h2>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default WorkStep;
