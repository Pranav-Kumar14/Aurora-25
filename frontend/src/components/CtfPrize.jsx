import React from 'react';
import prize from "../images/prize.png";

const CtfPrize = () => {
  return (
    <div className="bg-gradient-to-t from-customPurple to-customBlue text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-6 border-b-2 border-red-500 w-fit mx-auto pb-2">
        Prizes
      </h2>
      <div className="flex justify-center items-center space-x-8">
        {/* Podium Graphic */}
        <div className="relative w-40 h-40">
          <div className="absolute flex justify-between items-end w-full h-full">
            <div className="w-1/3 h-1/2 bg-white text-black text-center p-2">2</div>
            <div className="w-1/3 h-3/4 bg-white text-black text-center p-2">1</div>
            <div className="w-1/3 h-1/3 bg-white text-black text-center p-2">3</div>

          </div>
          <div className="absolute top-0 w-full text-center text-2xl">👑</div>
        </div>

        {/* Prize Text */}
        <div className="space-y-4">
          <p className="flex items-center text-yellow-400  text-3xl">
            
            1st Rs 4000
          </p>
          <p className="flex items-center text-gray-300 text-3xl">
            
            2nd Rs 2000
          </p>
          <p className="flex items-center text-orange-500 text-3xl">
            
            3rd Rs 1000
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtfPrize;
