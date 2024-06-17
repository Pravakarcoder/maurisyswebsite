interface CardProps {
  title: string;
  description: string;
}
import React from "react";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="transform rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
