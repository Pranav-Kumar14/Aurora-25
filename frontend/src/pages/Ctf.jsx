import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CtfHero from "../components/ctfhome";
import CtfRules from "../components/CtfRules";
import BaseUrl from "../BaseUrl";
import toast from "react-hot-toast";
import ctfInfo from "../images/info.png";
import ctfBackground from "../images/cttbg.png";

const CtfPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleRegisterCtf = () => {
    if (!user || !user.id) {
      toast.error("Please log in to register for the CTF!", { position: "top-center" });
      navigate("/login");
      return;
    }

    const payload = { userId: user.id };

    toast.promise(
      fetch(`${BaseUrl}/user/ctf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed.");
        }
        return response.json();
      }),
      {
        loading: "Registering for the CTF...",
        success: "Registered successfully for the CTF!",
        error: "Failed to register for the CTF. Please try again.",
      }
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 font-press-start bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${ctfBackground})` }}
    >
      <CtfHero />
      <div className="text-center">
        <img className="max-w-xs mx-auto" src={ctfInfo} alt="CTF Info" />
      </div>
      <div className="mt-8">
        <button
          onClick={handleRegisterCtf}
          className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded-full hover:bg-green-400 transition-all"
        >
          Register for CTF
        </button>
      </div>
      <CtfRules />
    </div>
  );
};

export default CtfPage;
