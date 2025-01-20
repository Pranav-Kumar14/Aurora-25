import Hero from "../components/Hero";
import CountdownTimer from "../components/CountdownTimer";
import KeynoteSpeakerCard from "../components/Keynote_card";
import hackathon from "../images/HACKATHON.png";
import partners from "../images/PARTNERS.png";
import workshopsImg from "../images/WORKSHOPS.png";
import HackathonCard from "../components/Hackathon_card";
import Carousel from "../components/Carousel";
import MediaSlider from "../components/slider";
import Timeline from "../components/Timeline";
import { workshops } from "../constants/timeline";
import SimpleParallax from "simple-parallax-js";
import SponsorCard from "../components/SponsorCard.jsx";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
      {/* Hero Section with Parallax Background */}
      <div className="relative w-full h-screen">
        <SimpleParallax>
          <img
            src="https://res.cloudinary.com/dopqveduc/image/upload/v1737391884/download_q68wxi.jpg"
            alt="Parallax Image"
            className="w-full h-auto top-0 z-0 object-co left-0 object-cover"
          />
        </SimpleParallax>
        <div className="absolute inset-0 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="py-5 relative z-10">
        <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
      </div>

      {/* Keynote Speaker Section */}
      <div className="relative rounded-xl shadow-md p-6 sm:p-8 w-xl max-w-2xl mx-auto text-white border-2 border-blue-500">
        <p className="font-heading lg:text-5xl text-center text-white text-2xl lg:mt-20 relative z-10">
          SPEAKER
        </p>
        <KeynoteSpeakerCard />
      </div>

      {/* Partners Section */}
      <div className="lg:py-12 py-4 relative z-10">
        <p className="font-heading lg:text-5xl text-center text-white lg:pb-20 text-2xl pb-5 mt-10">
          PARTNERS
        </p>
        <Carousel />
      </div>

      {/* Timeline Section */}
      <main className="lg:mb-2 mb-16 relative  z-10">
        <Timeline workshops={workshops} />
      </main>

      {/* Hackathon Section */}
      <div className="lg:py-12 lg:mb-6 relative z-10">
        <p className="font-heading lg:text-5xl text-center text-white lg:pb-5 my-1 text-2xl">
          HACKATHON
        </p>
        <HackathonCard />
      </div>
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
