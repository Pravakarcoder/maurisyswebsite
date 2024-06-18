import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import trysewa from "../../../public/images/about/trysewa.webp";
import medcare from "../../../public/images/about/medcare.webp";

const AboutSectionTwo = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      {text}
    </p>
  );
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:px-20 lg:w-1/2">
              <div className="relative max-w-full lg:max-w-none">
                <Image
                  src={trysewa}
                  alt="about-image"
                  width={500}
                  height={1000}
                  className="h-2/6 max-w-full rounded-md"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Build website for Blog"
                paragraph="We specialize in crafting dynamic blog websites using a blend of HTML, CSS, and JavaScript, ensuring a rapid, SEO-optimized user experience on the frontend, coupled with a resilient and adaptable backend infrastructure."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="FrontEnd" />
                    <List text="SEO-optimized" />
                    <List text="Backend support" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Secure" />
                    <List text="Backend support" />
                    <List text="User friendly" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
