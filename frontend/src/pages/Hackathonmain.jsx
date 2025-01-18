import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HackathonTimer from "../components/HackathonTimer";
import FAQ from "../components/faq";

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
  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center font-press-start h-screen text-center space-y-3">
        <h1 className="font-bold text-[40px] lg:text-[50px] p-4">Error 456</h1>
        <h3 className="font-bold text-[20px] lg:text-[30px] p-4">Out of Lives</h3>
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
          className="font-pixelify block text-[2em] max-w-[100%]"
          repeat={Infinity}
        />
        <button className="bg-black text-white px-6 py-3 mt-4 rounded hover:bg-gray-700 transition">
          Registrations Soon
        </button>
        <HackathonTimer />
      </div>

      {/* Event Details */}
      <div className="max-w-5xl mx-auto mt-12 p-6 rounded-xl bg-gradient-to-r from-[#1c1f3a] to-[#2a2d4a] text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/path-to-calendar-icon.svg')" }}
            ></div>
            <h1 className="font-press-start text-md">2 February 2025</h1>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/path-to-location-icon.svg')" }}
            ></div>
            <h1 className="font-press-start text-md">GSH, MIT Library</h1>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/path-to-clock-icon.svg')" }}
            ></div>
            <h1 className="font-press-start text-md">8:00am-6:00pm</h1>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/path-to-team-icon.svg')" }}
            ></div>
            <h1 className="font-press-start text-md">Team Size: 2-4</h1>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div id="Prizes" className="mt-16 text-center">
        <h1 className="font-press-start text-3xl text-white mb-12">
          Cash Prizes
        </h1>
        <div className="flex justify-center items-end gap-12">
          {/* Silver Trophy */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188014/icons8-trophy-color-pixels-96_1_gpe47t.png"
              alt="Silver Trophy"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <p className="font-press-start text-lg text-gray-300 mt-4">
              RS 4000
            </p>
          </div>

          {/* Gold Trophy */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188014/icons8-trophy-32_2_vndf33.png"
              alt="Gold Trophy"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <p className="font-press-start text-lg text-yellow-400 mt-4">
              RS 8000
            </p>
          </div>

          {/* Bronze Trophy */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/db1ziohil/image/upload/v1737188013/3RD_l1wald.png"
              alt="Bronze Trophy"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <p className="font-press-start text-lg text-orange-500 mt-4">
              RS 3000
            </p>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div id="Rules" className="mt-16 px-6 flex justify-center">
        <div className="bg-[#1c1f3a] text-white rounded-lg p-8 shadow-md w-[80%] max-w-3xl">
          <h2 className="font-press-start text-2xl text-center mb-8">Rules</h2>
          <ul className="list-disc space-y-6 text-sm font-press-start pl-8 leading-relaxed">
            {teamRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="Criteria" className="mt-16 px-6 flex justify-center">
        <div className="bg-[#1c1f3a] text-white rounded-lg p-8 shadow-md w-[80%] max-w-3xl">
          <h2 className="font-press-start text-2xl text-center mb-8">Judging Critera</h2>
          <ul className="list-disc space-y-6 text-sm font-press-start pl-8 leading-relaxed">
            {judgingCrit.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="Process" className="mt-16 px-6 flex justify-center">
        <div className="bg-[#1c1f3a] text-white rounded-lg p-8 shadow-md w-[80%] max-w-3xl">
          <h2 className="font-press-start text-2xl text-center mb-8">Judging Process</h2>
          <ul className="list-disc space-y-6 text-sm font-press-start pl-8 leading-relaxed">
            {judgingProc.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="General" className="mt-16 px-6 flex justify-center">
        <div className="bg-[#1c1f3a] text-white rounded-lg p-8 shadow-md w-[80%] max-w-3xl">
          <h2 className="font-press-start text-2xl text-center mb-8">General</h2>
          <ul className="list-disc space-y-6 text-sm font-press-start pl-8 leading-relaxed">
            {general.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
