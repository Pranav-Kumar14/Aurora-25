// src/App.jsx
import React from "react";
import speakerImage from "../images/image.png";
import ldin from "../images/lkdin.png";
import instaicon from "../images/insta.png";
import cal from "../images/calendar.png";
import clock from "../images/clock.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d4b] via-[#020428] to-[#020322] flex flex-col justify-center items-center p-5">
      <h1 className="text-center text-6xl font-bold uppercase tracking-widest text-white mb-6">
        Meet The Speaker
      </h1>
      <div className="bg-gradient-to-bbg-[#d9d9d9]/5 rounded-[60px] border border-white shadow-lg w-full max-w-4xl p-8 flex">
        <div className="flex-none w-1/3 flex justify-center items-center">
          <img
            src={speakerImage}
            alt="Dale Vaz"
            className="w-[322px] h-[341px] rounded-[360px]"
          />
        </div>
        <div className="flex-1 pl-8">
          <h2 className="text-[#9d31a1] text-5xl font-bold text-center mb-5">
            Dale Vaz
          </h2>
          <p className="text-m text-15px text-gray-300 mt-2 mb-4 w-[400px] ml-[65px]">
            Dale Vaz, former Chief Technology Officer at Swiggy, led engineering
            and data science efforts to transform the company into an AI and
            ML-first organization. After departing Swiggy, he started his own
            fintech startup, Aaritay Tech.
          </p>
          <div className="flex justify-center space-x-4 my-4">
            <a href="www.insta.com" target="_blank" rel="noopener noreferrer">
              <img
                src={instaicon}
                className="w-[47.49px] h-[42.75px]"
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ldin}
                className="w-[47.49px] h-[42.75px]"
                alt="LinkedIn Icon"
              />
            </a>
          </div>
          <p className="text-lg font-medium text-center">
            ‘Project To Product: The Art Of Scaling Systems’
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <img src={clock} alt="Clock Icon" className="w-6 h-6" />
              <span>20th January, 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <img src={cal} alt="Clock Icon" className="w-6 h-6" />
              <span>7:00 - 9:00 PM</span>
            </div>
          </div>
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full w-full">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
