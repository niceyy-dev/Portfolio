"use client";
import React, { useRef } from "react";
import Resume from "@/components/Resume";

function About() {
  // Utilisation de ref pour la section Resume
  const resumeRef = useRef(null);

  const scrollToResume = () => {
    // Défilement fluide vers la section Resume
    resumeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Ajout d'un léger décalage pour ajuster la position
    setTimeout(() => {
      window.scrollBy(0, -40);
    }, 600); // Délai de 500ms après le défilement
  };

  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom">
        {/* Title */}
        <h1 className="text-4xl font-safira-march mb-8 self-start about-title animate-fadeInLeft">
          About Me
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl items-center animate-fadeInLeft">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 text-lg leading-relaxed font-anonymous-regular font-content animate-fadeInUp">
            <p className="animate-fadeInUp">
              I’m Anaïs, a web and blockchain developer with a passion for
              crafting innovative, user-centric applications. I specialize in
              building scalable, responsive websites and decentralized
              applications using modern technologies.
            </p>
            <p className="animate-fadeInUp">
              I am always looking to challenge myself with exciting projects.
            </p>
            Driven by curiosity and a love for solving complex problems, I am
            constantly exploring new technologies and honing my skills.
            <p className="animate-fadeInUp">
              Currently based in Paris, I am open to freelance collaborations
              and full-time opportunities where I can continue to grow and
              contribute to the development community.
            </p>
            <p> Let’s connect and bring your ideas to life!</p>
          </div>
          <div className="flex justify-center sm:justify-end animate-fadeInLeft">
            <img
              src="/imgs/profile.png"
              alt="Profile"
              className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] object-cover rounded-full"
            />
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div
          className="absolute bottom-5 flex flex-col items-center cursor-pointer"
          onClick={scrollToResume} // Utilisation de la fonction de défilement
        >
          <div className="w-12 h-12 border-4 border-gray-400 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 hover:rotate-12">
            <svg
              className="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-sm mt-2">Scroll Down to Continue</p>
        </div>
      </div>
      {/* Ligne de séparation */}
      <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

      {/* Section Resume */}
      <div ref={resumeRef}>
        <Resume />
      </div>
    </div>
  );
}

export default About;
