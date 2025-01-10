import React from "react";
import icon from "../images/frame.png"

const workpage = () => {
  return (
    <div className="bg-gradient-to-b from-[#040D4C] via-[#020528] to-[#020323] min-h-screen pt-6 text-white">
      {/* Title */}
      <div className="text-center my-10 pt-2">
        <h1
          className="text-5xl font-bold text-[#D9D9D9]-400 uppercase"
          style={{
            textShadow: "0px 4px 20px rgba(209, 249, 10, 0.69)",
            fontFamily: "Press Start 2P"
          }}
        >
          Workshops
        </h1>
      </div>

      {/* Filter */}
      <div className="text-right px-10 mb-6"
      style={{
        fontFamily: "Chakra Petch"
      }}
      >
        <button className="bg-[#7DC5EE]-500 px-6 py-2 rounded-full hover:bg-blue-600">
          Filter
        </button>
      </div>

      {/* Workshop Grid */}
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 px-10">
  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Neural Networks</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>

  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Data Science</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>


  <div className="rounded-[36px] border border-white bg-white/10 shadow-[2px_2px_10px_rgba(255,227,80,0.4)] backdrop-blur-[22.5px] p-5 transform transition hover:scale-105">
    <div className="flex justify-center mb-4">
      <img src={icon} alt="Workshop Icon" className="w-16 h-16" />
    </div>
    <h2 className="text-xl font-semibold text-center mb-2">Artificial Intelligence</h2>
    <div className="rounded-[8px] border-[1px] border-x-2 border-y-0  border-[#F3F3F3] ">
    <p className="text-center text-sm mb-4">
      3rd January, 2025
      <br />
      4:30 - 5:30 PM
    </p>
    </div>
    <div className="flex justify-around">
      <button className="bg-green-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-green-400 hover:shadow-[0_0_10px_4px_rgba(34,213,94,0.8)] transition duration-300">
        Register Now
      </button>
      <button className="bg-blue-500 text-[#1B1B1B] text-sm px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default workpage;
