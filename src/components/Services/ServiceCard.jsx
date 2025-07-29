import React from "react";

const ServiceCard = ({ number, icon, title, description, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`flex-1 max-w-6xl border-1 px-5 py-10 text-left relative rounded-md cursor-pointer transition-all duration-300  ${
        isActive ? 'bg-[#00f7d2] text-black' : 'border-[#00f7d2] text-white hover:bg-[#00f7d2] hover:text-black'
      }`}
    >
      <div className="text-5xl absolute top-5 right-5 text-gray-500 opacity-10">{number}</div>

      <div className={`mb-4 text-2xl border-1 rounded-full inline-block p-2 ${
        isActive ? 'text-black' : 'text-white'
      }`}>
        {icon}
      </div>

      <h3 className="mb-4 text-base">{title}</h3>
      <hr className="w-30 border-1 border-gray-500 opacity-30" />
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
