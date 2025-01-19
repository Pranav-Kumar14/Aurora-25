import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BaseUrl from "../BaseUrl";
import { getProfile, updateProfile } from "../services/auth";
import Calendar from "../images/calendar.png";
import Clock from "../images/clock.png";
import Arpan from "../images/Arpan.jpeg";
import Location from "../images/Location.png";

function Speaker() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const speakerId = 1; // Specific speaker ID for registration

  // Fetch user profile to update registered state
  useEffect(() => {
    if (user?.id) {
      const fetchProfile = async () => {
        try {
          const token = sessionStorage.getItem('token')
          const profile = await updateProfile(user.email);
          console.log(profile)
          setIsRegistered(profile.data.user.speaker);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleRegister = () => {
    if (!user || !user.id) {
      toast.error("Please login to register.", { position: "top-center" });
      navigate("/login");
      return;
    }

    if (isRegistered) {
      toast.error("You are already registered for this speaker.", {
        position: "top-center",
      });
      return;
    }
    console.log(user.id)
    const payload = {
      userId: user.id
    };

    
    
    toast
      .promise(
        fetch(`${BaseUrl}/user/updateSpeakers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        }),
        {
          loading: "Submitting your registration...",
          success: "Successfully registered for the talk!",
          error: "Failed to register. Please try again.",
        },
        { position: "top-center" }
      )
      .then(() => {
        setIsRegistered(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0d39] to-[#201867] px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold uppercase text-white font-press-start">
            MEET THE SPEAKER
          </h1>
        </div>
        <p className="text-blue-500 text-3xl max-w-2xl mx-auto font-press-start">
          ARPAN GARG
        </p>
      </div>

      {/* Speaker Details */}
      <div className="group bg-transparent backdrop-blur-sm rounded-[30px] p-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white">
            <img src={Arpan} alt="Arpan Garg" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-white text-black rounded-xl max-w-3xl mx-auto p-6 text-xl shadow-lg">
          <p className="text-md text-heading font-bold text-center">
            Arpan Garg, the Co-founder & CTO of Exa Protocol, a two-time winner of the
            Smart India Hackathon (SIH), and former Product Head at Coding Ninjas. He’s here to
            share his inspiring journey of building Commudle, a startup that's part of the Google for
            Startups Accelerator program!
          </p>
        </div>

        {/* Topic Section */}
        <div className="mt-6 bg-blue-500 text-white py-3 max-w-3xl mx-auto px-4 text-center rounded-lg shadow-md">
          <p className="font-heading text-base sm:text-lg">
            AURORA'25 Tech Talk – Product Development & Innovation!
          </p>
        </div>

        {/* Date and Time */}
        <div className="mt-6 text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8">
              <img src={Calendar} alt="Date Icon" className="w-full h-full object-contain" />
            </div>
            <p className="text-xl text-white">25th January, 2025</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8">
              <img src={Clock} alt="Time Icon" className="w-full h-full object-contain" />
            </div>
            <p className="text-xl text-white">5:30PM Onwards</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8">
              <img src={Location} alt="Location Icon" className="w-full h-full object-contain" />
            </div>
            <p className="text-xl text-white">Library Auditorium, MIT</p>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleRegister}
            className={`px-6 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-800 transition ${
              isRegistered ? "bg-green-500 cursor-not-allowed" : ""
            }`}
          >
            {isRegistered ? "Registered" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Speaker;