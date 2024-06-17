// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import recentwork from "../../../public/images/recentwork/recentwork.avif";

// const projects = [
//   {
//     name: "Nepal One Adventure",
//     type: "Website",
//     image: recentwork,
//   },
//   {
//     name: "Ghar Sansar Nepal",
//     type: "Website",
//     image: recentwork,
//   },
//   {
//     name: "S.K. Pashmina",
//     type: "Website",
//     image: recentwork,
//   },
//   {
//     name: "Nepal One Adventure",
//     type: "Website",
//     image: recentwork,
//   },
//   {
//     name: "Ghar Sansar Nepal",
//     type: "Website",
//     image: recentwork,
//   },
//   {
//     name: "S.K. Pashmina",
//     type: "Website",
//     image: recentwork,
//   },
// ];
// const RecentWork = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((project) => project.type === filter);

//   return (
//     <>
//       <div className="mb-6 flex flex-wrap justify-center md:gap-2 lg:gap-0">
//         <button
//           onClick={() => setFilter("All")}
//           className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
//             filter === "All"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white"
//           }`}
//         >
//           All (50)
//         </button>
//         <button
//           onClick={() => setFilter("Website")}
//           className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
//             filter === "Website"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white"
//           }`}
//         >
//           Website (20)
//         </button>
//         <button
//           onClick={() => setFilter("Mobile Application")}
//           className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
//             filter === "Mobile Application"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white"
//           }`}
//         >
//           Mobile Application (10)
//         </button>
//         <button
//           onClick={() => setFilter("Logo Design")}
//           className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
//             filter === "Logo Design"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white"
//           }`}
//         >
//           Logo Design (10)
//         </button>
//         <button
//           onClick={() => setFilter("Graphics Design")}
//           className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
//             filter === "Graphics Design"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white"
//           }`}
//         >
//           Graphics Design (10)
//         </button>
//       </div>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {filteredProjects.map((project, index) => (
//           <div
//             key={index}
//             className="transform rounded-lg bg-gray-800 p-6 transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <Image
//               src={project.image}
//               alt={project.name}
//               className="mx-auto mb-4"
//               width={200}
//               height={200}
//             />
//             <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
//             <p className="text-lg">{project.type}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default RecentWork;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import trysewa from "../../../public/images/recentwork/trysewa.webp";

const projects = [
  {
    name: "Nepal One Adventure",
    type: "Website",
    image: trysewa,
  },
  {
    name: "Ghar Sansar Nepal",
    type: "Website",
    image: trysewa,
  },
  {
    name: "S.K. Pashmina",
    type: "Website",
    image: trysewa,
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
  {
    name: "Ghar Sansar Nepal",
    type: "Website",
    image: trysewa,
  },
  {
    name: "S.K. Pashmina",
    type: "Logo Design",
    image: trysewa,
  },
  {
    name: "S.K. Pashmina",
    type: "Logo Design",
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
              ? "bg-indigo-600 text-white"
              : "bg-slate-300  text-dark hover:bg-indigo-600 hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          All (50)
        </button>
        <button
          onClick={() => setFilter("Website")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Website"
              ? "bg-indigo-600 text-white"
              : "bg-slate-300  text-dark hover:bg-indigo-600 hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Website (20)
        </button>
        <button
          onClick={() => setFilter("Mobile Application")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Mobile Application"
              ? "bg-indigo-600 text-white"
              : "bg-slate-300  text-dark hover:bg-indigo-600 hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Mobile Application (10)
        </button>
        <button
          onClick={() => setFilter("Logo Design")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Logo Design"
              ? "bg-indigo-600 text-white"
              : "bg-slate-300  text-dark hover:bg-indigo-600 hover:text-white dark:bg-dark dark:text-white"
          }`}
        >
          Logo Design (10)
        </button>
        <button
          onClick={() => setFilter("Graphics Design")}
          className={`mx-2 my-2 rounded-full px-4 py-2 focus:outline-none md:my-0 ${
            filter === "Graphics Design"
              ? "bg-indigo-600 text-white"
              : "bg-slate-300  text-dark hover:bg-indigo-600 hover:text-white dark:bg-dark dark:text-white"
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
