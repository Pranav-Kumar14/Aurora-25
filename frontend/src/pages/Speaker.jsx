import React from "react";
import { useEffect } from "react";
import ArpanImage from "../images/Arpan.jpeg";
import CalendarIcon from "../images/calendar.png";
import ClockIcon from "../images/clock.png";
import LocationIcon from "../images/Location.png";
import LinkedinIcon from "../images/lkdin.png";
import { motion } from "framer-motion"; 
import speakerimg from '/speaker1.jpg';

const Speaker = () => {

  useEffect(() => {
    if (!performance.getEntriesByType("navigation").some(entry => entry.type === "reload")) {
      window.location.reload();
    }
  }, []);
  
  
  
    return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0e0b3d] to-[#1b1b3a] text-white px-6 py-16 bg-cover bg-top bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${speakerimg})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-4 mt-6 tracking-widest">
            AURORA'25 Tech Talk
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
            Product Development & Innovation
          </p>
        </motion.header>

        {/* Speaker Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-b from-[#11122e] to-[#181a3b] rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Speaker Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={ArpanImage}
                alt="Arpan Garg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Speaker Details */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-2">
              Arpan Garg
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Co-founder & CTO of <strong>Exa Protocol</strong> <br />
              Ex-Product Head at <strong>Coding Ninjas</strong> <br />
              Two-time <strong>SIH Winner</strong>
            </p>
            <p className="mt-6 text-sm sm:text-base text-gray-400 leading-7">
              Learn the secrets of product development and innovation from a
              visionary entrepreneur. Explore how to brainstorm, validate ideas,
              and build impactful products that create real-world value.
            </p>
            <a
              href="https://www.linkedin.com/in/arpansac/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-sm font-medium shadow-lg"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Event Details */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {/* Date */}
          <div className="flex flex-col items-center gap-2 bg-[#121236] hover:bg-[#16163d] rounded-lg p-6 shadow-md transition">
            <img src={CalendarIcon} alt="Date" className="w-12 h-12 mb-2" />
            <p className="mt-2 text-lg font-medium">Date</p>
            <p className="text-gray-300">25th January 2025</p>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center gap-2 bg-[#121236] hover:bg-[#16163d] rounded-lg p-6 shadow-md transition">
            <img src={ClockIcon} alt="Time" className="w-12 h-12 mb-2" />
            <p className="mt-2 text-lg font-medium">Time</p>
            <p className="text-gray-300">5:30 PM Onwards</p>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center gap-2 bg-[#121236] hover:bg-[#16163d] rounded-lg p-6 shadow-md transition">
            <img src={LocationIcon} alt="Venue" className="w-12 h-12 mb-2" />
            <p className="mt-2 text-lg font-medium">Venue</p>
            <p className="text-gray-300">Library Auditorium</p>
          </div>
        </motion.section>

        {/* Register Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://forms.gle/MvGmu8J5n2QZCpxP8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-lg font-bold  bg-blue-900  rounded-full text-white hover:bg-blue-500 transition transform hover:scale-105 shadow-lg"
          >
            Reserve Your Free Entry
          </a>
          <p className="mt-4 text-sm text-black-400">
            Limited seats available – Secure your spot today!
          </p>
        </motion.section>
      </div>
    </div>
  ); 
};

export default Speaker;
