import React from "react";

const projects = [
  {
    title: "School Management App",
    description: "A productivity app for managing personal and team tasks effectively.",
    image: "/images/schoolmanagement.png",
    liveDemo: "https://school-mana.vercel.app/admin",
    learnMore: "https://your-taskapp-details.com",
  },
 
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mt-12">My Projects</h1>
          <p className="text-gray-600 mt-2">
            A collection of my recent works showcasing skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-indigo-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* Buttons Section */}
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 text-white text-sm bg-indigo-600 overflow-hidden group transition-colors duration-300"
                  >
                    {/* Gradient background for hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative z-10">Live Demo</span>
                  </a>
                  <a
                    href={project.learnMore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-indigo-600 text-sm  hover:text-indigo-800 transition-colors duration-300"
                  >
                    <span className="mr-2">Learn More</span>
                    <span
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
