import React from "react";

function Resume() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 space-y-12 font-montserrat text-sm">
      <h4 className="font-safira-march self-start animate-fadeInLeft about-subtitle">
        Resume
      </h4>
      {/* Experience Section */}
      <div id="resume-content">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-medium text-gray-800">Experiences</h2>
          <button className="bg-[#D5BDAF] text-white px-4 py-2 rounded-md hover:bg-[#E3D5CA]">
            Download in PDF
          </button>
        </div>
        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
            <div className="sm:w-4/5">
              <h3 className="text-xl font-semibold text-gray-700">
                Blockchain Developer - SOFTW-AN
              </h3>
              <ul className="text-gray-500 list-disc pl-6 mt-4">
                <li>Developed responsive websites using React and Node.js.</li>
                <li>
                  Built decentralized applications using Ethereum and Solidity.
                </li>
                <li>Collaborated with clients for tailored solutions.</li>
              </ul>
            </div>
            <div className="sm:w-1/5 text-right">
              <p className="font-bold text-sm">Sept 2024 - Present</p>
              <p className="font-bold text-sm">Freelance</p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
            <div className="sm:w-5/6">
              <h4 className="text-xl font-semibold text-gray-700">
                Blockchain Architect - Stellantis
              </h4>
              <ul className="text-gray-500 list-disc pl-6 mt-4">
                <li>
                  Market study on the integration of blockchain technology
                  within the automotive industry
                </li>
                <li>
                  Explored its potential to enhance transparency, security, and
                  efficiency across various sectors.
                </li>
                <li>
                  Developed PoC to demonstrate the viability of blockchain
                  solutions in the automotive industry.
                </li>
              </ul>
            </div>
            <div className="sm:w-2/6 text-right">
              <p className="text-sm font-bold">Sep 2022 - Sept 2024</p>
              <p className="text-sm font-bold">Apprenticeship</p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-5 rounded-lg shadow-xs hover:shadow-md transition-shadow">
            <div className="sm:w-5/6">
              <h4 className="text-xl font-bold text-gray-700">
                Blockchain Developer - AJJ12
              </h4>
              <ul className="text-gray-500 list-disc pl-6 mt-4">
                <li>Developed responsive websites using React and Node.js.</li>
                <li>
                  Built decentralized applications using Ethereum and Solidity.
                </li>
              </ul>
            </div>
            <div className="sm:w-1/6 text-right">
              <p className="font-bold text-sm">Jun 2021 - Aug 2021</p>
              <p className="font-bold text-sm">Internship</p>
            </div>
          </div>
        </div>
        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">Education</h2>
          <div className="space-y-6">
            {/* Education 1 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-4/6">
                <h4 className="text-xl font-semibold text-gray-700">
                  Master of Blockchain Engineering
                </h4>
                <ul className="text-gray-500 list-disc pl-6 mt-4">
                  <li>Development of a decentralized music streaming app</li>
                  <li>Build NFT Marketplace</li>
                </ul>
              </div>
              <div className="sm:w-2/6 text-right">
                <p className="text-sm font-bold">ESGI Paris - France</p>
                <p className="text-sm font-bold">2022-2024</p>
              </div>
            </div>
            {/* Education 2 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-4/6">
                <h4 className="text-xl font-semibold text-gray-700">
                  Exchange Semester
                </h4>
                <ul className="text-gray-500 list-disc pl-6 mt-4">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Computer Network</li>
                  <li>Data</li>
                </ul>
              </div>
              <div className="sm:w-2/6 text-right">
                <p className="text-sm font-bold">
                  Hanyang University - South Korea
                </p>
                <p className="text-sm font-bold">Sept 2021 - Janv 2024</p>
              </div>
            </div>
            {/* Education 3 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-4/6">
                <h4 className="text-xl font-semibold text-gray-700">
                  Bachelor of Computer Science
                </h4>
                <ul className="text-gray-500 list-disc pl-6 mt-4">
                  <li>Web Development from front to back</li>
                  <li>Basic of computer science</li>
                  <li>Language c</li>
                </ul>
              </div>
              <div className="sm:w-2/6 text-right">
                <p className="text-sm font-bold">ESGI Paris - France</p>
                <p className="text-sm font-bold">2018/2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
            <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
        <div className="mt-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">
            Certifications
          </h2>
          <div className="space-y-4">
            <div className=" p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">
                Certified Ethereum Developer - 2022
              </h3>
              <p className="text-gray-500">Issued by: Blockchain Council</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">
                Full Stack Web Developer Certification - 2021
              </h3>
              <p className="text-gray-500">Issued by: FreeCodeCamp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
