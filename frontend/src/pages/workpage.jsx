import React from "react";

const workpage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-blue-700">
        <div className="text-2xl font-bold">🌐 Home</div>
        <nav className="flex gap-8">
          <a href="#" className="hover:text-blue-400">Speaker</a>
          <a href="#" className="hover:text-blue-400">Timeline</a>
          <a href="#" className="hover:text-blue-400">Sponsors</a>
          <a
            href="#"
            className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Hackathon
          </a>
          <a
            href="#"
            className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Workshop
          </a>
        </nav>
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
          <i className="fa fa-user"></i>
        </div>
      </header>

      {/* Title */}
      <div className="text-center my-10">
        <h1
          className="text-5xl font-bold text-yellow-400 uppercase"
          style={{
            textShadow: "0px 4px 20px rgba(209, 249, 10, 0.69)",
            fontFamily: "Press Start 2P"
          }}
        >
          Workshops
        </h1>
      </div>

      {/* Filter */}
      <div className="text-right px-10 mb-6">
        <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">
          Filter
        </button>
      </div>

      {/* Workshop Grid */}
      <div className="grid grid-cols-3 gap-8 px-10">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div
                key={index}
                className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105"
            >
              
              <h2 className="text-xl font-semibold text-center mb-2">
                Neural Networks
              </h2>
              <p className="text-center text-sm mb-4">
                3th January, 2025
                <br />
                4:30 - 5:30 PM
              </p>
              <div className="flex justify-around">
                <button className="bg-green-500 text-sm px-4 py-2 rounded-lg hover:bg-green-600">
                  Register Now
                </button>
                <button className="bg-blue-500 text-sm px-4 py-2 rounded-lg hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default workpage;
