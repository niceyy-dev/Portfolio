import React from "react";

export default function Projects() {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom">
    <div className="w-full bg-custom">
      <div className="relative w-full">
        {/* Image */}
        <img
          src="/imgs/mac.jpg"
          alt="Project"
          className="w-full h-120 object-cover blur-sm"
        />
        {/* Titre superposé sur l'image */}
        <h1 className="pl-15 absolute top-1/2 left-4 transform -translate-y-1/2 text-8xl font-safira-march text-black">
          Projects
        </h1>
      </div>
      <div className="mt-8 w-full flex justify-center font-montserrat">
        <nav className="flex space-x-8">
          <a
            href="#project1"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 1
          </a>
          <a
            href="#project2"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 2
          </a>
          <a
            href="#project3"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 3
          </a>
          <a
            href="#project4"
            className="text-lg font-medium text-black hover:text-[#D5BDAF] transition-colors duration-300"
          >
            Project 4
          </a>
        </nav>
      </div>
    </div>
  );
}
