"use client";
import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";
import Image from "next/image";

export default function Home() {
  React.useEffect(() => {
    // Typed.js for "Turning Ideas Into" and "FONGE JUSTICE"
    const options = {
      strings: ["Digital Reality", "Innovative Solutions", "Your Success"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };
    const typed = new Typed(".typed-text", options);

    return () => {
      // Cleanup Typed.js instance
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
            Turning Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              <span className="typed-text"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 text-center max-w-3xl mb-8">
            I create innovative digital solutions that help businesses thrive in
            the modern world
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-900 hover:text-white hover:border-white border-2 transition-all">
              <Link href={"/contact"}>Contact Us </Link>
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all">
              <Link href={"/realisations"}>View Projects </Link>
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi! I&#39;m{" "}
                <span className="text-indigo-800 font-bold">FONGE JUSTICE</span>
                , a passionate web developer with a knack for creating
                user-friendly and visually appealing websites. I have experience
                in modern web technologies like React, Next.js, and Express.js.
                When I&#39;m not coding, you&#39;ll find me exploring new tech
                or enjoying mind relaxing hobbies like gaming. Let&#39;s build
                something amazing together!
              </p>
            </div>
            <div className="flex-1">
              <div className="w-64 h-64 rounded-full overflow-hidden mx-auto relative group">
                <Image
                  src="/images/WhatsApp Image 2024-12-21 at 08.50.44_a4ce5a24.jpg"
                  alt="Your Image"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </div>
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
    { number: 40, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 2, suffix: "+", label: "Years Experience" },
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
