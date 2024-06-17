"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./Common/SectionTitle";

const technologies = [
  { name: "React", logo: "" },
  { name: "Next.js", logo: "" },
  { name: "Tailwind CSS", logo: "" },
  { name: "TypeScript", logo: "" },
  { name: "Wordpress", logo: "" },
  { name: "Javascript", logo: "" },
];

const TechSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="mt-4 flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></div>
    ),
  };

  return (
    <div>
      <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Tools & Technologies"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque. Dolorem atque, nulla officia ullam explicabo ducimus."
            center
          />
          <Slider {...settings}>
            {technologies.map((tech) => (
              <div key={tech.name} className="p-4">
                <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="mb-4 h-20"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {tech.name}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TechSlider;
