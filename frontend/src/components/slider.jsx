import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Partners from "../constants/partners";

const InfiniteCarousel = () => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const visibleCount = 5; // Number of items to show at a time

    const startAnimation = () => {
        controls.start({
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15, // Adjust speed by changing duration
                    ease: "linear",
                },
            },
        });
    };

    const stopAnimation = () => {
        controls.stop();
    };

    return (
        <div
            className="relative flex items-center justify-center w-full h-48 px-6 overflow-hidden"
            onMouseEnter={() => {
                setIsHovered(true);
                stopAnimation();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                startAnimation();
            }}
        >
            <motion.div
                className="flex space-x-6"
                animate={controls}
                initial={{ x: 0 }}
            >
                {/* Render items twice to create a seamless loop */}
                {[...Partners, ...Partners].map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="w-32 h-32 flex-shrink-0 rounded-lg bg-white shadow-md flex items-center justify-center"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteCarousel;
