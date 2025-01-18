import React from "react";
import CtfHero from "../components/ctfhome";
import Ctfevent from "../components/ctfevent";
import CtfRules from "../components/CtfRules";
import CtfPrize from "../components/CtfPrize";
import prize from "../images/prize.png";
import info from "../images/info.png";
import bg from "../images/cttbg.png";
import leadercolor from "../images/leadercolor.png";

const Ctf = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8 pt-0 pb-[250px] font-press-start bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <CtfHero />
        <div className="flex justify-center items-center pb-4">
          <img className="max-w-xs" src={info} alt="Info" />
        </div>
        <div className="flex justify-center">
          <button className="w-[250px] h-[75px] text-[20px] text-center bg-[#9d31a1] rounded-[40px] shadow-[inset_0px_4px_5px_0px_rgba(0,0,0,0.25)] border border-black mt-8">
            Register Now!
          </button>
        </div>
        <CtfRules />
        <div className="flex justify-center items-center mt-8 pb-10">
          <img className="max-w-4xl" src={leadercolor} alt="Prize" />
        </div>
      </div>
    </>
  );
};

export default Ctf;
