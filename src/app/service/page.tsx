import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import webdev from "../../../public/images/serives/webdev.avif";
import appdev from "../../../public/images/serives/appdev.avif";
import hosting from "../../../public/images/serives/hosting.avif";
import digitalmarketing from "../../../public/images/serives/digitalmarketing.avif";
import seo from "../../../public/images/serives/seo.avif";
import wordpress from "../../../public/images/serives/wordpress.avif";
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
    title: "App Development",
    description:
      "Innovative app development services crafting user-friendly solutions with cutting-edge technology.",
    image: appdev,
  },
  {
    title: "Hosting",
    description:
      "Reliable hosting solutions for seamless website performance and uninterrupted online presence, ensuring optimal user experience.",
    image: hosting,
  },
  {
    title: "Wordpress",
    description:
      "Versatile platform for building dynamic websites with customizable features, plugins, and themes for diverse needs and preferences.",
    image: wordpress,
  },
  {
    title: "SEO",
    description:
      "Enhance online visibility and drive organic traffic through strategic optimization techniques, boosting website ranking and audience engagement.",
    image: seo,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic online promotion to expand brand reach, engage audiences, and drive conversions through various channels and tactics.",
    image: digitalmarketing,
  },
];
const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service"
        description="Discover our range of expert services designed to optimize your digital presence and propel your business towards success."
      />
      <section className="bg-gray-100 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Services"
            paragraph="Comprehensive software solutions, leveraging cutting-edge technology to streamline processes and drive innovation for your business."
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
