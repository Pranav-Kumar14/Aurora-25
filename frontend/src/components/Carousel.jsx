import React, { useState } from "react";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Partners from "../constants/partners";
=======
import workshp from "../constants/ws";
>>>>>>> Stashed changes
=======
import workshp from "../constants/ws";
>>>>>>> Stashed changes

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        prev === 0 ? Partners.length - 1 : prev - 1
=======
            prev === 0 ? workshp.length - 1 : prev - 1
>>>>>>> Stashed changes
=======
            prev === 0 ? workshp.length - 1 : prev - 1
>>>>>>> Stashed changes
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        prev === Partners.length - 1 ? 0 : prev + 1
=======
=======
>>>>>>> Stashed changes
            (prev + 1) % workshp.length
        );
    };

    const getVisibleItems = () => {
        return workshp.slice(currentIndex, currentIndex + visibleCount).concat(
            currentIndex + visibleCount > workshp.length
                ? workshp.slice(0, (currentIndex + visibleCount) % workshp.length)
                : []
>>>>>>> Stashed changes
        );
    };

    return (
        <div className="relative flex items-center justify-center w-full h-48 bg-gradient-to-b from-gray-900 to-black">
        {/* Left arrow */}
        <button
            className="absolute left-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={handlePrev}
        >
            &#8249;
        </button>

        {/* Carousel items */}
        <div className="flex items-center space-x-6">
            {Partners.map((item, index) => (
            <div
                key={item.id}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                index === currentIndex
                    ? "scale-110 bg-white shadow-lg"
                    : "scale-90 opacity-50"
                }`}
            >
                <img
                src={item.src}
                alt={item.alt}
                className="w-16 h-16 object-contain rounded-full"
                />
            </div>
            ))}
        </div>

        {/* Right arrow */}
        <button
            className="absolute right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={handleNext}
        >
            &#8250;
        </button>
        </div>
    );
};

export default Carousel;
