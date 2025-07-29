import React from "react";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-transform duration-300 hover:scale-105 cursor-pointer scroll-mt-48"
      id="projects"
    >
      <div className="bg-[#000] border border-[#00f7d2] rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
