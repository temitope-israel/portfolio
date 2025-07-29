import React, { useState, useEffect } from "react";
import Temitope from "../../assets/images/Temitope.jpeg";
import { TfiBag } from "react-icons/tfi";

const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next JS",
    "TypeScript",
    "Tailwind",
    "Git",
  ];

  const [skillShapes, setSkillShapes] = useState([]);

  useEffect(() => {
    const shapes = skills.map((skill) => ({
      name: skill,
      radius: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
    }));
    setSkillShapes(shapes);
  }, []);

  return (
    <div
      className="text-gray-400 bg-[#1D1D1D] py-10 px-6 md:px-12 lg:px-20 scroll-mt-20"
      id="about"
    >
      <h3 className="text-sm text-center">MY BIO</h3>
      <p className="text-2xl text-white text-center mb-6">
        About <span className="text-[#00f7d2]">Me.</span>
      </p>

      {/* Image + Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={Temitope}
            alt="My Avatar"
            className="w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-[#00f7d2] rounded-full"
          />
        </div>

        {/* Bio Text */}
        <div className="space-y-6 text-justify">
          <p>
            I am a passionate and detail-oriented Junior Full Stack Developer
            with hands-on experience in building and deploying real-world,
            production-level web applications. My technical expertise includes
            working with modern technologies such as React, Next.js, MongoDB,
            and Tailwind CSS to create scalable, responsive, and user-friendly
            solutions.
          </p>
          <p>
            One of my most notable achievements includes designing and
            developing a Customer Profiling System for Honda Manufacturing
            Nigeria, which involved full-stack development from frontend UI to
            backend data handling. I have also built other dynamic applications,
            including a food delivery platform and a cryptocurrency information
            site, further strengthening my understanding of full-stack
            architecture and best development practices.{" "}
          </p>

          <p>
            Beyond my coding skills, I’m proficient with tools such as Git,
            GitHub, basic Linux commands, Microsoft Excel, and PowerPoint, and I
            have experience in general desktop support. I bring to the table a
            strong analytical mindset, an eye for clean and accessible UI
            design, and a commitment to continuous learning and professional
            development. I’m highly motivated by the challenge of solving real
            problems through code and am always eager to contribute to
            meaningful, impactful projects within collaborative development
            teams.
          </p>

          <a
            href="/resume.pdf" // You can update this to your actual CV link
            rel="noopener noreferrer"
            className="bg-[#00f7d2] p-4 rounded text-black flex items-center gap-3 mt-6 w-fit transition hover:opacity-90"
            download={"resume.pdf"}
          >
            Download Resume
            <TfiBag className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-sm text-center md:text-left">SKILLS</h3>
        <p className="text-2xl text-white mb-6 text-center md:text-left">
          Technical <span className="text-[#00f7d2]">Skills.</span>
        </p>
        <p className="mb-8 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
          expedita sit magnam labore inventore minus eos deserunt quasi eaque
          ad, perspiciatis itaque ipsa. Aliquid illum ipsa sequi at, distinctio
          quod.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {skillShapes.map((skill, index) => (
            <div
              key={index}
              className="text-center border-2 border-[#00f7d2] p-4 text-sm sm:text-base bg-gray-700 text-white"
              style={{
                borderRadius: `${skill.radius}%`,
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
