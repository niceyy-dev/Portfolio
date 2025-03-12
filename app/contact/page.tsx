"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify"; // Import de Toastify
import { EnvelopeIcon } from "@heroicons/react/24/outline";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        toast(
          "📨 Thank you for reaching out! I’ll get back to you as soon as possible.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );

        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Error sending message.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 bg-custom py-12 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed font-montserrat sm:px-6 animate-fadeInLeft">
          <h1 className="text-4xl font-bold mb-4 contact-title">
            Let's chat!
            <br /> Tell me about your project.
          </h1>
          <p className="text-s text-gray-600">
            Let's build something amazing together! Share your ideas with me,
            and we’ll get started!
          </p>

          {/* Section email */}
          <a href="mailto:azhang.pro@gmail.com">
            <div className="flex justify-center items-center gap-4 mt-8 w-auto max-w-xs bg-[#E3D5CA] bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-xl">
              <EnvelopeIcon className="h-8 w-8 text-gray-600" />
              <span className="text-gray-600">azhang.pro@gmail.com</span>
            </div>
          </a>
        </div>

        {/* Right: Form */}
        <div className="flex justify-center sm:justify-start font-montserrat animate-fadeInRight">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-[#E3D5CA] bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-lg space-y-6"
          >
            {/* Name Field */}
            <div className="relative animate-fadeInUp">
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
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="relative animate-fadeInUp">
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Email"
              />
            </div>

            {/* Subject Field */}
            <div className="relative animate-fadeInUp">
              <label
                htmlFor="subject"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Subject"
              />
            </div>

            {/* Message Field */}
            <div className="relative animate-fadeInUp">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-[#D5BDAF] bg-transparent input-animate input-focus"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center animate-fadeInUp">
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

      {/* Container pour Toastify */}
      <ToastContainer />
    </div>
  );
}
