"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./Common/SectionTitle";

import react from "../../public/images/tech/react.webp";
import python from "../../public/images/tech/python.webp";
import vue from "../../public/images/tech/vue.webp";
import nodejs from "../../public/images/tech/nodejs.webp";
import bootstrap from "../../public/images/tech/bootstrap.webp";
const technologies = [
  { name: "React", logo: react },
  { name: "Python", logo: python },
  { name: "Vue js", logo: vue },
  { name: "Nodejs", logo: nodejs },
  { name: "Bootstrap", logo: bootstrap },
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
      <section className="relative z-10  bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Tools & Technologies"
            paragraph="Explore our diverse range of tools and technologies, empowering businesses with cutting-edge solutions for enhanced efficiency and performance."
            center
          />
          <div className="mx-10">
            <Slider {...settings}>
              {technologies.map((tech) => (
                <div key={tech.name} className=" p-4">
                  <div className="  flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="mb-4 h-24"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {tech.name}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSlider;
