"use client";
import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
            Turning Ideas Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              {" "}Digital Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 text-center max-w-3xl mb-8">
            We create innovative digital solutions that help businesses thrive in the modern world
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-900 hover:text-white hover:border-white border-2 transition-all">
            <Link href={"/contact"}>Contact Us </Link>
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all">
            <Link href={"/realizations"}>View Projects </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative p-8 transition-all duration-300 group-hover:text-white">
                  <div className="mb-4 text-indigo-600 group-hover:text-white">
                    {/* Icon here */}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum accusamus unde corporis veritatis voluptatem deleniti,
                    totam perspiciatis, sit modi dolor quod rem rerum? Quia,
                    possimus reprehenderit dolorum voluptate consequatur
                    commodi?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <StatisticsSection />
    </div>
  );
}

function StatisticsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  const stats = [
    { number: 150, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <div className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    suffix={stat.suffix || ""}
                    duration={2}
                  />
                ) : (
                  0
                )}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
