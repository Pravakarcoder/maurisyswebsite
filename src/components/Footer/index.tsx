"use client";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import maurisysLogo from "../../../public/images/logo/maurisysLogo.webp";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src={maurisysLogo}
                    alt="Maurisy Logo"
                    className="w-full dark:hidden"
                    width={80}
                    height={30}
                  />
                  <Image
                    src={maurisysLogo}
                    alt="Maurisy Logo"
                    className="hidden w-full rounded-md bg-white p-1 text-white dark:block"
                    width={80}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {`Web Design, Web Hosting, Software Development, Mobile App Development, Graphic Design company `}
                </p>
                <div className="flex items-center">
                  <Link
                    href="/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <GrFacebookOption size={20} />
                  </Link>
                  <Link
                    href="/"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <FaXTwitter size={20} />
                  </Link>
                  <Link
                    href="/"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <FaYoutube size={22} />
                  </Link>
                  <Link
                    href="/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <IoLogoLinkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Links
                </h2>
                <ul>
                  {[
                    { href: "/blog", text: "Blog" },
                    { href: "/portfolio", text: "Portfolio" },
                    { href: "/service", text: "Service" },
                    { href: "/about", text: "About" },
                    { href: "/contact", text: "Contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  {[
                    { href: "/", text: "Policy" },
                    { href: "/", text: "Privacy Policy" },
                    { href: "/", text: "Refund Policy" },
                    { href: "/", text: "Cookies" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Services
                </h2>
                <ul>
                  {[
                    { href: "/service", text: "Web Development" },
                    { href: "/service", text: "Digital Marketing" },
                    { href: "/service", text: "Mobile App Development" },
                    { href: "/service", text: "CMS Application" },
                    { href: "/service", text: "E-Commerce Application" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              ©2024&nbsp;
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Maurisy software
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
