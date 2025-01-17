import React from "react";
import CTFbg from "../images/CTFbg.png";

const CtfHero = () => {
  return (
    <div className="relative text-center py-16 h-screen">
      <img
        src={CTFbg}
        alt="Capture the Flag Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10">
        <h1 className="text-8xl font-bold mb-4 text-white pt-20">CAPTURE THE FLAG</h1>
        <p className="max-w-xl mx-auto text-lg text-white pt-8">
          Welcome to our tech-based Capture The Flag (CTF) event! Dive into the
          thrilling world of cybersecurity challenges designed to test your
          skills in cryptography, reverse engineering, web exploitation, and
          more. Compete against top minds, solve puzzles, and gain hands-on
          experience in a dynamic, fast-paced environment. Are you ready to
          conquer?
        </p>
        <button className="mt-8 px-6 py-3 bg-neonPink text-white font-bold rounded-lg">
          Register Now!
        </button>
      </div>
    </div>
  );
};

export default CtfHero;
