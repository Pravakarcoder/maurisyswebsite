import React from "react";
import WorkStep from "@/app/lib/WorkStep";
import SectionTitle from "./Common/SectionTitle";

const steps = [
  {
    stepNumber: "01",
    title: "Discover",
    description:
      "Discover, Discovery or scoping phase is a process of collecting and analyzing information about the project, its intended market, audience. It allows getting a well-rounded and in-depth understanding of the goals, scope, and limitations.",
  },
  {
    stepNumber: "02",
    title: "Define",
    description:
      "The project's defined process consists of defined processes that form an integrated, coherent lifecycle for the project. The project's defined process should satisfy the project's contractual requirements, operational needs, opportunities and constraints.",
  },
  {
    stepNumber: "03",
    title: "Design",
    description:
      "Project design is an early phase of the project where a project's key features, structure, criteria for success and major deliverables are all planned out. The point is to develop one or more designs which can be used to achieve the desired project goals.",
  },
  {
    stepNumber: "04",
    title: "Develop",
    description:
      "The development phase is about writing code and converting design documentation into the actual project within the development process. This stage is generally the longest as it’s the backbone of the whole process.  ",
  },
  {
    stepNumber: "05",
    title: "Deploy",
    description:
      "This is a stage when the actual installation of the crafted project takes place. It’s done step-by-step according to the implementation plan. The newly built and tested project is moved to production including data and.  ",
  },
  {
    stepNumber: "06",
    title: "Deliver",
    description:
      "The final stage of software development lifecycle includes maintenance and regular updates. The phase is treated with the utmost attention since during the stage the product is polished, upgraded, enhanced.",
  },
];

const OurWayOfDoingWork = () => {
  return (
    <div className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="flex w-full flex-col items-center justify-center  p-4 ">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Way of Doing Work"
            paragraph="Our approach to work: Focused, collaborative, and innovative, driven by a commitment to excellence and delivering outstanding results for our clients."
            center
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <WorkStep
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWayOfDoingWork;
