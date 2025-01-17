import React from "react";
import CtfHero from "../components/ctfhome";
import Ctfevent from "../components/ctfevent";
import CtfRules from "../components/CtfRules";
import CtfPrize from "../components/CtfPrize";

const Ctf = () => {
  return (
    <>
    <CtfHero/>
    <div className="bg-gradient-to-b from-customPurple to-customBlue text-white min-h-screen">

      {/* Event Details Section */}
      <Ctfevent/>
     

      {/* Rules Section */}
      <CtfRules />

      <CtfPrize />


    </div>
    </>
  );
};

export default Ctf;
