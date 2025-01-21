import React from "react";
import styles from "./bubble.module.css";
import toast from 'react-hot-toast';
import DrawOutlineButton from "./DrawOutlineButton";

function Hero() {
  const token = sessionStorage.getItem('token');
  return (
    <section className="text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold z-10 mb-6 sm:mb-8 lg:mb-10">
          <BubbleText text="Aurora '25" />
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl font-sans leading-relaxed sm:leading-relaxed lg:leading-loose mb-8 sm:mb-10 lg:mb-12">
        Get ready to embark on an unforgettable journey into the realms of technology with <b>TechWeek: Aurora</b>, brought to you by ISTE Manipal. This year, we're taking it to the next level with an incredible lineup of student workshops that cover a wide range of technical domains, from software to collaborating with esteemed student bodies from MIT.
        </p>

        {/* Register Button */}
        
        {!token && (
          <DrawOutlineButton>
            <a
            href="/register" 
            className="px-4 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-3xl font-medium inline-flex items-center"
          >
            {/* <svg
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-4.197-4.197m0 0L15.6 2.293m-5.045 4.678H3.9m16.2 0a7.5 7.5 0 11-15 0h15z"
              />
            </svg> */}
            Register Here!
          </a>
          </DrawOutlineButton>
          
        )
            
        }
        
      </div>
    </section>
  );
}

const BubbleText = ({ text }) => {
  return (
    <span>
      {text.split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Hero;
