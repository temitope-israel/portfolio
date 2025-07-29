"use client";

import React, { useState, useEffect } from "react";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";

const ContactMe = () => {
  // const [status, setStatus] = useState("idle");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(null), 5000); // Hide after 5s
      return () => clearTimeout(timeout); // Cleanup on unmount or re-render
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjkorloz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const icons = [
    {
      icon: <BiPhone />,
      content: "+234 816 2599 233",
      link: "tel:+2348162599233",
    },
    {
      icon: <TfiEmail />,
      content: "Omoniyitemitopeisrael@gmail.com",
      link: "mailto:Omoniyitemitopeisrael@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker />,
      content: "Ogun State, Nigeria.",
      link: null,
    },
  ];

  const inputClass =
    "border border-gray-600 bg-[#1a1a1a] rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#00f7d2] text-white placeholder:text-gray-400";

  const labelClass = "text-left text-sm mb-1 text-white";

  return (
    <section
      className="text-gray-400 py-10 px-5 bg-[#131313] scroll-mt-20"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-sm uppercase tracking-wide">Get in touch</h3>
          <p className="text-3xl text-white font-semibold mb-4">
            Contact <span className="text-[#00f7d2]">Me.</span>
          </p>
          <p className="max-w-xl mx-auto text-sm text-gray-400">
            I am open to full-time, contract, and part-time opportunities in
            Full-Stack Development.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col md:flex-row gap-10 bg-[#1D1D1D] rounded-lg p-6 mt-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <p className="mb-6 text-white text-lg">
              Do you have an awesome project idea?
              <br />
              <span className="text-[#00f7d2]">Let's Discuss.</span>
            </p>

            <ul className="space-y-4">
              {icons.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="bg-white text-black p-3 rounded-full text-lg">
                    {item.icon}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#00f7d2] text-sm hover:underline break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-[#00f7d2] text-sm">
                      {item.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Send Me a Message
              </h2>

              <label className="block mb-4">
                <span className="text-sm text-gray-300">Your Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 mt-1 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#00f7d2]"
                />
              </label>

              <label className="block mb-4">
                <span className="text-sm text-gray-300">Your Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 mt-1 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#00f7d2]"
                />
              </label>

              <label className="block mb-6">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full p-3 mt-1 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:border-[#00f7d2]"
                ></textarea>
              </label>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded bg-[#00f7d2] text-black font-bold hover:bg-opacity-90 transition cursor-pointer shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-6 bg-green-700 text-white text-center p-4 rounded-md shadow">
                ✅ Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 bg-red-700 text-white text-center p-4 rounded-md shadow">
                ❌ Something went wrong. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
