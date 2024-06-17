import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not found | maurisys",
  description: "This is Error Page maurisys",
  // other metadata
};

const NotFound = () => {
  return (
    <>
      <section className="z-10 flex h-screen items-center justify-center pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  404 Not Found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {` Oops! We can't find the page you're looking for.`}
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
