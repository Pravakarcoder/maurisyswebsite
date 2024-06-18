"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="theme toggler"
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
    >
      {theme === "dark" ? <IoSunnySharp size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggler;
