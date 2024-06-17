import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import medcare from "../../../public/images/about/medcare.webp";

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <SectionTitle
          title="Our best projects"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus nesciunt quos voluptatem."
          center
        />
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Build website for hospital"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum beatae officiis ab laudantium itaque numquam suscipit recusandae fugit."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Backend support" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative max-w-full lg:max-w-none">
                <Image
                  src={medcare}
                  alt="about-image"
                  width={1000}
                  height={1000}
                  className="h-auto max-w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
