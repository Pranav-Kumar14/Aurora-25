import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import HackathonTimer from "../components/HackathonTimer";
import FAQ from "../components/faq";
import SquidGame from "../images/vasavibg.png";
import Calendar from "../images/calendar.png";
import Clock from "../images/clock.png";
import Location from "../images/Location.png";
import Team from "../images/hackteam.png";
import gold from "../images/1trophy.png";
import silver from "../images/2trophy.png";
import bronze from "../images/3trophy.png";
import Timeline from "../components/HackathonTimeline";
// import 'aos/dist/aos.css';
// import AOS from 'aos';

const teamRules = [
  "Respect your fellow participants, organizers, and judges. Any form of cheating, plagiarism, or unsportsmanlike behavior will result in disqualification.",
  "Participants must bring their own laptops and devices. Internet access will be provided, but participants should ensure they have backup data plans if required.",
  "You are free to use any coding platform or IDE.",

  "Each team has 3 minutes to present their solution, followed by a 5-minute Q&A session with the judges.",
];

const judgingCrit = [
  "How innovative and original is the solution?",
  "Is the project practical and scalable?",
  "Does the solution solve a real-world problem?",
  "How challenging was the implementation?",
  "How well is the project presented during the final pitch?",
];

const judgingProc = [
];

const general = [
  
];

const Home = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);
  return (
    <div
      className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${SquidGame})`, backgroundPositionY: "1px" }}
    >
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-top font-press-start h-screen text-center space-y-6 mt-0 px-4 mb-0 pt-20"
        // data-aos="fade-up"
      >
        <h1 className="font-sans text-[20px] lg:text-[30px] p-2 pb-0 mt-0">
          Aurora presents
        </h1>
        <h1 className="font-extrabold text-[20px] lg:text-[50px] p-4 pt-0 transition-transform duration-500 hover:scale-110">
          ("DEVSPRINT")
        </h1>
        <TypeAnimation
          sequence={[
            "Build amazing projects",
            1000,
            "Network with peers",
            1000,
            "Win awesome prizes",
            1000,
          ]}
          wrapper="span"
          speed={40}
          className="font-pixelify block text-[1.5em] max-w-[100%] mt-4"
          repeat={Infinity}
        />
        <button className="bg-[#A00F0F] ring-2 ring-white rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.5)] text-white px-6 py-3  hover:bg-[#A00F0F] transition-all transform hover:scale-105 duration-300 ease-in-out mt-12">
  Register Now
</button>

        <HackathonTimer />
      </div>

      {/* Event Details */}
      <div
        className="max-w-4xl lg:mx-auto my-16 mx-10 p-10 mt-0 rounded-2xl bg-gradient-to-b from-[#1c1f3a] to-[#2a2d4a] text-white shadow-xl space-y-10 border border-white transition-transform duration-500 hover:scale-105"
        data-aos="fade-right"
      >
        <h1 className="text-3xl font-press-start text-center mb-8 mt-0">
          Event Details
        </h1>
        <div className="flex flex-col items-center gap-10">
          {/* Event Date */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Calendar})` }}
            ></div>
            <h1 className="font-sans text-xl tracking-wide text-center">
              2 February 2025
            </h1>
          </div>

          {/* Event Location */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Location})` }}
            ></div>
            <h1 className="font-sans text-xl tracking-wide text-center">
              GSH, MIT Library
            </h1>
          </div>

          {/* Event Time */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Clock})` }}
            ></div>
            <h1 className="font-sans text-xl tracking-wide text-center">
              8:00 AM - 6:00 PM
            </h1>
          </div>

          {/* Team Size */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Team})` }}
            ></div>
            <h1 className="font-sans text-xl tracking-wide text-center">
              Team : 2-5
            </h1>
          </div>
        </div>
      </div>
      <Timeline/>

      {/* Prizes Section */}
      <div id="Prizes" className="mt-20 text-center p-7" data-aos="fade-up">
        <h1 className="font-press-start text-4xl text-white mb-12">
          Cash Prizes
        </h1>
        <div className="flex justify-center items-end gap-8">
          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src= {silver}
              alt="Silver Trophy"
              className="w-28 h-24 md:w-32 md:h-28"
            />
            <p className="font-press-start text-lg text-gray-300 mt-4">₹4000</p>
          </div>

          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src= {gold}
              alt="Gold Trophy"
              className="w-36 h-32 md:w-32 md:h-32"
            />
            <p className="font-press-start text-lg text-yellow-400 mt-4">
              ₹8000
            </p>
          </div>

          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src= {bronze}
              alt="Bronze Trophy"
              className="w-28 h-24 md:w-32 md:h-28"
            />
            <p className="font-press-start text-lg text-orange-500 mt-4">
              ₹3000
            </p>
          </div>
        </div>
      </div>

      {/* Rules, Judging Criteria, Process, and General Sections */}
      {["Rules", "Criteria"].map((section, index) => (
        <div
          key={index}
          id={section}
          className="mt-16 px-6 flex justify-center"
          data-aos="fade-left"
        >
          <div className="bg-gradient-to-b from-[#1c1f3a] to-[#2a2d4a] text-white rounded-lg p-8 shadow-md w-[90%] max-w-4xl border border-white transition-transform duration-500 hover:scale-105">
            <h2 className="font-press-start text-2xl text-center mb-8">
              {section}
            </h2>
            <ul className="list-disc space-y-6  lg:text-xl sm:text-xs font-sans font-semibold pl-8 leading-relaxed">
              {(section === "Rules"
                ? teamRules
                : section === "Criteria"
                  ? judgingCrit
                  : section === "Process"
                    ? judgingProc
                    : general
              ).map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
