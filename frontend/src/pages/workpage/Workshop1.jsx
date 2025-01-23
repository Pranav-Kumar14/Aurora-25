import React from 'react';
import w1 from '../../images/workshop1.png';
import logo from '../../images/acm.png';
import { useNavigate } from "react-router-dom";
import workback from '../../images/work_back.png';

const Workshop1 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-8 pt-[200px] lg:pt-[299px] pb-[200px] lg:pb-[250px] font-press-start bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${workback})` }}
    >
      {/* Neural Network Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#05E0EE] font-bold font-heading mb-6">
        CONVenient-Convolutional Neural Network Workshop
        </h2>
      </div>

      {/* Workshop Content */}
      <section className="mt-8 w-full max-w-3xl lg:max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[20px] lg:rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-6 lg:p-8 pt-[80px] lg:pt-[95px]">

        {/* Description Section */}
        <div>
          <h3 className="text-xl lg:text-4xl text-[#EAEAEA] font-bold text-center font-heading">
            Description
          </h3>
          <p className="mt-4 text-center font-body text-[#EAEAEA] text-sm lg:text-base leading-relaxed">
          Learn the basics of the building blocks of Computer Vision, the Convolutional Neural Network WITHOUT the worries of prerequisite coding and machine learning knowledge. We'll look into the inner workings with awesome visualizations and clarity you won't find anywhere else! Finally, implement an End to End CNN Project with you own architecture and deploy the project on Flask.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-center">
            {/* Date */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold text-sm lg:text-base text-[#EAEAEA] font-body">24th January, 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12l4.243-4.243a4 4 0 00-5.657-5.657L7.757 6.343A4 4 0 005.1 9.757l4.242 4.243-4.243 4.243a4 4 0 105.657 5.657L16.657 17.657a4 4 0 005.657-5.657z"
                />
              </svg>
              <p className="font-semibold text-[#EAEAEA] text-sm lg:text-base font-body">AB 3</p>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-7a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold text-[#EAEAEA] text-sm lg:text-base font-body">5:30 pm onwards</p>
            </div>
          </div>
        </div>

        {/* About Our Club Section */}
        <div className="mt-8 p-4 lg:p-6 rounded-[20px] lg:rounded-[36px] bg-transparent border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px]">
          <div className="flex items-center lg:absolute top-4 left-4">
            <img
              src={logo}
              alt="Neural Network"
              className="rounded-full"
              style={{ width: '48px', height: '48px' }}
            />
          </div>
          <div className="sm:mt-6 mt-8">
            <h3 className="text-xl lg:text-3xl font-bold text-center text-[#EAEAEA] font-heading">
              About Our Club
            </h3>
            <p className="mt-4 text-center font-body text-sm lg:text-base text-[#EAEAEA] leading-loose">
              "The ACM Manipal Chapter is a technical club that hosts events like Codentine, Epoch, MIT Open, and Cryptic Finds. We focus on coding, AI/ML, development, and other technical domains, offering opportunities to learn, grow, and collaborate."
            </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center mt-6 lg:mt-8">
          <button
            className="rounded-[50px] lg:rounded-[135px] bg-orange-400 shadow-inner shadow-[0_4px_6px_5px_rgba(0,0,0,0.25)] px-4 lg:px-6 py-2 text-sm lg:text-base text-white font-semibold hover:bg-[#04c3d0] transition duration-300 ease-in-out"
            onClick={() => {
              navigate(`/Workshop`);
            }}
          >
            Go To Workshop Page
          </button>
          <p className="mt-4 text-xs lg:text-sm font-body text-white">
            Register to reserve your spot now!!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Workshop1;
