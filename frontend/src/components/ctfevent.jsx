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
    </div>
  );
};

export default Ctfevent;
