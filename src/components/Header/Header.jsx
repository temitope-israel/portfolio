import React from "react";
import NavBar from "./NavBar";

const Logo = () => (
  <a
    href="/"
    className="text-xl font-bold text-white hover:text-[#00f7d2] transition-colors duration-300"
  >
    {/* You can replace this with your actual logo image or SVG */}
    Temitope's <span className="font-charm"> Portfolio</span>
  </a>
);

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 flex flex-col items-center justify-between w-full px-6 md:px-16 py-4 bg-[#131313] text-white shadow-md lg:flex-row lg:items-center gap-4"
      aria-label="Main Navigation"
    >
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
