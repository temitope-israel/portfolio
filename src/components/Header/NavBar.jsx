import React from "react";
import { TfiBag } from "react-icons/tfi";

const NavBar = () => {
  return (
    <nav className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-end lg:gap-10 scroll-mt-[10884px]" id="home">
      <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10 text-sm text-white text-center">
        <li>
          <a
            href="#home"
            className="block p-2 rounded hover:bg-[#00f7d2] hover:text-black transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block p-2 rounded hover:bg-[#00f7d2] hover:text-black transition-colors duration-300"
          >
            Featured Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block p-2 rounded hover:bg-[#00f7d2] hover:text-black transition-colors duration-300"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block p-2 rounded hover:bg-[#00f7d2] hover:text-black transition-colors duration-300"
          >
            Contact Me
          </a>
        </li>
      </ul>

      <a
        href="/resume.pdf" // You can update this to your actual CV link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#00f7d2] text-black font-medium rounded px-4 py-2 transition hover:opacity-90"
      >
        View Resume
        <TfiBag className="ml-2 w-5 h-5" />
      </a>
    </nav>
  );
};

export default NavBar;
