import React, { useState } from "react";
import auroralogo from "../images/aurora_logo.png";
import Captf from "../images/Captf.png";
import CTF from "../images/ctfhead.png";
import { useNavigate } from "react-router-dom";
import icon from "../images/log.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="pt-2 bg-gradient-to-r from-[#0f0d39] to-[#201867] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="mr-[2rem] flex-shrink-0 py-2">
            <img
              className="h-12 w-12"
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png"
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <a
              href="/home"
              className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
            >
              <p className="font-heading">HOME</p>
            </a>
            <a
              href="/speaker"
              className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
            >
              <p className="font-heading">SPEAKER</p>
            </a>
            <a
              href="/ctf"
              className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
            >
              <p className="font-heading">CTF</p>
            </a>
            <a
              href="/developer"
              className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
            >
              <p className="font-heading">DEVELOPER</p>
            </a>
            <a
              href="/hackathon"
              className="lg:px-3 md:px-2 py-2 rounded-full text-sm font-medium text-[#E67E22]  hover:text-white hover:bg-[#E67E22] transition duration-300"
            >
              <p className="font-heading">HACKATHON</p>
            </a>
            <a
              href="/workshop"
              className="lg:px-3 md:px-2 py-2 rounded-full text-sm text-[#E67E22] font-medium hover:text-white hover:bg-[#E67E22] transition duration-300"
            >
              <p className="font-heading">WORKSHOP</p>
            </a>
          </div>

          <div className="hidden md:block pt-2">
            <button
              className="text-white hover:text-blue-300"
              onClick={() => navigate("/profile")}
            >
              <img
                src={icon}
                alt=""
                className="round w-[70.422px] h-[80.437px] pb-2"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"
              />
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#0f0d39] to-[#201867]">
          <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col justify-center">
            <a
              href="/home"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">Home</p>
            </a>
            <a
              href="/speaker"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">Speaker</p>
            </a>
            <a
              href="/ctf"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">CTF</p>
            </a>
            <a
              href="/developer"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">Developers</p>
            </a>
            <a
              href="/hackathon"
              className="block text-[#E67E22] hover:text-white hover:bg-[#E67E22] transition duration-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">Hackathon</p>
            </a>
            <a
              href="/workshop"
              className="block text-[#E67E22] hover:text-white hover:bg-[#E67E22] transition duration-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <p className="font-heading">Workshop</p>
            </a>
            <a
              href="/profile"
              className="text-white hover:text-blue-300 mt-3 flex items-center space-x-2"
            >
              <img
                src={icon}
                alt="Profile"
                className="rounded w-[70.422px] h-[80.437px] pb-2"
              />
              <p className="font-heading">Profile</p>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;