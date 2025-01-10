import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
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
    <div className="text-white font-press-start text-[40px] flex space-x-4">
      <span className='font-press-start '>{String(timeLeft.days).padStart(2, '0')}</span>:
      <span className='font-press-start '>{String(timeLeft.hours).padStart(2, '0')}</span>:
      <span className='font-press-start '>{String(timeLeft.minutes).padStart(2, '0')}</span>:
      <span className='font-press-start '>{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default CountdownTimer;
