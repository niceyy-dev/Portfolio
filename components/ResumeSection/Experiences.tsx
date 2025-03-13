import React from "react";

export default function Experiences() {
  return (
    <div className="w-full flex mb-6">
      {/* Colonne gauche */}
      <div className="flex items-center justify-center w-1/4 flex-shrink-0 text-3xl">
        Experiences
      </div>

      {/* Colonne droite */}
      <div className="flex-grow space-y-4 pl-6">
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Blockchain Developer - SOFTW-AN
            </h3>
            <div className="text-right">
              <p className="font-bold">2024 - Present</p>
              <span className="text-gray-500 text-sm">Freelance</span>
            </div>
          </div>
          <ul className="list-disc pl-5">
            <li>Developed new features for the company's product.</li>
            <li>
              Collaborated with cross-functional teams to improve user
              experience.
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Blockchain Architect - Stellantis
            </h3>
            <div className="text-right">
              <p className="font-bold">Sept 2022 - Sept 2024</p>
              <span className="text-gray-500 text-sm">Apprenticeship</span>
            </div>
          </div>
          <ul className="list-disc pl-5">
            <li>
              Market study on the integration of blockchain technology within
              the automotive industry.
            </li>
            <li>
              Explored its potential to enhance transparency, security, and
              efficiency across various sectors.
            </li>
            <li>
              Developed PoC to demonstrate the viability of blockchain solutions
              in the automotive industry.
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Blockchain Developer - AJJ12
            </h3>
            <div className="text-right">
              <p className="font-bold">Mars 2022 - Sept 2022</p>
              <span className="text-gray-500 text-sm">Apprenticeship</span>
            </div>
          </div>
          <ul className="list-disc pl-5">
            <li>
              Implemented new user interfaces using React and Tailwind CSS.
            </li>
            <li>Developed responsive websites using React and Node.js.</li>
            <li>
              Integrating data flow between the backend, blockchain, and
              frontend to ensure seamless communication and synchronization.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
