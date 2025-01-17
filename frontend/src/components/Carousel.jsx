import React, { useState, useEffect } from "react";
import workshp from "../constants/ws";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Default visible count for smallest screen

    // Detect screen size and adjust visible count
    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(5); // Large screens
            } else if (window.innerWidth >= 768) {
                setVisibleCount(4); // Medium screens
            } else {
                setVisibleCount(3); // Small screens
            }
        };

        // Set the initial visible count
        updateVisibleCount();

        // Add resize listener
        window.addEventListener("resize", updateVisibleCount);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? workshp.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % workshp.length);
    };

    const getVisibleItems = () => {
        const endIndex = currentIndex + visibleCount;
        return workshp
            .slice(currentIndex, endIndex)
            .concat(
                endIndex > workshp.length
                    ? workshp.slice(0, endIndex % workshp.length)
                    : []
            );
    };

    return (
        <div className="relative flex items-center justify-center w-full h-48 md:h-56 lg:h-64 px-4 sm:px-6 lg:px-8">
            {/* Left arrow */}
            <button
                className="absolute md:relative md:mx-6 md:px-6 left-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                onClick={handlePrev}
            >
                &#8249;
            </button>

            {/* Carousel items */}
            <div className="flex items-center space-x-4 sm:space-x-6 overflow-hidden">
                {getVisibleItems().map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex-shrink-0 transition-all duration-300 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center ${
                            index === Math.floor(visibleCount / 2)
                                ? "scale-110 bg-white shadow-lg"
                                : "scale-90 opacity-50"
                        }`}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-full"
                        />
                    </div>
                ))}
            </div>

            {/* Right arrow */}
            <button
                className="absolute md:relative md:mx-6 md:px-6 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                onClick={handleNext}
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
