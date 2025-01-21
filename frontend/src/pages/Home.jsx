import { useEffect } from "react";
import Hero from "../components/Hero";
import CountdownTimer from "../components/CountdownTimer";
import KeynoteSpeakerCard from "../components/Keynote_card";
import HackathonCard from "../components/Hackathon_card";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
import { workshops } from "../constants/timeline";
import SponsorCard from "../components/SponsorCard.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector(".parallax-video");
      if (video) {
        const scrollTop = window.scrollY;
        const parallaxSpeed = 0.1; 
        const scaleSpeed = 0.0005; 
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
      <div className="relative w-full h-[80vh] sm:h-[85vh] lg:h-screen z-1">
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

      {/* Countdown Timer Section */}
      <div className="py-0 relative z-10 px-4 sm:px-8 md:px-16">
        <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
      </div>

      {/* Speaker Section */}
      <p className="font-heading text-center mb-11 text-white text-2xl sm:text-3xl lg:text-5xl lg:mt-20 relative z-10">
        SPEAKER
      </p>
      <KeynoteSpeakerCard />

      {/* Partners Section */}
      <div className="lg:py-12 py-4 relative z-10">
        <p className="font-heading text-center text-white text-2xl sm:text-3xl lg:text-5xl lg:pb-20 pb-5 mt-10">
          PARTNERS
        </p>
        <Carousel />
      </div>

      {/* Timeline Section */}
      <main className="lg:mb-2 mb-16 relative z-10 px-4 sm:px-8 md:px-16">
        <Timeline workshops={workshops} />
      </main>

      {/* Hackathon Section */}
      <div className="lg:py-12 lg:mb-6 relative z-10">
        <p className="font-heading text-center text-white text-2xl sm:text-3xl lg:text-5xl lg:pb-5 my-1">
          HACKATHON
        </p>
        <HackathonCard />
      </div>

      {/* Sponsors Section */}
      <div className="lg:py-12 lg:mb-6 relative z-10">
        <p className="font-heading text-center text-white text-2xl sm:text-3xl lg:text-5xl lg:pb-5 my-1">
          SPONSORS
        </p>
        <SponsorCard />
      </div>

      {/* Extra space at the bottom for footer */}
      <div className="pb-16"></div>
    </div>
  );
};

export default Home;
