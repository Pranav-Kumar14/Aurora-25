import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

const HackathonCard = () => {
    return (
        <div className="grid w-full place-content-center px-4 py-8 text-slate-900">
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
            className="relative w-[20rem] h-[14rem] sm:w-[24rem] sm:h-[18rem] md:w-[28rem] md:h-[20rem] lg:w-[32rem] lg:h-[24rem] rounded-xl bg-gradient-to-rb from-[#0f0d39] to-[#201867]"
        >
            <div
                style={{
                    transform: "translateZ(50px)", // Add depth for inner content
                }}
                className="absolute inset-[1rem] sm:inset-[1.5rem] md:inset-[2rem] grid place-content-center rounded-xl bg-white/10"
            >
                <a href="/hackathon">
                    <p
                        style={{
                            transform: "translateZ(25px)",
                        }}
                        className="text-center text-lg sm:text-xl md:text-2xl font-heading text-white"
                    >
                        <p className="text-3xl mb-10 font-heading">
                        DEVSPRINT
                        </p>
                        
                        <u><p className="text-xl font-body">
                        Know More
                        </p></u>
                    </p>
                </a>
            </div>
        </motion.div>
    );
};

export default HackathonCard;
