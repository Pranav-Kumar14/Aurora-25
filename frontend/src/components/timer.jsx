import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
        return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
        //   seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [totalTime, setTotalTime] = useState(targetDate - new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const getProgress = (value, max) => (1 - value / max) * 100;

    return (
        <div className="flex justify-center space-x-8 py-10  text-white">
        {/* Circular Timer */}
        {[
            { label: "Days", value: timeLeft.days, max: Math.ceil(totalTime / (1000 * 60 * 60 * 24)) },
            { label: "Hours", value: timeLeft.hours, max: 24 },
            { label: "Minutes", value: timeLeft.minutes, max: 60 },
            // { label: "Seconds", value: timeLeft.seconds, max: 60 },
        ].map((time, index) => (
            <div key={index} className="text-center">
            <svg className="w-24 h-24">
                {/* Background Circle */}
                <circle
                cx="50%"
                cy="50%"
                r="38"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="4"
                fill="none"
                />
                {/* Filling Circle */}
                <circle
                cx="50%"
                cy="50%"
                r="38"
                stroke="#00d4ff"
                strokeWidth="4"
                fill="none"
                strokeDasharray="240"
                strokeDashoffset={(getProgress(time.value, time.max) * 240) / 100}
                className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="text-2xl font-bold mt-2">{time.value}</div>
            <div className="text-sm">{time.label}</div>
            </div>
        ))}
        </div>
    );
};

export default Timer;
