import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Innovating software solutions with vision and expertise{" "}
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  We provide solutions to our clients, understanding what they
                  really require and our priority is in knowing the critical
                  components to making any project successful.{" "}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/service"
                    className="group rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    <span className="flex items-center gap-2">
                      Get Started{" "}
                      <MdArrowForwardIos
                        size={20}
                        className="duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    <span className="flex items-center gap-2">
                      Find us{" "}
                      <IoLocationOutline size={20} className="animate-bounce" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1]  lg:opacity-100">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="h-64 w-64 rounded-full bg-blue-500 opacity-30"></div>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 transform">
            <div className="h-48 w-48 rounded-full bg-teal-500 opacity-30"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
