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
import Linkedin from "../images/lkdin.png";
import Github from "../images/git.png";

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
      toast.error("You are already registered for the talk.", {
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
    <p className="text-pink-500 text-3xl max-w-2xl mx-auto font-press-start">
      ARPAN GARG
    </p>
  </div>

  {/* Speaker Details */}
  <div className="group bg-gradient-to-b from-[#1b1347] to-[#201867] backdrop-blur-md rounded-[30px] p-8 max-w-7xl mx-auto border border-white">
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-16">
      {/* Image Section */}
      <div className="flex flex-col items-center mb-6 lg:mb-0">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg mb-6">
          <img src={Arpan} alt="Arpan Garg" className="w-full h-full object-cover" />
        </div>
        {/* Social Buttons */}
        <div className="flex gap-6">
          <div className="w-10 h-10">
            <img src= {Linkedin} alt="LinkedIn" className="w-full h-full object-contain" />
          </div>
          <div className="w-10 h-10">
            <img src= {Github} alt="GitHub" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Description and Talk Name */}
      <div className="flex flex-col items-center lg:max-w-2xl lg:items-start space-y-8 lg:space-y-6 lg:w-2/3 lg:ml-12">
        <div className="bg-[#ffffff11] text-white rounded-xl p-6 text-lg lg:text-base shadow-lg">
          <p className="text-md text-heading font-bold text-center lg:text-left">
            Arpan Garg, the Co-founder & CTO of Exa Protocol, a two-time winner of the
            Smart India Hackathon (SIH), and former Product Head at Coding Ninjas. He’s here to
            share his inspiring journey of building Commudle, a startup that's part of the Google for
            Startups Accelerator program!
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#6f42c1] to-[#c084fc] text-white py-3 px-4 text-center lg:text-left rounded-lg shadow-md">
          <p className="font-heading text-base sm:text-lg lg:text-sm">
            AURORA'25 Tech Talk – Product Development & Innovation!
          </p>
        </div>
      </div>
    </div>

    {/* Date, Time, Venue */}
    <div className="mt-6 text-center space-y-4 text-white">
      <div className="flex justify-center items-center gap-2">
        <div className="w-8 h-8">
          <img src={Calendar} alt="Date Icon" className="w-full h-full object-contain" />
        </div>
        <p className="text-lg">25th January, 2025</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-8 h-8">
          <img src={Clock} alt="Time Icon" className="w-full h-full object-contain" />
        </div>
        <p className="text-lg">5:30PM Onwards</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-8 h-8">
          <img src={Location} alt="Location Icon" className="w-full h-full object-contain" />
        </div>
        <p className="text-lg">Library Auditorium, MIT</p>
      </div>
    </div>

    {/* Register Button */}
    <div className="flex justify-center mt-8">
      <button
        onClick={handleRegister}
        className={`px-6 py-3 rounded-lg text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-purple-600 hover:to-pink-500 transition ${
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