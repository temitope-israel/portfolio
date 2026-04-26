import React from "react";
import quickstayhotel from "../../assets/images/quickstayhotel.png";
import srm from "../../assets/images/smooth-ride-motorcycles.png";
import digimoni from "../../assets/images/digimoni.png";
import p1 from "../../assets/images/p1.webp";
import hmn from "../../assets/images/hmn.png";
import coffee from "../../assets/images/coffee.png";
import airpod from "../../assets/images/airpod.png";
import hse from "../../assets/images/hotis-studio-editor.png";

import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      image: hse,
      title: "Hotis Studio Editor (Beta)",
      description:
        "A full-stack email architect featuring a drag-and-drop canvas and a contextual property inspector. Built with Next.js, TypeScript, and PostgreSQL (Prisma) to manage complex JSON-based layouts.",
      link: "https://hotis-studio-editor.vercel.app/",
    },
    {
      image: hmn,
      title: "Honda Manufacturing Nigeria",
      description:
        "A full-stack web app for registering and managing Honda Manufacturing Nigeria dealers/customers with barcode scanning, admin roles, and analytics. Built with Next.js and MongoDB.",
      link: "https://honda-customer-profiling.vercel.app/",
    },
    {
      image: srm,
      title: "Smooth Ride Motorcycles",
      description:
        "A full-stack web app clone of Honda Manufacturing Nigeria - for registering and managing Smooth Ride Motorcycle customers with barcode scanning, admin roles, and analytics. Built with Next.js and MongoDB.",
      link: "https://smooth-ride-motorcycles.vercel.app/",
    },
    {
      image: coffee,
      title: "Premium Coffee Shop",
      description:
        "A sophisticated landing page for a boutique coffee brand. Focuses on minimalist design, responsive layouts, and high-quality visual storytelling. Built with React and Tailwind CSS.",
      link: "https://coffee-website-henna-six.vercel.app/",
    },
    {
      image: quickstayhotel,
      title: "Quick Stay Hotel",
      description:
        "A frontend-only hotel booking interface that allows users to explore listings, view details, and simulate bookings with a clean, responsive UI. Built with React and Tailwind CSS.",
      link: "https://quick-stay-hotel-b6vy.vercel.app/",
    },
    {
      image: airpod,
      title: "Apple AirPods Max Slider",
      description:
        "An immersive, interactive product slider featuring fluid animations and smooth transitions. Built with React, Framer Motion, and Tailwind CSS for a premium user experience.",
      link: "https://airpods-max-slider.vercel.app/", // Make sure to add this link if you have it!
    },
    {
      image: digimoni,
      title: "DigiMoni - Crypto Tracker",
      description:
        "A sleek crypto website that displays up-to-date prices for major cryptocurrencies. Built using React and public APIs for real-time data updates.",
      link: "https://digi-moni.vercel.app/",
    },
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
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
