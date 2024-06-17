import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import RecentWork from "@/components/RecentWork/RecentWork";
import TechSlider from "@/components/TechSlider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio - Maurisys Web Design, Web Hosting",
  description:
    "Maurisys Web Design, Web Hosting, Domain Registration, Software Development, Mobile App Development, Graphic Design company in nepal",
};

const PortfolioPage = () => {
  return (
    <>
      {" "}
      <Breadcrumb
        pageName="Portfolio Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
          <div className="container mx-auto">
            <SectionTitle
              title="Our Recent Works"
              paragraph="Here are some of our recent works that act as evidence of our successful status. We have done lots of work for various business institutions."
              center
            />
            <RecentWork />
          </div>
        </div>
      </div>
      <TechSlider />
    </>
  );
};

export default PortfolioPage;
