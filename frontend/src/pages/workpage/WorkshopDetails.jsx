import React from 'react';
import { useNavigate } from 'react-router-dom';
import workback from '../../images/work_back.png';

const WorkshopDetails = ({
  title,
  description,
  date,
  slots,
  location,
  time,
  clubLogo,
  clubInfo,
  buttonText,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-8 pt-[200px] lg:pt-[299px] pb-[200px] lg:pb-[250px] font-press-start bg-cover bg-top bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${workback})` }}
    >
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl text-[#05E0EE] font-bold font-heading mb-6 md:w-3/4 m-auto ">
          {title}
        </h2>
      </div>

      {/* Workshop Content */}
      <section className="mt-8 w-full max-w-3xl lg:max-w-4xl bg-[rgba(255,255,255,0.06)] rounded-[20px] lg:rounded-[36px] border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px] p-6 lg:p-8 pt-[80px] lg:pt-[95px]">
        {/* Description Section */}
        <div>
          <h3 className="text-lg md:text-2xl lg:text-4xl lg:mb-8 text-[#EAEAEA] font-bold text-center font-heading">
            Description
          </h3>
          <p className="mt-4 text-center font-body text-[#EAEAEA] text-sm lg:text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-center">
          <div className="flex flex-col sm:flex-row md:flex-wrap gap-5">
  {slots.map((slot, index) => (
    <div
      key={index}
      className="bg-[rgba(255,255,255,0.08)] border border-[#EAEAEA] rounded-lg p-4 shadow-md mb-7 "
    >
      {/* Slot Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg text-orange-400 font-semibold m-auto">Day {slot.day}</h3>
     
      </div>

      {/* Slot Details */}
      <div className="space-y-3">
        {/* Date */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
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
          <p className="text-sm text-[#EAEAEA]">Date: {slot.date}</p>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-500"
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
          <p className="text-sm text-[#EAEAEA]">Time: {slot.time}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500"
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
          <p className="text-sm text-[#EAEAEA]">Location: {slot.location}</p>
        </div>
      </div>
    </div>
  ))}
</div>

           
          </div>
        </div>

        {/* About Our Club Section */}
        <div className="mt-8 p-4 lg:p-6 rounded-[20px] lg:rounded-[36px] bg-transparent border border-[#EAEAEA] shadow-md shadow-[rgba(0,0,0,0.25)] backdrop-blur-[17.5px]">
          <div className="flex items-center justify-center   top-4 left-4">
            <img
              src={clubLogo}
              alt="Club Logo"
              className="rounded-full "
              style={{ width: '48px', height: '48px' }}
            />
          </div>
          <div className="sm:mt-6 mt-8">
            <h3 className="text-xl lg:text-3xl font-bold text-center text-[#EAEAEA] font-heading">
              About Our Club
            </h3>
            <p className="mt-4 text-center font-body text-sm lg:text-base text-[#EAEAEA] leading-loose">
              {clubInfo}
            </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center mt-6 lg:mt-8">
          <button
            className="rounded-[50px] lg:rounded-[135px] bg-orange-400 shadow-inner shadow-[0_4px_6px_5px_rgba(0,0,0,0.25)] px-4 lg:px-6 py-2 text-sm lg:text-base text-white font-semibold hover:bg-[#04c3d0] transition duration-300 ease-in-out"
            onClick={() => {
              navigate(navigateTo);
            }}
          >
            {buttonText}
          </button>
          <p className="mt-4 text-xs lg:text-sm font-body text-white">
            Register to reserve your spot now!!
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkshopDetails;
