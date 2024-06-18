import React from "react";
import { FaClock, FaCogs, FaBolt } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    icon: <FaCogs className="h-8 w-8 text-[#04c8d6]" />,
    title: "Flexibility",
    description:
      "Adjusting software easily to meet evolving needs efficiently.",
  },
  {
    icon: <FaClock className="h-8 w-8 text-[#04c8d6]" />,
    title: "24hrs Customer Service",
    description: "Providing assistance and support around the clock.",
  },
  {
    icon: <FaBolt className="h-8 w-8 text-[#04c8d6]" />,
    title: "Fast & Reliable",
    description: "Swift, consistent service ensuring reliability and rapidity.",
  },
];
const OfferSection = () => {
  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="We Gave The Best Offer"
          paragraph="We provide top-notch offers, ensuring unparalleled value and satisfaction for our customers."
          center
        />
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-white p-8 text-center shadow-md dark:bg-gray-800"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
