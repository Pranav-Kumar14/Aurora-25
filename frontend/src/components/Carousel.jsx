import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Partners from "../constants/partners";
=======
import workshp from "../constants/ws";
>>>>>>> Stashed changes
=======
import workshp from "../constants/ws";
>>>>>>> Stashed changes
=======
import workshp from "../constants/ws";
>>>>>>> Stashed changes
=======
import Workshops from "../constants/workshops";
>>>>>>> 6eeff45f1c436c6e926ce7a8b5a3580f08a1c651

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 5; // Number of items to show at a time

    const handlePrev = () => {
        setCurrentIndex((prev) =>
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        prev === 0 ? Partners.length - 1 : prev - 1
=======
            prev === 0 ? workshp.length - 1 : prev - 1
>>>>>>> Stashed changes
=======
            prev === 0 ? workshp.length - 1 : prev - 1
>>>>>>> Stashed changes
=======
            prev === 0 ? workshp.length - 1 : prev - 1
>>>>>>> Stashed changes
=======
            prev === 0 ? Workshops.length - 1 : prev - 1
>>>>>>> 6eeff45f1c436c6e926ce7a8b5a3580f08a1c651
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        prev === Partners.length - 1 ? 0 : prev + 1
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            (prev + 1) % workshp.length
=======
            (prev + 1) % Workshops.length
>>>>>>> 6eeff45f1c436c6e926ce7a8b5a3580f08a1c651
        );
    };

    const getVisibleItems = () => {
<<<<<<< HEAD
        return workshp.slice(currentIndex, currentIndex + visibleCount).concat(
            currentIndex + visibleCount > workshp.length
                ? workshp.slice(0, (currentIndex + visibleCount) % workshp.length)
                : []
>>>>>>> Stashed changes
=======
        return Workshops.slice(currentIndex, currentIndex + visibleCount).concat(
            currentIndex + visibleCount > Workshops.length
                ? Workshops.slice(0, (currentIndex + visibleCount) % Workshops.length)
                : []
>>>>>>> 6eeff45f1c436c6e926ce7a8b5a3580f08a1c651
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
                className="relative mx-6 px-6 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                onClick={handleNext}
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
