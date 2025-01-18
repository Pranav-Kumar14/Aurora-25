import React from 'react';
import { Link } from 'react-router-dom';
import speakerImage from "../images/image.png";


const KeynoteSpeakerCard = () => {
  return (
    <div
      className="relative rounded-xl shadow-md p-6 sm:p-8 w-xl max-w-2xl mx-auto text-white border-2 border-blue-500"
      style={{
        boxShadow: '0 0 15px rgba(0, 0, 255, 0.5)',
        fontFamily: 'monospace',
      }}
    >
      <h2
        className="text-center text-2xl font-bold mb-6"
        style={{
          fontSize: '1.5rem',
          color: '#fff',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
        }}
      >
        {`{Keynote Speaker}`}
      </h2>
      <div className="flex flex-row items-center space-x-4">
        {/* Speaker Image */}
        <img
          src= {speakerImage} // Replace with the speaker's image URL
          alt="Keynote Speaker"
          className="w-60 h-60 rounded-md shadow-lg"
        />
        {/* Speaker Details */}
        <p
          className="text-sm leading-relaxed"
          style={{
            fontSize: '0.9rem',
            lineHeight: '1.5',
            color: '#D8D8D8',
            wordWrap: 'break-word',
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
          Ad Minim Veniam, Quis Nostrud Exercitation
        </p>
      </div>
      {/* Button */}
      <div className="flex justify-end text-center mt-6">
        <Link
          to="/speaker"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-2 shadow-md"
          style={{
            boxShadow: '0 0 10px rgba(128, 0, 255, 0.8)',
          }}
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default KeynoteSpeakerCard;
