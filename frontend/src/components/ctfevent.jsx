import React from 'react';

const Ctfevent = () => {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center space-y-4 text-lg">
        <div className="flex items-center space-x-2">
          <span className="material-icons">event</span>
          <p>X January 2025</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons">schedule</span>
          <p>Time</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons">place</span>
          <p>Location</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons">group</span>
          <p>Team Size: 2-4</p>
        </div>
      </div>
      <button className="w-[150px] h-[40px] bg-[#9d31a1] rounded-[40px] shadow-[inset_0px_4px_5px_0px_rgba(0,0,0,0.25)] border border-black mt-10">
          Register Now!
        </button>
    </div>
  );
};

export default Ctfevent;
