import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import HackathonTimer from "../components/HackathonTimer";
import FAQ from "../components/faq";
import SquidGame from "../images/hackbg.png";
import Calendar from "../images/calendar.png";
import Clock from "../images/clock.png";
import Location from "../images/Location.png";
import Team from "../images/hackteam.png";
// import 'aos/dist/aos.css';
// import AOS from 'aos';

const teamRules = [
  "The hackathon is open to all MIT students. Teams can consist of 2 to 5 members.",
  "Teams have to be formed before the event, and registered with the AURORA website.",
  "Respect your fellow participants, organizers, and judges. Any form of cheating, plagiarism, or unsportsmanlike behavior will result in disqualification.",
  "Participants must bring their own laptops and devices. Internet access will be provided, but participants should ensure they have backup data plans if required.",
  "You are free to use any coding platform or IDE.",
];

const judgingCrit = [
  "How innovative and original is the solution?",
  "Is the project practical and scalable?",
  "Does the solution solve a real-world problem?",
  "How challenging was the implementation?",
  "How well is the project presented during the final pitch?",
];

const judgingProc = [
  "At the end of the hackathon, all teams will present their projects to the panel of judges.",
  "Each team has 3 minutes to present their solution, followed by a 5-minute Q&A session with the judges.",
  "Judges will evaluate each project based on the outlined criteria.",
];

const general = [
  "The hackathon lasts for 10 hours. You must ensure that your solution is functional and ready for presentation by the end of the event.",
  "Mini-games will be played during breaks and will impact your overall score. However greater preference will be given to the app implemented.",
  "Mini-game rules will be made known to the participants on and at the time the mini-game is to be commenced.",
  "Light snacks will be available during breaks. Teams should bring their own meals if needed. Adequate time for lunch will be provided.",
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
      className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${SquidGame})` }}
    >
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center font-press-start h-screen text-center space-y-6 px-4"
        // data-aos="fade-up"
      >
        <h1 className="font-extrabold text-[50px] lg:text-[60px] p-4 transition-transform duration-500 hover:scale-110">
          Error 456
        </h1>
        <h3 className="font-semibold text-[24px] lg:text-[32px] p-2 transition-opacity duration-500 hover:opacity-80">
          Out of Lives
        </h3>
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
        <button className="bg-black text-white px-6 py-3 mt-4 rounded hover:bg-gray-700 transition-all transform hover:scale-105 duration-300 ease-in-out">
          Registrations Soon
        </button>
        <HackathonTimer />
      </div>

      {/* Event Details */}
      <div
        className="max-w-4xl lg:mx-auto my-16 mx-10 p-10 rounded-2xl bg-gradient-to-b from-[#1c1f3a] to-[#2a2d4a] text-white shadow-xl space-y-10 border border-white transition-transform duration-500 hover:scale-105"
        data-aos="fade-right"
      >
        <h1 className="text-3xl font-press-start text-center mb-8">
          Event Details
        </h1>
        <div className="flex flex-col items-center gap-10">
          {/* Event Date */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Calendar})` }}
            ></div>
            <h1 className="font-press-start text-xl tracking-wide text-center">
              2 February 2025
            </h1>
          </div>

          {/* Event Location */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Location})` }}
            ></div>
            <h1 className="font-press-start text-xl tracking-wide text-center">
              GSH, MIT Library
            </h1>
          </div>

          {/* Event Time */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Clock})` }}
            ></div>
            <h1 className="font-press-start text-xl tracking-wide text-center">
              8:00 AM - 6:00 PM
            </h1>
          </div>

          {/* Team Size */}
          <div className="flex items-center gap-6 transition-opacity duration-500 hover:opacity-90">
            <div
              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Team})` }}
            ></div>
            <h1 className="font-press-start text-xl tracking-wide text-center">
              Team : 2-4
            </h1>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div id="Prizes" className="mt-20 text-center p-7" data-aos="fade-up">
        <h1 className="font-press-start text-4xl text-white mb-12">
          Cash Prizes
        </h1>
        <div className="flex justify-center items-end gap-12">
          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188014/icons8-trophy-color-pixels-96_1_gpe47t.png"
              alt="Silver Trophy"
              className="w-24 h-24 md:w-28 md:h-28"
            />
            <p className="font-press-start text-lg text-gray-300 mt-4">₹4000</p>
          </div>

          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188014/icons8-trophy-32_2_vndf33.png"
              alt="Gold Trophy"
              className="w-32 h-32 md:w-36 md:h-36"
            />
            <p className="font-press-start text-lg text-yellow-400 mt-4">
              ₹8000
            </p>
          </div>

          <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188013/3RD_l1wald.png"
              alt="Bronze Trophy"
              className="w-24 h-24 md:w-28 md:h-28"
            />
            <p className="font-press-start text-lg text-orange-500 mt-4">
              ₹3000
            </p>
          </div>
        </div>
      </div>

      {/* Rules, Judging Criteria, Process, and General Sections */}
      {["Rules", "Criteria", "Process", "General"].map((section, index) => (
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
            <ul className="list-disc space-y-6 text-sm font-press-start pl-8 leading-relaxed">
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
