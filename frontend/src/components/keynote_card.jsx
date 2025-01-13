import React from 'react';

const KeynoteSpeakerCard = () => {
    return (
        <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-2xl shadow-lg max-w-md mx-auto text-white mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">{`{Keynote Speaker}`}</h2>
        <div className="flex items-center space-x-4">
            {/* Speaker Image */}
            <img
            src="https://via.placeholder.com/100" // Replace with the speaker's image URL
            alt="Keynote Speaker"
            className="w-24 h-24 rounded-lg shadow-md"
            />
            {/* Speaker Details */}
            <div className="text-sm">
            <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
                Ad Minim Veniam, Quis Nostrud Exercitation.
            </p>
            </div>
        </div>
        {/* Button */}
        <div className="text-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
            Know More
            </button>
        </div>
        </div>
    );
};

export default KeynoteSpeakerCard;
