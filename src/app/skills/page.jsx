"use client";
import { useEffect, useState } from 'react';

const skills = {
  frontend: [
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'TailwindCSS', level: 75 },
    { name: 'JavaScript', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 45 },
    { name: 'AWS', level: 30 },
  ]
};

export default function Skills() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Mastering the latest technologies to deliver exceptional solutions
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
          {Object.entries(skills).map(([category, skillSet]) => (
            <div
              key={category}
              className="shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6  text-white capitalize">
                {category} Development
              </h2>
              <div className="space-y-6">
                {skillSet.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 ">
                      <span className=" text-indigo-600 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                        style={{
                          width: animation ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
