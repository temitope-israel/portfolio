import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 pt-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 text-sm mb-10">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="text-xl font-bold text-white hover:text-[#00f7d2] transition-colors duration-300"
          >
            {/* You can replace this with your actual logo image or SVG */}
            Temitope's <span className="font-charm"> Portfolio</span>
          </a>
        </div>

        {/* Services */}
        <div className="leading-7">
          <h2 className="font-semibold text-white mb-2">Services</h2>
          <p>Full-Stack Development</p>
          <p>Frontend Engineering</p>
          <p>Backend Development</p>
          <p>API Integration & DevOps</p>
        </div>

        {/* Links */}
        <div className="leading-7">
          <h2 className="font-semibold text-white mb-2">Navigation</h2>
          <a href="#home" className="cursor-pointer hover:text-white block">
            Home
          </a>
          <a href="#projects" className="cursor-pointer hover:text-white block">
            Featured Projects
          </a>
          <a href="#about" className="cursor-pointer hover:text-white block">
            About Me
          </a>
          <a href="#contact" className="cursor-pointer hover:text-white block">
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-white mb-2">Follow Me</h2>
          <div className="flex gap-6 text-xl text-white">
            <a
              href="https://github.com/temitope-israel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:Omoniyitemitopeisrael@gmail.com"
              className="hover:text-gray-300"
            >
              <SiGmail />
            </a>
            <a
              href="https://linkedin.com/in/omoniyitemitopeisrael/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />
      <div className="text-center text-sm text-white mt-4 mb-6">
        &copy; {new Date().getFullYear()} Omoniyi Temitope Israel
      </div>
    </footer>
  );
};

export default Footer;
