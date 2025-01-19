import React from "react";
import CTFbg from "../images/CTFbg.png";

const CtfHero = () => {
  return (
    <div className="relative text-center py-16 h-screen bg">
     
      {/* <img
        src={CTFbg}
        alt="Capture the Flag Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}



      <div className="relative z-10 flex flex-col items-center w-full h-full px-6">
        <h1 className="text-4xl font-bold text-white pb-20 pt-20 capitalize font-['Chakra Petch']">
          CAPTURE THE FLAG
        </h1>

        <div className="bg-[#040222] bg-opacity-80 shadow-[0px_0px_18px_7px_rgba(255,255,255,1.00)] p-8 rounded-lg max-w-4xl mx-auto">
          <p className="text-white lg:text-lg text-xs font-['Chakra Petch']">
            Welcome to our Tech-Based Capture the Flag (CTF) event! Dive into
            the thrilling world of cybersecurity challenges designed to test your
            skills in cryptography, reverse engineering, web exploitation, and
            more. Compete against top minds, solve puzzles, and gain hands-on
            experience in a dynamic, fast-paced environment. Are you ready to
            conquer?
          </p>
        </div>

        {/* <button className="mt-8 px-6 py-3 bg-neonPink text-white font-bold rounded-lg">
          Register Now!
        </button> */}
      </div>
    </div>
  );
};

export default CtfHero;
