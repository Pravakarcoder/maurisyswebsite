import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Card from "@/components/Choose/Card";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import team1 from "../../../public/images/team/team1.avif";
import team2 from "../../../public/images/team/team2.avif";
import team3 from "../../../public/images/team/team3.avif";

import { Metadata } from "next";
import Image from "next/image";
import OurWayOfDoingWork from "@/components/OurWayOfDoingWork";

export const metadata: Metadata = {
  title: "About - Maurisys Web Design, Web Hosting,",
  description:
    "Maurisys Web Design, Web Hosting, Domain Registration, Software Development, Mobile App Development, Graphic Design company in nepal",
  // other metadata
};
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    description:
      "John is the visionary behind our company, with over 20 years of experience in the industry.",
    image: team1,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    description:
      "Jane leads our technology team, ensuring we stay ahead of the curve.",
    image: team2,
  },
  {
    name: "Sam Wilson",
    role: "COO",
    description:
      "Sam oversees our operations, making sure everything runs smoothly.",
    image: team3,
  },
  // Add more team members as needed
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="bg-gray-100 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {" "}
            What We Stand For
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Card
              title="Mission"
              description="Leading, trusted tech company, turning digital ideas into reality successfully."
            />
            <Card
              title="Vision"
              description="Digitalization driving profit, empowering innovation, enhancing organizational success."
            />
            <Card
              title="People"
              description="Create and expand niche markets with strong product services."
            />
          </div>
        </div>
      </section>

      <AboutSectionOne />
      <AboutSectionTwo />
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
          <div className="container mx-auto">
            <SectionTitle
              title="Meet Our Team"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque. Dolorem atque, nulla officia ullam explicabo ducimus."
              center
            />
            <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative transform overflow-hidden rounded-lg  p-4 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark"
                >
                  <Image
                    src={member.image}
                    alt="member"
                    className="h-48 w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="mt-2">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="mb-1 text-lg">{member.role}</p>
                  </div>
                  <div className="absolute inset-0  transition-opacity duration-500 group-hover:opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="border-b border-body-color border-opacity-10 text-white dark:border-white dark:border-opacity-10 dark:text-white">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OurWayOfDoingWork />
    </>
  );
};

export default AboutPage;
