import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center text-white px-4 md:px-8 lg:px-16 mt-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl mb-4 font-bold">
        Hi, I am <span className="text-[#00f7d2]">Omoniyi Temitope Israel</span>
      </h1>

      <p className="text-[#fff] mb-2 flex items-center justify-center text-lg">
        <span className="bg-[#00f7d2] text-[#00f7d2] rounded-full px-2 mx-2">
          .
        </span>
        <span>Full Stack Developer</span>
        <span className="bg-[#00f7d2] text-[#00f7d2] rounded-full px-2 mx-2">
          .
        </span>
      </p>

      <p className="mb-8 max-w-xl">
        I design and build fast, scalable web applications — combining beautiful
        front-end experiences with powerful back-end logic.
      </p>

      <div className="flex gap-6 mb-20">
        <a
          href="https://github.com/temitope-israel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:omoniyitemitopeisrael@gmail.com"
          aria-label="Email"
          className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform"
        >
          <SiGmail />
        </a>

        <a
          href="https://www.linkedin.com/in/omoniyitemitopeisrael/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Hero;
