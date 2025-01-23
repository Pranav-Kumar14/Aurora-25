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
    <div className="flex justify-center items-center text-white font-press-start space-x-4 md:space-x-8 mb-4 mt-2">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
      ].map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="glow-circle w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center">
            <span className="text-lg sm:text-2xl md:text-4xl">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm md:text-base mt-2">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
