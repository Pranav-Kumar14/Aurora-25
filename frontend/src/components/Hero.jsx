import React from "react";

function Hero() {
  return (
    <section className="text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 lg:mb-10">
          Aurora `25
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl font-sans leading-relaxed sm:leading-relaxed lg:leading-loose mb-8 sm:mb-10 lg:mb-12">
          Get ready to embark on an unforgettable journey into the realms of
          technology with TechWeek: Aurora, brought to you by ISTE Manipal. This
          year, we’re taking it to the next level with an incredible lineup of
          student workshops that cover a wide range of technical domains, from
          software to collaborating with esteemed student bodies from MIT. We’ve
          created a one-of-a-kind platform for you to dive deep into hands-on
          projects within your field of interest. Whether you’re a novice or a
          seasoned techie, TechWeek: Aurora promises valuable insights and
          practical skills that will elevate your knowledge. Join us for an
          immersive learning experience where seasoned experts and like-minded
          peers converge to share knowledge and inspire innovation. Don’t miss
          this opportunity to explore, create, and be part of a dynamic learning
          community. Unleash your potential at TechWeek: Aurora and make
          memories that will last a lifetime. See you there!
        </p>

        {/* Register Button */}
        <a
          href="/register"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-medium inline-flex items-center"
        >
          <svg
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
          </svg>
          Register Here!
        </a>
      </div>
    </section>
  );
}

export default Hero;
