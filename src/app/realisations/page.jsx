"use client";
import React, { useState } from "react";

const projects = [
  {
    title: "School Management App",
    description: "A web app for managing students, teachers, and classes efficiently.",
    image: "/images/schoolmanagement.png",
    liveDemo: "https://school-mana.vercel.app/admin",
    details: `
      The School Management App is a comprehensive solution for schools to manage daily administrative tasks. 
      It includes features such as:
      - Admin Dashboard for managing students, teachers, and schedules.
      - Teacher and Student Profiles.
      - Class scheduling and progress tracking.
      - Secure authentication for multiple user roles.
      
      **Technologies Used:**
      - Frontend: React.js and tailwind css
      -No backend or database was involved
      - Deployment: Vercel and Heroku
    `,
  },
  // Add more projects here if needed
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

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
                <h3 className="text-lg font-bold text-indigo-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* Buttons Section */}
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 text-white text-sm bg-indigo-600 overflow-hidden group transition-colors duration-300"
                  >
                    <span className="relative z-10">Live Demo</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors duration-300"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white  shadow-lg p-6 max-w-lg w-full pt-24">
              <h2 className="text-2xl font-bold text-indigo-900">{selectedProject.title}</h2>
              <p className="text-gray-600 mt-4 whitespace-pre-wrap">{selectedProject.details}</p>
              <button
                onClick={closeModal}
                className="mt-6 bg-indigo-600 text-white px-4 py-2  hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
