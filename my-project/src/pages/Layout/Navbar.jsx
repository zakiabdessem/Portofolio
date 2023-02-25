import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "./Layout";
export default function Navbar() {
    const [isDark, toggleTheme] = useDarkMode();
    return (
    <nav className="position-fixed top-0 left-0 right-0 z-999 mb-3 p-0 flex flex-col">
      <div className="flex flex-auto flex-row items-center w-full h-12">
        <a
          href="#"
          className={`hover:text-gray-300 __text text-xl encode-font flex-1 mt-4 ml-3`}
        >
          <span className="text-gray-400">&lt; </span>codedByZak
          <span className="text-gray-400"> /&gt;</span>
        </a>
        <ul className="inline-flex justify-center">
          <li className="ml-auto mr-10 mt-4 position-relative">
            <BsMoonStarsFill
              onClick={toggleTheme}
              className="__moon-star __text"
            />
          </li>
          <li className="__resume align-middle ml-auto mr-4 px-4 py-2 rounded-lg h-5">
            <a className="text-white" href="#">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <hr className="mt-3 mb-3"></hr>
    </nav>
  );
}
