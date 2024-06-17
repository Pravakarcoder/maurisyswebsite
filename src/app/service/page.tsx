import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import webdev from "../../../public/images/serives/webdev.avif";
import SectionTitle from "@/components/Common/SectionTitle";
import OfferSection from "@/components/Offer/OfferSection";
export const metadata: Metadata = {
  title: "Service - Maurisys Web Design, Web Hosting,",
  description:
    "Maurisys Web Design, Web Hosting, Domain Registration, Software Development, Mobile App Development, Graphic Design company in nepal",
};

const services = [
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
  {
    title: "Website Development",
    description:
      "Creating, designing, and maintaining websites for optimal user experience and functionality.",
    image: webdev,
  },
];
const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="bg-gray-100 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Services"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque. Dolorem atque, nulla officia ullam explicabo ducimus."
            center
          />
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-center text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OfferSection />
      <Contact />
    </>
  );
};

export default ServicePage;
