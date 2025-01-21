import React from 'react';
import { Link } from 'react-router-dom';
import speakerImage from "../images/arpan.jpeg";

const KeynoteSpeakerCard = () => {
  return (
    <div
      className="relative rounded-xl shadow-md p-4 w-lg max-w-lg mx-auto text-white bg-transparent border-2 border-blue-500 z-10" // 
      style={{
        fontFamily: 'monospace',
        boxShadow: '0 0 15px rgba(0, 0, 255, 0.7)', // Blue glow effect
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={speakerImage} 
          alt="Keynote Speaker"
          className="w-60 h-60 rounded-full border-4 border-white mb-6"
        />
        <h1
          className="text-center text-4xl font-bold mb-6"
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            textShadow: '0 0 8px rgba(255, 255, 255, 1)',
          }}
        >
          {`{Arpan Garg}`}
        </h1>
      </div>
      {/* Button */}
      <div className="flex justify-center pb-4 text-center mt-6">
        <Link
          to="/speaker"
          className="inline-block text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow: '0 0 15px rgba(128, 0, 255, 1)', // Button shadow
          }}
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default KeynoteSpeakerCard;
