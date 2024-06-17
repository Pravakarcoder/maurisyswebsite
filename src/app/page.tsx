import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AccordionTest from "@/components/AccordionTest";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/Choose/WhyChooseUs";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TechSlider from "@/components/TechSlider";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Maurisys - Web Design, Web Hosting, Domain Registration, Software Development, Mobile App Development, Graphic Design company in nepal",
  description:
    "Maurisys is the best website for Web Design, Web Hosting, Domain Registration, Software Development, Mobile App Development, Graphic Design company in nepal",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <WhyChooseUs />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
      <Brands />
      <AccordionTest />
      <TechSlider />
    </>
  );
}
