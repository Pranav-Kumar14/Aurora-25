import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const HackathonCard = () => {
    return (
        <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
        <TiltCard />
        </div>
    );
    };

const ROTATION_RANGE = 32.5; // Range of rotation in degrees

const TiltCard = () => {
    const ref = useRef(null);

    // Motion values for tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring animations for smooth tilt
    const xSpring = useSpring(x, { stiffness: 200, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 200, damping: 30 });

    // Combine x and y spring values into a transform style
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        // Get the card's position and size
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to the card
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Normalize mouse position and calculate rotation
        const rX = ((mouseY / height) - 0.5) * -ROTATION_RANGE; // Inverted for natural tilt
        const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE;

        // Update motion values
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        // Reset motion values on mouse leave
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            perspective: "1000px", // Add perspective for 3D effect
            transformStyle: "preserve-3d",
            transform,
        }}
        className="relative w-[32rem] h-[24rem] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 shadow-lg"
        >
        <div
            style={{
            transform: "translateZ(50px)", // Add depth for inner content
            }}
            className="absolute inset-[2rem] grid place-content-center rounded-xl bg-white shadow-lg"
        >
            <FiMousePointer
            style={{
                transform: "translateZ(25px)",
            }}
            className="mx-auto text-4xl"
            />
            <p
            style={{
                transform: "translateZ(25px)",
            }}
            className="text-center text-2xl font-bold"
            >
            HOVER ME
            </p>
        </div>
        </motion.div>
    );
};

export default HackathonCard;
