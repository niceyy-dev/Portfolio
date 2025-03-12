import React from "react";

function Resume() {
  return (
    // <div className="flex flex-col items-center justify-center px-8 sm:px-20 bg-custom">
    <div className="w-full max-w-4xl mx-auto py-10 space-y-12 font-montserrat">
      <h4 className="font-safira-march mb-8 self-start animate-fadeInLeft about-title">
        Resume
      </h4>
      {/* Experience Section */}

      <div id="resume-content">
        <div className="flex items-center justify-between mb-6">
          {/* Heading */}
          <h2 className="text-3xl font-medium text-gray-800">Experiences</h2>
          {/* Button to the right */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Download in PDF
          </button>
        </div>
        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-2/4">
              <h3 className="text-xl font-semibold text-gray-700">
                Blockchain Developer - SOFTW-AN
              </h3>
              <p className="text-gray-500 text-sm">Sept 2024 - Present</p>
              <p className="text-gray-500 text-sm">Freelance</p>
            </div>
            {/* <ul className="sm:w-2/4 text-gray-500 list-disc pl-6">
              <li>Developed responsive websites using React and Node.js.</li>
              <li>
                Built decentralized applications using Ethereum and Solidity.
              </li>
              <li>Collaborated with clients for tailored solutions.</li>
            </ul> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-2/4">
              <h3 className="text-xl font-semibold text-gray-700">
                Blockchain Architect - Stellantis
              </h3>
              <p className="text-gray-500 text-sm">Sep 2022 - Sept 2024</p>
              <p className="text-gray-500 text-sm">Apprenticeship</p>
            </div>
            <ul className="sm:w-2/4 text-gray-500 list-disc pl-6">
              <li>
                Market study on the integration of blockchain technology within
                the automotive industry
              </li>
              <li>
                Exploring its potential to enhance transparency, security, and
                efficiency across various sectors.
              </li>
              <li>
                Developed PoC to demonstrate the viability of blockchain
                solutions in the automotive industry.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-2/4">
              <h3 className="text-xl font-semibold text-gray-700">
                Blockchain Developer - AJJ12
              </h3>
              <p className="text-gray-500 text-sm">Jun 2021 - Aug 2021</p>
              <p className="text-gray-500 text-sm">Internship</p>
            </div>
            <ul className="sm:w-2/4 text-gray-500 list-disc pl-6">
              <li>Developed responsive websites using React and Node.js.</li>
              <li>
                Built decentralized applications using Ethereum and Solidity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-medium text-gray-800 mb-6 ">Education</h2>
        <div className="space-y-6 text-center">
          {/* Education 1 */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-full text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Master of Blockchain Engineering
              </h3>
              <p className="text-gray-500 text-sm">ESGI Paris - France</p>
              <p className="text-gray-500 text-sm">2022-2024</p>
            </div>
          </div>

          {/* Education 2 */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-full text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Exchange Semester
              </h3>
              <p className="text-gray-500 text-sm">
                Hanyang University Seoul - South Korea
              </p>
              <p className="text-gray-500 text-sm">Sept 2021 - Janv 2022</p>
            </div>
          </div>

          {/* Education 3 */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="sm:w-full text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-500 text-sm">ESGI Paris - France</p>
              <p className="text-gray-500 text-sm">2018-2021</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-medium text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Web Development
            </h3>
            <ul className="list-disc pl-6 text-gray-500">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React.js, Next.js</li>
              <li>Node.js, Express.js</li>
              <li>Tailwind CSS, Bootstrap</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Blockchain Development
            </h3>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Solidity, Ethereum</li>
              <li>IPFS, Web3.js</li>
              <li>Smart contract development</li>
              <li>Decentralized applications (DApps)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-3xl font-medium text-gray-800 mb-6">
          Certifications
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700">
              Certified Ethereum Developer - 2022
            </h3>
            <p className="text-gray-500">Issued by: Blockchain Council</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-700">
              Full Stack Web Developer Certification - 2021
            </h3>
            <p className="text-gray-500">Issued by: FreeCodeCamp</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Resume;
