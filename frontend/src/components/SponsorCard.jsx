import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SponsorsSection = () => {
  const containerRef = useRef(null);
  const [cards, setCards] = useState([
    {
      url: "https://res.cloudinary.com/daja3mrty/image/upload/e_improve,w_200,h_160,c_thumb,g_auto/v1737486420/radhamedicals_bjf9mt.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp1_c5whux.png",
      title: "Title 2",
      id: 2,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp6_ptjjoh.png",
      title: "Title 3",
      id: 3,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-2_mi7jpa.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp5_w92uou.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-1_en9eof.jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb3_ungkna.jpg",
      title: "Title 7",
      id: 7,
    },
  ]);

  useEffect(() => {
    const autoScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          // Reset scroll to the start
          containerRef.current.scrollTo({ left: 0 });
        } else {
          // Scroll a small distance for a smooth effect
          containerRef.current.scrollBy({ left: 1 });
        }
      }
    };

    let animationFrameId;

    const smoothScroll = () => {
      autoScroll();
      animationFrameId = requestAnimationFrame(smoothScroll); // Continuous smooth scroll
    };

    smoothScroll(); // Start scrolling
    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, []);

  // Clone cards for infinite scroll
  useEffect(() => {
    if (containerRef.current) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // Append cards when nearing the end
          setCards((prevCards) => [...prevCards, ...prevCards]);
        }
      };

      containerRef.current.addEventListener("scroll", handleScroll);
      return () => containerRef.current.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="relative bg-transparent py-10">
      <div
        ref={containerRef}
        className="flex overflow-x-auto whitespace-nowrap gap-4"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari, and Edge */
            .flex::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 h-[150px] w-[200px] sm:h-[200px] sm:w-[300px] md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px] rounded-lg overflow-hidden bg-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-full w-full"
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
