import React from 'react';

const KeynoteSpeakerCard = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 sm:p-8 rounded-2xl shadow-lg max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-white mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4">
        {`{Keynote Speaker}`}
      </h2>
      <div className="flex flex-row sm:items-center sm:space-x-4">
        {/* Speaker Image */}
        <img
          src="https://via.placeholder.com/100" // Replace with the speaker's image URL
          alt="Keynote Speaker"
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto sm:mx-0 rounded-lg shadow-md mb-4 sm:mb-0"
        />
        {/* Speaker Details */}
        <div className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation.
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="text-center mt-6">
        <link
        to='/speaker'
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium shadow-md">
          Know More
        </link>
      </div>
    </div>
  );
};

export default KeynoteSpeakerCard;
