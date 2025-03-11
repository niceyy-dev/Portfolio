import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom">
      {/* Title */}
      <h1 className="text-4xl font-safira-march mb-8 self-start about-title">
        About Me
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed font-anonymous-regular font-content">
          <p className="">
            I’m Anais, a web and blockchain developer with a passion for
            crafting innovative, user-centric applications. I specialize in
            building scalable, responsive websites and decentralized
            applications using modern technologies.
          </p>
          <p className="">
            I am always looking to challenge myself with exciting projects.
          </p>
          Driven by curiosity and a love for solving complex problems, I am
          constantly exploring new technologies and honing my skills.
          <p className="">
            Currently based in Paris, I am open to freelance collaborations and
            full-time opportunities where I can continue to grow and contribute
            to the development community.
          </p>
          <p> Let’s connect and bring your ideas to life!</p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center sm:justify-end">
          <img
            src="/imgs/profile.png"
            alt="Profile"
            className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
