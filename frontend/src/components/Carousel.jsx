import React, { useState, useEffect } from "react";
import dp1 from '../images/acm.png'
import dp2 from '../images/dronaid.jpeg'
import dp3 from '../images/leanin.jpeg'
import dp4 from '../images/varise.png'
import dp5 from '../images/mist.jpeg'
import dp6 from '../images/tacm.jpeg'
import dp7 from '../images/adg_logo.jpg'
import dp9 from '../images/Blank.jpeg'
import dp11 from '../images/ACMW_LOGO.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const logos = [
    { id: 1, src: dp1, alt: "ACM" },
    { id: 2, src: dp2, alt: "Dronaid" },
    { id: 3, src: dp3, alt: "LeanIn" },
    { id: 4, src: dp4, alt: "Varise" },
    // { id: 5, src: dp5, alt: "Dronaid" },
    { id: 6, src: dp6, alt: "TACM" },
    { id: 7, src: dp7, alt: "ADG" },
    { id: 9, src: dp9, alt: "Blank" },
    { id: 10, src: dp5, alt: "MIST" },
    { id: 11, src: dp11, alt: "ACMW" }
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(
        window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 4 : 3
      );
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [logos.length]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % logos.length;
      items.push(logos[index]);
    }
    return items;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex transition-all duration-1000 ease-in-out">
        {getVisibleItems().map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 px-2 transition-all duration-500"
            style={{
              width: `${100 / visibleCount}%`
            }}
          >
            <div className={`
              w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-white p-2
              ${index === Math.floor(visibleCount / 2) ? 'scale-110 shadow-lg' : 'scale-90 opacity-50'}
              transition-all duration-500
            `}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;