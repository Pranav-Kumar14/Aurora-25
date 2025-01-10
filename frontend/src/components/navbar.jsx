import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import user from "../images/log.png";
import hack from "../images/trophy.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#040d49] sticky top-0 z-50 w-screen overflow-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 mt-2">
            <img className="h-14 w-auto" src={logo} alt="Logo" />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex space-x-16 mx-auto mt-3">
            <div
              className="text-white hover:text-blue-500 font-medium cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Home
            </div>
            <div
              className="text-white hover:text-blue-500 font-medium cursor-pointer"
              onClick={() => navigate("/speaker")}
            >
              Speaker
            </div>
            <div
              className="text-white hover:text-blue-500 font-medium cursor-pointer"
              onClick={() => navigate("/sponsors")}
            >
              Sponsors
            </div>
            <div
              className="text-white hover:text-blue-500 font-medium cursor-pointer"
              onClick={() => navigate("/developers")}
            >
              Developers
            </div>
            <div
              className="bg-[#9D31A1] text-white px-3 rounded-3xl hover:bg-[#d343d8] cursor-pointer"
              onClick={() => navigate("/hackathon")}
            >
              <img className="h-5 w-5 inline-block" src={hack} /> Hackathon
            </div>
            <div
              className="bg-[#9D31A1] text-white px-3 rounded-3xl hover:bg-[#d343d8] cursor-pointer"
              onClick={() => navigate("/workshop")}
            >
              <img className="h-5 w-5 inline-block" src={hack} /> Workshop
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              className="h-20 w-20 cursor-pointer"
              src={user}
              alt="Login"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-4 p-4 bg-[#040d49] rounded-md">
              <div
                className="block text-white hover:text-blue-500 font-medium cursor-pointer"
                onClick={() => navigate("/home")}
              >
                Home
              </div>
              <div
                className="block text-white hover:text-blue-500 font-medium cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </div>
              <div
                className="block text-white hover:text-blue-500 font-medium cursor-pointer"
                onClick={() => navigate("/hackathon")}
              >
                Hackathon
              </div>
              <div
                className="block text-white hover:text-blue-500 font-medium cursor-pointer"
                onClick={() => navigate("/speakers")}
              >
                Speakers
              </div>
              <button
                className="w-auto bg-[#9D31A1] rounded-3xl text-white px-4 py-2 hover:bg-blue-600"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
