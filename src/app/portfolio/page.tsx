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
        pageName="Portfolio "
        description="Check out our portfolio showcasing our finest projects, demonstrating expertise and commitment, offering a glimpse into our software prowess."
      />
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
          <div className="container mx-auto">
            <SectionTitle
              title="Our Recent Works"
              paragraph="Browse through our recent projects, solid proof of our successful track record. We've delivered extensive solutions across diverse industries."
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
