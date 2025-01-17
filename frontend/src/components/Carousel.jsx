import React, { useState } from "react";
import workshp from "../constants/ws";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 5; // Number of items to show at a time

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? workshp.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % workshp.length
        );
    };

    const getVisibleItems = () => {
        return workshp.slice(currentIndex, currentIndex + visibleCount).concat(
            currentIndex + visibleCount > workshp.length
                ? workshp.slice(0, (currentIndex + visibleCount) % workshp.length)
                : []
        );
    };

    return (
        <div className="relative flex items-center justify-center w-full h-48">
            {/* Left arrow */}
            <button
                className="relative mx-6 px-6 left-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                onClick={handlePrev}
            >
                &#8249;
            </button>

            {/* Carousel items */}
            <div className="flex items-center space-x-6">
                {getVisibleItems().map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                            index === Math.floor(visibleCount / 2)
                                ? "scale-110 bg-white shadow-lg"
                                : "scale-90 opacity-50"
                        }`}>

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
                className="relative mx-6 px-6 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                onClick={handleNext}
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
