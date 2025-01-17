import React from "react";
import speakerImage from "../images/image.png";
import ldin from "../images/lkdin.png";
import instaicon from "../images/insta.png";
import cal from "../images/calendar.png";
import clock from "../images/clock.png";

function Speaker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d4b] via-[#020428] to-[#020322] flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white mb-8 sm:mb-10">
        Meet The Speaker
      </h1>
      <div className="bg-gradient-to-b bg-[#d9d9d9]/5 rounded-[30px] sm:rounded-[60px] border border-white shadow-lg w-full max-w-2xl sm:max-w-4xl p-6 sm:p-8 flex flex-col sm:flex-row items-center">
        {/* Speaker Image */}
        <div className="flex-none w-full sm:w-1/3 flex justify-center items-center mb-6 sm:mb-0">
          <img
            src={speakerImage}
            alt="Dale Vaz"
            className="w-40 h-40 sm:w-[240px] sm:h-[240px] lg:w-[322px] lg:h-[341px] rounded-full"
          />
        </div>
        {/* Speaker Details */}
        <div className="flex-1 sm:pl-8">
          <h2 className="text-[#9d31a1] text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left mb-4 sm:mb-5">
            Dale Vaz
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2 mb-4 text-center sm:text-left">
            Dale Vaz, former Chief Technology Officer at Swiggy, led engineering
            and data science efforts to transform the company into an AI and
            ML-first organization. After departing Swiggy, he started his own
            fintech startup, Aaritay Tech.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 my-4">
            <a
              href="https://www.instagram.com/p/C2m-ekAPTWH/?img_index=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instaicon}
                className="w-10 h-10 sm:w-[47.49px] sm:h-[42.75px]"
                alt="Instagram Icon"
              />
            </a>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ldin}
                className="w-10 h-10 sm:w-[47.49px] sm:h-[42.75px]"
                alt="LinkedIn Icon"
              />
            </a>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left text-white">
            ‘Project To Product: The Art Of Scaling Systems’
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start mt-6 space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <img src={clock} alt="Clock Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>20th January, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={cal} alt="Calendar Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>7:00 - 9:00 PM</span>
            </div>
          </div>
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 sm:py-3 px-6 rounded-full w-full">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
