"use client";
import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du message ou d'email

    alert("Message envoyé!");
    // Réinitialise le formulaire après l'envoi
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom py-12 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed font-montserrat sm:px-6">
          <h1 className="text-4xl font-bold mb-4 contact-title">
            Let's chat!
            <br /> Tell me about your project.
          </h1>
          <p className="text-s text-gray-600">
            Let's build something amazing together! Share your ideas with me,
            and we’ll get started!
          </p>

          {/* Section email */}
          <a href="">
            <div className="flex justify-center items-center gap-4 mt-8 w-auto max-w-xs bg-[#E3D5CA] bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-xl">
              <EnvelopeIcon className="h-8 w-8 text-gray-600" />
              <span className="text-gray-600">azhang.pro@gmail.com</span>
            </div>
          </a>
        </div>

        {/* Right: Form */}
        <div className="flex justify-center sm:justify-start font-montserrat">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-[#E3D5CA] bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#EDEDE9] text-gray-600 p-3 rounded-md font-semibold hover:bg-[#C0A789] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
