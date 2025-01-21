import { useEffect } from "react";
import Hero from "../components/Hero";
import CountdownTimer from "../components/CountdownTimer";
import KeynoteSpeakerCard from "../components/Keynote_card";
import HackathonCard from "../components/Hackathon_card";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
import { workshops } from "../constants/timeline";
import SponsorCard from "../components/SponsorCard.jsx";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector(".parallax-video");
      if (video) {
        const scrollTop = window.scrollY;
        const parallaxSpeed = 0.1; // Slow vertical movement
        const scaleSpeed = 0.0005; // Subtle scaling effect
        video.style.transform = `translateY(-${scrollTop * parallaxSpeed}px) scale(${
          1 + scrollTop * scaleSpeed
        })`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
      <div className="relative w-full h-screen z-0">
        <video
          className="parallax-video fixed top-0 left-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dopqveduc/video/upload/v1737297038/homebg_x66y59.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Hero />
        </div>
      </div>
      <div className="py-0 relative z-10">
        <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
      </div>
      <p className="font-heading lg:text-5xl text-center mb-11 text-white text-2xl lg:mt-20 relative z-10">
        SPEAKER
      </p>
      <KeynoteSpeakerCard />
      {/* Partners Section */}
      <div className="lg:py-12 py-4 relative z-10">
        <p className="font-heading lg:text-5xl text-center text-white lg:pb-20 text-2xl pb-5 mt-10">
          PARTNERS
        </p>
        <Carousel />
      </div>

      {/* Timeline Section */}
      <main className="lg:mb-2 mb-16 relative z-10">
        <Timeline workshops={workshops} />
      </main>

      {/* Hackathon Section */}
      <div className="lg:py-12 lg:mb-6 relative z-10">
        <p className="font-heading lg:text-5xl text-center text-white lg:pb-5 my-1 text-2xl">
          HACKATHON
        </p>
        <HackathonCard />
      </div>

      {/* Sponsors Section */}
      <div className="lg:py-12 lg:mb-6 relative z-10">
        <p className="font-heading lg:text-5xl text-center text-white lg:pb-5 my-1 text-2xl">
          SPONSORS
        </p>
        <SponsorCard />
      </div>
    </div>
  );
};

export default Home;
