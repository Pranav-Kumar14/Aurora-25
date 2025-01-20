import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CtfHero from "../components/ctfhome";
import CtfRules from "../components/CtfRules";
import BaseUrl from "../BaseUrl";
import toast from "react-hot-toast";
import ctfBackground from "../images/cttbg.png";
import leadercolor from "../images/ctfupdate.png";
import Calendar from "../images/calendar.png";
import Team from "../images/hackteam.png";

const CtfPage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [buttonText, setButtonText] = useState("Register for CTF");
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkRegistration = async () => {
      if (user?.id) {
        try {
          const response = await updateProfile(user.email);
          const data = response.data;
          setIsRegistered(data.user.ctf);
        } catch (error) {
          console.error("Error checking CTF registration:", error);
          setIsRegistered(false);
        }
      }
    };
    checkRegistration();
  }, [user]);

  const handleRegistrationToggle = () => {
    if (!user?.id) {
      toast.error("Please log in to register for the CTF!", { position: "top-center" });
      navigate("/login");
      return;
    }

    if (!user.workshopPaid) {
      toast.error("Please finish payment in Profile to access the contents.", { position: 'top-center' });
      navigate('/profile');
      return;
    }

    const payload = { userId: user.id };
    const method = isRegistered ? "DELETE" : "POST";
    const actionText = isRegistered ? "Unregistering" : "Registering";

    toast.promise(
      fetch(`${BaseUrl}/user/ctf`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) throw new Error(`${actionText} failed.`);
          return response.json();
        })
        .then((data) => {
          const newState = !isRegistered;
          setIsRegistered(newState);
          setUser((prev) => ({ ...prev, ctfRegistered: newState }));
          return data;
        }),
      {
        loading: `${actionText} for the CTF...`,
        success: `${actionText} successfully for the CTF!`,
        error: `Already registered for the CTF`,
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 font-press-start bg-cover bg-top bg-no-repeat relative">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        style={{
          backgroundImage: `url(${ctfBackground})`,
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <CtfHero />
        </div>

        <div className="max-w-4xl mx-auto my-8 p-4 sm:p-6 md:p-10 rounded-2xl bg-transparent text-white shadow-xl space-y-6 sm:space-y-10">
          <h1 className="text-2xl sm:text-3xl font-press-start text-center mb-6">
            Event Details
          </h1>
          
          <div className="flex flex-col items-center gap-6 sm:gap-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-contain bg-center bg-no-repeat"
                   style={{ backgroundImage: `url(${Calendar})` }}
              />
              <h1 className="font-sans text-lg sm:text-xl text-center">
                6:00PM, 29 January 2025 - 11:59PM, 30 January 2025
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-contain bg-center bg-no-repeat"
                   style={{ backgroundImage: `url(${Team})` }}
              />
              <h1 className="font-sans text-lg sm:text-xl text-center">
                Team : 1-2
              </h1>
            </div>
          </div>
        </div>

        <p className="text-white text-center font-mono text-xl sm:text-2xl mb-4">
          To be registered by Team Leader only
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-8">
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={handleRegistrationToggle}
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-800 transition"
            >
              {isRegistered ? "Registered" : "Register"}
            </button>
            <p className="text-white text-center font-mono text-lg sm:text-2xl">
              Workshops + CTF
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGdId6XP6IMGKC_Zo2khfk3Sc6VuaPQPzTMs_aNseeCQVf4g/viewform"
              target="_blank"
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-800 transition text-center"
            >
              Only CTF Registration
            </a>
            <p className="text-white text-center font-mono text-lg sm:text-2xl">
              Only CTF
            </p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <CtfRules />
        </div>

        <div className="flex justify-center items-center mt-6 pb-8">
          <img 
            className="w-full max-w-[90%] sm:max-w-md md:max-w-4xl" 
            src={leadercolor} 
            alt="Prize"
          />
        </div>
      </div>
    </div>
  );
};

export default CtfPage;