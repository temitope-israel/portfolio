import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaCode } from "react-icons/fa6";
import { CiSettings, CiMonitor } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const services = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Full Stack Development",
      description:
        "I design and develop complete web applications from end to end. Proficient in both frontend and backend technologies, creating robust, responsive, and scalable systems.",
    },
    {
      number: "02",
      icon: <CiMonitor />,
      title: "Frontend Engineering",
      description:
        "I craft pixel-perfect user interfaces using technologies like React, Tailwind CSS, and JavaScript, focusing on performance, accessibility, and clean design.",
    },
    {
      number: "03",
      icon: <CiSettings />,
      title: "Backend Development",
      description:
        "I build secure and scalable server-side logic with tools like Node.js, Express, MySQL, and MongoDB. I handle APIs, databases, and server logic with efficiency.",
    },
    {
      number: "04",
      icon: <IoRocketOutline />,
      title: "API Integration & DevOps",
      description:
        "I Integrate third-party APIs and deploy full-stack apps with tools like Git, CI/CD, and cloud platforms such as Vercel, Netlify, or Heroku.",
    },
  ];

  return (
    <div className="w-full text-gray-400 bg-[#131313] text-center px-6 sm:px-10 md:px-16 py-10">
      {/* Heading */}
      <h3 className="text-sm mb-2">SERVICES</h3>
      <p className="text-2xl text-white mb-6">
        What <span className="text-[#00f7d2]">I do</span>.
      </p>

      {/* Card Layout */}
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            isActive={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            number={service.number}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
