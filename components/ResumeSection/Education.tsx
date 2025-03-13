import React from "react";

export default function Education() {
  return (
    <div className="w-full flex">
      {/* Colonne gauche */}
      <div className="flex items-center justify-center w-1/4 flex-shrink-0  text-3xl">
        Education
      </div>

      {/* Colonne droite */}
      <div className="flex-grow space-y-4 pl-6">
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              ESGI Paris - Master of Blockchain Engineering
            </h3>
            <div className="text-right">
              <p className="font-bold">Sept 2022 - Sept 2024</p>
            </div>
          </div>
          <ul className="list-disc pl-3">
            <li>Worked on building responsive web applications.</li>
            <li>
              Implemented new user interfaces using React and Tailwind CSS.
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Hanyang University Seoul - Exchange Semester
            </h3>
            <div className="text-right">
              <p className="font-bold">Sept 2021 - Jan 2022</p>
            </div>
          </div>
          <ul className="list-disc pl-3">
            <li>Worked on building responsive web applications.</li>
            <li>
              Implemented new user interfaces using React and Tailwind CSS.
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              ESGI Paris - Bachelor of Computer Science
            </h3>
            <div className="text-right">
              <p className="font-bold">2018/2022</p>
            </div>
          </div>
          <ul className="list-disc pl-3">
            <li>Worked on building responsive web applications.</li>
            <li>
              Implemented new user interfaces using React and Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
