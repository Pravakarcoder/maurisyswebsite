"use client";
import { MdUnsubscribe } from "react-icons/md";

const NewsLatterBox = () => {
  return (
    <div className="relative z-10 p-8 bg-white rounded-sm shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Get the latest updates directly to your inbox
      </h3>
      <p className="text-base leading-relaxed border-b border-opacity-25 mb-11 border-body-color pb-11 text-body-color dark:border-white dark:border-opacity-25">
        Stay ahead with the latest updates delivered directly to your inbox.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="flex items-center justify-center w-full py-4 mb-5 text-base font-medium text-white duration-300 rounded-md cursor-pointer bg-primary px-9 shadow-submit hover:bg-primary/90 dark:shadow-submit-dark"
        />{" "}
        <p className="text-base leading-relaxed text-center text-body-color dark:text-body-color-dark">
          We respect your privacy and will only send you important news and
          announcements.
        </p>
      </div>
    </div>
  );
};

export default NewsLatterBox;
