import React, { useEffect, useState } from 'react';
import "./Countdown.css";

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2025-01-24T00:00:00');
        const now = new Date();
        const difference = eventDate - now;

        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-white justify-center font-press-start text-[25px] md:text-[40px] flex space-x-8 mb-4">
            <div className="flex flex-col items-center">
                <div className="glow-circle lg:w-[120px] lg:h-[120px] w-[90px] h-[90px]">
                    <span className="font-press-start">{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base mt-2">Days</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="glow-circle lg:w-[120px] lg:h-[120px] w-[90px] h-[90px]">
                    <span className="font-press-start">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base mt-2">Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="glow-circle lg:w-[120px] lg:h-[120px] w-[90px] h-[90px]">
                    <span className="font-press-start">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="text-sm md:text-base mt-2">Minutes</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
