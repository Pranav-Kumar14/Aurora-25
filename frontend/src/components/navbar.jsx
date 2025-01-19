import React, { useState } from "react";
import { Link } from "react-router-dom";
import auroralogo from "../images/aurora_logo.png";
import Captf from "../images/Captf.png";
import CTF from "../images/ctfhead.png";
import { useNavigate } from "react-router-dom";
// import Home from "../images/Home.png";
// import Speaker from "../images/Speaker.png";
// import Dev from "../images/Developers.png";
// import Hack from "../images/Hack.png";
import icon from "../images/log.png";
// import Sponsors from "../images/Sponsers.png";
// import Work from "../images/Work.png";

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
                            src= "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png"
                            alt="Logo"
                        />
                    </div>

                    {/* Center-aligned tabs */}
                    <div className="hidden md:flex flex-grow justify-center space-x-8">
                        <Link
                            to="/home"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            <p className="font-heading">
                                HOME
                            </p>
                        </Link>
                        <Link
                            to="/speaker"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            <p className="font-heading">
                                SPEAKER
                            </p>
                        </Link>
                        {/* <Link
                            to="/timeline"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            <img
                            className="h-4 w-12"
                            src={Sponsors}
                            alt="Sponsors"
                        /> */}
                        {/* </Link> */}
                        <Link
                            to="/ctf"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            <p className="font-heading">
                                CTF
                            </p>
                        </Link>
                        <Link
                            to="/developer"
                            className="text-white hover:text-blue-300 lg:px-3 md:px-2 py-2 rounded-md text-sm font-medium"
                        >
                            <p className="font-heading">
                                DEVELOPER
                            </p>
                        </Link>
                        <Link
                            to="/hackathon"
                            className="lg:px-3 md:px-2 py-2 rounded-full text-sm text-[#E67E22] font-medium hover:text-white hover:bg-[#E67E22] transition duration-300"
                        >
                            <p className="font-heading">
                                HACKATHON
                            </p>
                        </Link>
                        <a
                            href="/workshop"
                            className="lg:px-3 md:px-2 py-2 rounded-full text-sm text-[#E67E22] font-medium hover:text-white hover:bg-[#E67E22] transition duration-300"
                        >
                            <p className="font-heading">WORKSHOP</p>
                        </a>
                    </div>

                    {/* Profile icon on the right */}
                    <div className="hidden md:block pt-2">
                        <button className="text-white hover:text-blue-300"
                        onClick={() => navigate("/profile")}
                        >
                            <img src={icon} alt="" className="round w-[70.422px] h-[80.437px] pb-2"/>
                            
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"
                                />

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
                            to="/home"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            <img
                            className="ml-[0.25rem] h-4 w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121212/Home_gqtsux.png"
                            alt="Home"
                        />
                        </Link>
                        <Link
                            to="/speaker"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            <img
                            className="ml-[0.25rem] h-4 w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/Speaker_gem7u2.png"
                            alt="speaker"
                        />
                        </Link>
                        {/* <Link
                            to="/timeline"
                            className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Timeline
                        </Link> */}
                        <Link
                            to="/sponsors"
                            className="block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <img
                            className="ml-[0.25rem] h-4 w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/Sponsers_th9hym.png"
                            alt="Sponsors"
                        />
                        </Link>
                        <Link
                        to="/developer"
                        className="block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <img
                            className="ml-[0.25rem] h-4 w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/Developers_fg1z6d.png"
                            alt="Developers"
                        />
                        </Link>
                        <Link
                            to="/hackathon"
                            className="block px-3 py-2 rounded-full text-base font-medium"
                        >
                            <img
                            className="h-9 w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/Hack_uqti2o.png"
                            alt="Hackathon"
                        />
                        </Link>
                        <Link
                            to="/workshop"
                            className="block px-3 py-2 rounded-full text-base font-medium"
                        >
                            <img
                            className="h-[38px] w-auto"
                            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121211/Work_sizk58.png"
                            alt="Workshop"
                        />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
