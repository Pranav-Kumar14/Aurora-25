import React, { useState } from "react";
import { Link } from "react-router-dom";
import auroralogo from '../../public/aurora_logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-[#0f0d39] to-[#201867] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0 py-2">
                        <img
                            className="h-12 w-12"
                            src={auroralogo}
                            alt="Logo"
                        />
                    </div>

                    {/* Center-aligned tabs */}
                    <div className="hidden md:flex flex-grow justify-center space-x-8">
                        <Link
                            to="/home"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/speaker"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            Speaker
                        </Link>
                        <Link
                            to="/timeline"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            Timeline
                        </Link>
                        <Link
                            to="/sponsors"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            Sponsors
                        </Link>
                        <Link
                            to="/developer"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            Developer
                        </Link>
                        <Link
                            to="/hackathon"
                            className="bg-pink-500 hover:bg-pink-600 text-white lg:px-3 md:px-2 py-2 rounded-full text-sm font-medium"
                        >
                            Hackathon
                        </Link>
                        <a
                            href="/workshop"
                            className="bg-purple-500 hover:bg-purple-600 text-white lg:px-3 md:px-2 py-2 rounded-full text-sm font-medium"
                        >
                            Workshop
                        </a>
                    </div>

                    {/* Profile icon on the right */}
                    <div className="hidden md:block pt-2">
                        <button className="text-white hover:text-blue-300">
                            <svg
                                className="h-12 w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu button */}
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

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-[#0f0d39] to-[#201867]">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link
                            to="/"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/speaker"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Speaker
                        </Link>
                        <Link
                            to="/timeline"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Timeline
                        </Link>
                        <Link
                            to="/sponsors"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Sponsors
                        </Link>
                        <Link
                            to="/hackathon"
                            className="block bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full text-base font-medium"
                        >
                            Hackathon
                        </Link>
                        <Link
                            to="/workshop"
                            className="block bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-full text-base font-medium"
                        >
                            Workshop
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
