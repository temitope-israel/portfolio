import React from "react";
import quickstayhotel from "../../assets/images/quickstayhotel.png";
import srm from "../../assets/images/smooth-ride-motorcycles.png";
import digimoni from "../../assets/images/digimoni.png";
import p1 from "../../assets/images/p1.webp";

import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      image: srm,
      title: "Smooth Ride Motorcycles",
      description:
        "A full-stack web app for registering and managing Smooth Ride Motorcycle customers with barcode scanning, admin roles, and analytics. Built with Next.js and MongoDB.",
      link: "https://smooth-ride-motorcycles.vercel.app/",
    },
    {
      image: quickstayhotel,
      title: "Quick Stay Hotel - Hotel Booking Application",
      description:
        "A frontend-only hotel booking interface that allows users to explore listings, view details, and simulate bookings with a clean, responsive UI. Built with React and Tailwind CSS.",
      link: "https://quick-stay-hotel-b6vy.vercel.app/",
    },
    {
      image: digimoni,
      title: "DigiMoni - Crypto Price Tracker",
      description:
        "A sleek crypto website that displays up-to-date prices for major cryptocurrencies. Built using React and public APIs for real-time data updates.",
      link: "https://digi-moni.vercel.app/",
    },
    // {
    //   image: p1,
    //   title: "Dreamweaver",
    //   description:
    //     "An app built with animations and transitions for a polished and delightful experience.",
    // },
    // {
    //   image: p1,
    //   title: "HD",
    //   description:
    //     "A backend-powered project handling real-time updates and user-generated content.",
    // },
  ];

  return (
    <section className="text-gray-400 text-center bg-[#131313] px-4 md:px-8 lg:px-16 py-12">
      <h3 className="text-sm tracking-wide uppercase text-[#00f7d2] mb-1">
        Portfolio
      </h3>
      <p className="text-3xl text-white mb-10 font-bold">
        Featured <span className="text-[#00f7d2]">Projects</span>.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link} // ← Add this line
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
