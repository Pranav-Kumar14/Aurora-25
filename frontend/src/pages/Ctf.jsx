import React, { useState, useEffect, useRef } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CtfHero from "../components/ctfhome";
import CtfRules from "../components/CtfRules";
import BaseUrl from "../BaseUrl";
import toast from "react-hot-toast";
import ctfInfo from "../images/info.png";
import ctfBackground from "../images/cttbg.png";
import { updateProfile } from "../services/auth";
import leadercolor from "../images/leadercolor.png";

const TARGET_TEXT_REGISTER = "Register for CTF";
const TARGET_TEXT_UNREGISTER = "Unregister from CTF";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const CtfPage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [buttonText, setButtonText] = useState(TARGET_TEXT_REGISTER);
  const intervalRef = useRef(null);

  

  useEffect(() => {
    
    const checkRegistration = async () => {
      if (user?.id) {
        try {
          const token = sessionStorage.getItem("token");
          const response = await updateProfile(user.email);
          const data = response.data;
          setIsRegistered(data.user.ctf);
          setButtonText(data.isRegistered ? TARGET_TEXT_UNREGISTER : TARGET_TEXT_REGISTER);
        } catch (error) {
          console.error("Error checking CTF registration:", error);
          setIsRegistered(false);
        }
      }
    };

    checkRegistration();
  }, [user]);

  const scrambleText = (targetText) => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) return char;
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setButtonText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) stopScramble(targetText);
    }, SHUFFLE_TIME);
  };

  const stopScramble = (finalText) => {
    clearInterval(intervalRef.current || undefined);
    setButtonText(finalText);
  };

  const handleRegistrationToggle = () => {
    if (!user || !user.id) {
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
          if (!response.ok) {
            throw new Error(`${isRegistered ? "Unregistration" : "Registration"} failed.`);
          }
          return response.json();
        })
        .then((data) => {
          const newState = !isRegistered;
          setIsRegistered(newState);
          setUser((prev) => ({ ...prev, ctfRegistered: newState }));
          setButtonText(newState ? TARGET_TEXT_UNREGISTER : TARGET_TEXT_REGISTER);
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
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-press-start bg-cover bg-top bg-no-repeat relative"
      style={{
        backgroundImage: `url(${ctfBackground})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="mb-8 md:mb-12">
          <CtfHero />
        </div>

        <div className="text-center mb-10 md:mb-16 mt-12">
          <img
            className="w-full lg:max-w-lg max-w-sm mx-auto rounded-lg shadow-2xl"
            src={ctfInfo}
            alt="CTF Info"
          />
        </div>

        <div className="text-center mb-10 md:mb-16">
        <div className="flex justify-center mt-8">
          <button
            onClick={handleRegistrationToggle}
            className={`px-6 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-800 transition ${
              isRegistered ? "bg-green-500 cursor-not-allowed" : ""
            }`}
          >
            {isRegistered ? "Registered" : "Register"}
          </button>
        </div>

        </div>
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl">
          <CtfRules />
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-8 pb-10">
          <img className="max-w-[90%] sm:max-w-md md:max-w-4xl" src={leadercolor} alt="Prize" />
        </div>
      </div>
    </div>
  );
};

export default CtfPage;
