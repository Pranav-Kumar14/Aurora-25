import React from "react";

const MitPost = () => {
  return (
    <div className="flex items-center justify-center bg-transparent mt-6">
      <div className="w-full lg:max-w-xl sm:max-w-sm shadow-2xl rounded-2xl bg-black/50 p-4 sm:p-3 ml-10 mr-10">
        <div className="flex flex-col items-center text-center p-4">
          <img
            src="https://res.cloudinary.com/diswj8gya/image/upload/v1737747999/Screenshot_2025-01-25_011135_ouihnt.png" // Replace with the actual logo path
            alt="MIT Post Logo"
            className="w-28 h-28 mb-8 sm:mb-8" // Reduced margin-bottom
          />
          <h1 className="text-white text-md md:text-xl lg:text-2xl font-sans tracking-wide">
            The MIT Post joins Aurora 2025 as our Official Media Partner,
            bringing the event to life with exclusive coverage!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MitPost;