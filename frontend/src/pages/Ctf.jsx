import React, { useState, useEffect } from "react";
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
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Check registration status when component mounts
    if (user?.id) {
      fetch(`${BaseUrl}/user/ctf/status/${user.id}`)
        .then(response => response.json())
        .then(data => setIsRegistered(data.isRegistered))
        .catch(() => setIsRegistered(false));
    }
  }, [user]);

  const handleRegistrationToggle = () => {
    if (!user || !user.id) {
      toast.error("Please log in to register for the CTF!", { position: "top-center" });
      navigate("/login");
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
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`${isRegistered ? "Unregistration" : "Registration"} failed.`);
        }
        setIsRegistered(!isRegistered);
        return response.json();
      }),
      {
        loading: `${actionText} for the CTF...`,
        success: `${actionText} successfully for the CTF!`,
        error: `Failed to ${actionText.toLowerCase()} for the CTF. Please try again.`,
      }
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-press-start bg-cover bg-top bg-no-repeat relative"
      style={{
        backgroundImage: `url(${ctfBackground})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="mb-12">
          <CtfHero />
        </div>

        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <img
            className="max-w-xs md:max-w-sm mx-auto rounded-lg shadow-2xl"
            src={ctfInfo}
            alt="CTF Info"
          />
        </div>

        <div className="text-center mb-16">
          <button
            onClick={handleRegistrationToggle}
            className={`px-8 py-4 text-lg font-bold text-white rounded-full 
                     transition-all duration-300 transform hover:scale-105
                     shadow-lg animate-pulse hover:animate-none
                     ${isRegistered
                ? 'bg-red-500 hover:bg-red-400 hover:shadow-red-500/50'
                : 'bg-green-500 hover:bg-green-400 hover:shadow-green-500/50'
              }`}
          >
            {isRegistered ? 'Unregister from CTF' : 'Register for CTF'}
          </button>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl">
          <CtfRules />
        </div>
      </div>
    </div>
  );
};

export default CtfPage;