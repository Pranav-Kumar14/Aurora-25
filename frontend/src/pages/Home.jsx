import { useEffect } from "react";
import Hero from "../components/Hero";
import CountdownTimer from "../components/CountdownTimer";
import KeynoteSpeakerCard from "../components/Keynote_card";
import HackathonCard from "../components/Hackathon_card";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
import { workshops } from "../constants/timeline";
import SponsorCard from "../components/SponsorCard.jsx";
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isPhone = useMediaQuery({ maxWidth: 1023 });

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
    <>
    {isLaptop && (
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

        {/* footer */}
        <footer
          className="text-white text-center relative z-[999] top-[5rem]"
          // style={{
          //     backgroundImage: `url(${footerImg})`,
          //     backgroundSize: 'fill',
          //     backgroundPosition: 'center',
          // }}
          >
          {/* <h2 className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 mb-4 rounded-full text-lg font-medium inline-flex items-center">Contact Us</h2> */}
          <div className="flex justify-center space-x-6 mb-6">
              <a href="https://www.instagram.com/iste_manipal/" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/istemanipal/" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://in.linkedin.com/company/iste-manipal" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin text-2xl"></i>
              </a>
          </div>
          <p className="text-sm mb-2"> 
              For any queries, contact:<br /> +91-9845780894 | +91-8809795723
          </p>
          <p className="text-sm"> 
              Copyright &copy; 2025 All rights reserved | Made by ISTE Manipal
          </p>
          </footer>
      </div>
    )}
    {isPhone && (
      <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
            <div className='mt-6 py-6'>
                <Hero />
            </div>
            <div className='py-12'>
                <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
            </div>
            <p className='font-heading lg:text-5xl text-center text-white  text-2xl lg:mt-20'>
                    SPEAKER
                </p>
                <KeynoteSpeakerCard />
            
            <div className="lg:py-12 py-4">
            <p className='font-heading lg:text-5xl text-center text-white lg:pb-20  text-2xl pb-5 mt-10'>
                    PARTNERS
                </p>
                <Carousel />
            </div>
            <main className="lg:mb-2 mb-16">
                <Timeline workshops={workshops} />
            </main>

            <div className='lg:py-12 lg:mb-6'>
            <p className='font-heading lg:text-5xl text-center text-white lg:pb-5 my-1 text-2xl'>
                    HACKATHON
                </p>

            <HackathonCard />
            </div>


        </div>
    )}
    </>
  );
};

export default Home;
