import React from "react";

export default function Skills() {
  return (
    <div className="w-full flex">
      {/* Colonne gauche */}
      <div className="flex items-center justify-center w-1/4 flex-shrink-0  text-3xl">
        Skills
      </div>

      {/* Colonne droite */}
      <div className="flex-grow space-y-4 pl-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Première colonne */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Programming Languages
            </h3>
            <ul className="list-disc pl-5 flex flex-wrap gap-4 items-center">
              <li className="flex items-center gap-2">
                <img
                  src="/imgs/typescript.png"
                  alt="TypeScript"
                  className="h-10 w-10 m-2"
                />
                <img
                  src="/imgs/javascript.png"
                  alt="JavaScript"
                  className="h-10 w-10 m-2"
                />
                <img src="/imgs/react.png" alt="" className="h-11 w-10 m-2" />
                <img src="/imgs/node.png" alt="" className="h-12 w-16 m-2" />
                <img src="/imgs/php.png" alt="" className="h-12 w-12 m-2" />
              </li>
            </ul>
          </div>

          {/* Deuxième colonne */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Blockchain Development
            </h3>
            <ul className="list-disc pl-5 flex flex-wrap gap-4 items-center">
              <li className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src="/imgs/solidity.svg"
                    alt=""
                    className="h-10 w-10 m-3"
                  />
                  <span className="text-xs text-gray-700">Solidity</span>
                </div>
                <img src="/imgs/ipfs.png" alt="" className="h-10 w-10 m-3" />
              </li>
            </ul>
          </div>

          {/* Première colonne - Partie 2 */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 pb-3">
              Framework
            </h3>
            <ul className="list-disc pl-5 flex flex-wrap gap-4 items-center">
              <li className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <img
                    src="/imgs/expressjs.png"
                    alt="Express.js"
                    className="h-10 w-10 m-3"
                  />
                  <span className="text-gray-700 text-xs">ExpressJs</span>
                </div>
                <img src="/imgs/nextjs.png" alt="" className="h-12 w-16 m-3" />
                <img src="/imgs/flutter.png" alt="" className="h-9 w-20 m-3" />
              </li>
            </ul>
          </div>

          {/* Deuxième colonne - Partie 2 */}
          <div className="flex flex-col space-y-4 sm:space-y-0 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700">Soft Skills</h3>
            <ul className="list-disc pl-5 pt-3">
              <li>Problem-solving</li>
              <li>Teamwork & Collaboration</li>
              <li>Adaptability & Autonomy</li>
              <li>Ability to prioritize</li>
              <li>Creativity</li>
              <li>Fast-Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
