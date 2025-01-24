import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import workshop1 from "../images/workshop1.png";
import workshop2 from "../images/workshop2.jpeg";
import workshop3 from "../images/workshop3.jpg";
import workshop4 from "../images/workshop4.jpg";
import workshop5 from "../images/workshop5.jpg";
import workshop6 from "../images/workshop6.jpg";
import workshop7 from "../images/workshop7.jpg";
import workshop8 from "../images/workshop8.jpg";
import workshop9 from "../images/workshop9.jpg";
import workshop10 from "../images/workshop10.jpg";
import workshop11 from "../images/workshop11.jpg";
import arpan from "../images/arpan.jpeg";

import acmLogo from "../images/acm.png";
import dronaidLogo from "../images/dronaid.jpeg";
import leanInLogo from "../images/leanin.jpeg";
import isteLogo from "../images/iste.png";
import variseLogo from "../images/varise.png";
import tacmLogo from "../images/tacm.jpeg";
import mistLogo from "../images/mist.jpeg";
import adgLogo from "../images/adg_logo.jpg";
import blankLogo from "../images/Blank.jpeg";
import acmwLogo from "../images/ACMW_LOGO.png";

export default function TimelineSection() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const timelinedetails = [
    {
      id: 1,
      title: "CONVenient-Convolutional Neural Network Workshop",
      date: "24th January, 2025",
      time: "5:30 PM - 8:30 PM",
      workshopImage: workshop1,
      organizationLogo: acmLogo,
    },
    {
      id: 2,
      title: "Fusion 360 Generative Design and PCB Designing",
      date: "24th January, 2025",
      time: "5:30 PM - 8:30 PM",
      workshopImage: workshop2,
      organizationLogo: dronaidLogo,
    },
    {
      id: 3,
      title: "UI/UX Designing",
      date: "24th January, 2025",
      time: "5:30 PM - 8:30 PM",
      workshopImage: workshop3,
      organizationLogo: leanInLogo,
    },
    {
      id: 4,
      title: "Arpan Garg, the Co-founder & CTO of Exa Protocol",
      date: "25th January, 2025",
      time: "5:30 PM",
      workshopImage: arpan,
      organizationLogo: isteLogo,
    },
    {
      id: 5,
      title: "GameCraft: Intro to VR and GameDev",
      date: "26th January, 2025",
      time: "2:30 - 5:30 PM",
      workshopImage: workshop4,
      organizationLogo: variseLogo,
    },
    {
      id: 6,
      title: "StarTrail: Stargazing and Astrophotography Workshop",
      date: "26th January, 2025",
      time: "2:30 PM - 5:30 PM",
      workshopImage: workshop6,
      organizationLogo: tacmLogo,
    },
    {
      id: 7,
      title: "HackLinux: Cryptography and Web Exploitation",
      date: "27th January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop5,
      organizationLogo: mistLogo,
    },
    {
      id: 8,
      title: "App Development: App Dev and Backend Workshop",
      date: "28th January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop8,
      organizationLogo: adgLogo,
    },
    {
      id: 9,
      title: "Capture The Flag",
      date: "29th January-30th January, 2025",
      time: "6:00 PM (29th Jan) - 11:59 PM (30th Jan)",
      workshopImage: workshop5,
      organizationLogo: mistLogo,
    },
 
    {
      id: 10,
      title: "Crafting the Web: A Beginner's Guide to WebDev",
      date: "29th January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop8,
      organizationLogo: isteLogo,
    },
    {
      id: 9,
      title: "Tech Divide: A Tech Debate competition",
      date: "30th January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop9,
      organizationLogo: blankLogo,
    },
    {
      id: 10,
      title: "CloudQuest: Intro to Cloud Computing with Azure",
      date: "31st January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop10,
      organizationLogo: isteLogo,
    },
    {
      id: 11,
      title: "VisionCraft: Mastering Computer Vision",
      date: "31st January, 2025",
      time: "5:30 - 8:30 PM",
      workshopImage: workshop11,
      organizationLogo: acmwLogo,
    },
  ];

  return (
    <div className="lg:mb-16 lg:mt-32 mt-16">
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl font-bold font-heading tracking-wider text-white mb-4 text-2xl">
          TIMELINE
        </h2>
        <p className="text-gray-300">24th - 31st January, 2025</p>
      </div>

      <div className="relative isolate">
        <div className="absolute h-1 bg-gradient-to-r from-purple-600/20 via-purple-600 to-purple-600/20 top-1/2 left-0 right-0 -translate-y-1/2 blur-sm" />
        <div className="absolute h-0.5 bg-gradient-to-r from-purple-600/20 via-purple-600 to-purple-600/20 top-1/2 left-0 right-0 -translate-y-1/2" />

        <div
          ref={scrollContainerRef}
          className="relative flex gap-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-8 pb-4 scroll-smooth h-[500px]"
        >
          {timelinedetails.map((workshop) => (
            <div
              key={workshop.id}
              className="snap-center flex flex-col items-center group flex-shrink-0"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#020617] relative overflow-hidden border-2 border-[#0ea5e9]">
                  <img
                    src={workshop.organizationLogo}
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 w-64 transform transition-all duration-500 group-hover:-translate-y-2">
                <div
                  className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-5 border border-purple-500/30 
                  group-hover:border-[#0ea5e9]/50 transition-all 
                  group-hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#0ea5e9]/5 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity group-hover:before:opacity-100"
                >
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={workshop.workshopImage}
                      alt=""
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#0ea5e9] transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-sm font-medium text-[#0ea5e9] mb-2">
                    {workshop.date}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300/90">
                    {workshop.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
