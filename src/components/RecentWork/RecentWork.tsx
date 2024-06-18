"use client";

import Image from "next/image";
import React, { useState } from "react";
import trysewa from "../../../public/images/recentwork/trysewa.webp";
import medcare from "../../../public/images/recentwork/medcare.webp";
import blog from "../../../public/images/recentwork/blog.webp";

const projects = [
  {
    name: "Trysewa",
    type: "Website",
    image: trysewa,
  },
  {
    name: "Medcare",
    type: "Website",
    image: medcare,
  },
  {
    name: "TechbarNepal",
    type: "Website",
    image: blog,
  },
  {
    name: "S.K. Pashmina",
    type: "Graphics Design",
    image: trysewa,
  },
  {
    name: "S.K. Pashmina",
    type: "Graphics Design",
    image: trysewa,
  },
  {
    name: "Nepal One Adventure",
    type: "Mobile Application",
    image: trysewa,
  },
  {
    name: "Nepal One Adventure",
    type: "Mobile Application",
    image: trysewa,
  },
  {
    name: "Nepal One Adventure",
    type: "Mobile Application",
    image: trysewa,
  },
];
const RecentWork = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-center md:gap-2 lg:gap-0">
        <button
          onClick={() => setFilter("All")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "All"
              ? "bg-primary text-white"
              : "bg-slate-300  text-dark hover:bg-primary hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          All (50)
        </button>
        <button
          onClick={() => setFilter("Website")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Website"
              ? "bg-primary text-white"
              : "bg-slate-300  text-dark hover:bg-primary hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Website (20)
        </button>
        <button
          onClick={() => setFilter("Mobile Application")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Mobile Application"
              ? "bg-primary text-white"
              : "bg-slate-300  text-dark hover:bg-primary hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Mobile Application (10)
        </button>
        <button
          onClick={() => setFilter("Logo Design")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Logo Design"
              ? "bg-primary text-white"
              : "bg-slate-300  text-dark hover:bg-primary hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Logo Design (10)
        </button>
        <button
          onClick={() => setFilter("Graphics Design")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Graphics Design"
              ? "bg-primary text-white"
              : "bg-slate-300  text-dark hover:bg-primary hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Graphics Design (10)
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className=" transform rounded-lg bg-slate-300 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark"
          >
            <div className="relative mb-4 h-64 w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg "
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-dark dark:border-white dark:border-opacity-10 dark:text-white">
                {project.name}
              </h3>
              <p className="text-base text-dark dark:border-white dark:border-opacity-10 dark:text-white">
                {project.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentWork;
