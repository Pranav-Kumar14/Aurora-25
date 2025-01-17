import React from "react";
import CtfHero from "../components/ctfhome";
import Ctfevent from "../components/ctfevent";
import CtfRules from "../components/CtfRules";
import CtfPrize from "../components/CtfPrize";
import prize from "../images/prize.png";
import info from "../images/info.png";
import bg from "../images/cttbg.png";

const Ctf = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white min-h-screen bg-gradient-to-b from-customPurple to-customBlue bg-opacity-80">
        <CtfHero />
        <div className="flex justify-center items-center pt-10 pb-10">
          <img className="max-w-xs" src={info} alt="Info" />
        </div>
        <div className="flex justify-center">
          <button className="w-[150px] h-[40px] text-center bg-[#9d31a1] rounded-[40px] shadow-[inset_0px_4px_5px_0px_rgba(0,0,0,0.25)] border border-black mt-8">
            Register Now!
          </button>
        </div>
        <CtfRules />
        <div className="flex justify-center items-center mt-8 pb-10">
          <img className="max-w-xl" src={prize} alt="Prize" />
        </div>
      </div>
    </div>
  );
};

export default Ctf;
