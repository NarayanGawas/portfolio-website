import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
           My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Container */}
      <div className="relative flex flex-col items-center">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex w-full mb-24 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`w-full sm:w-[45%] bg-gray-900 border border-white backdrop-blur-md rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-8 transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "ml-0 mr-auto" : "mr-0 ml-auto"
              }`}
            >
              {/* Header: Logo + Title */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>

            {/* Center Circle Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
