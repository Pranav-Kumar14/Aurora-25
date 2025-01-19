import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BaseUrl from "../BaseUrl";
import { UserPlus, Check, Star } from "lucide-react";
import { speakers } from "../constants/speakers";
import { getProfile } from "../services/auth";

function Speaker() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [registeredSpeakers, setRegisteredSpeakers] = useState([]);

  // Fetch user profile to update registered speakers
  useEffect(() => {
    if (user?.id) {
      const fetchProfile = async () => {
        try {
          const token = sessionStorage.getItem("token");
          const profile = await getProfile(token); // Fetch profile data
          setRegisteredSpeakers(profile?.data?.registeredSpeakers || []);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleSelectSpeaker = (speaker) => {
    if (!user || !user.id) {
      toast.error("Please Login to Access the Contents", { position: "top-center" });
      navigate("/login");
      return;
    }

    const alreadySelected = selectedSpeakers.includes(speaker.id);
    if (alreadySelected) {
      setSelectedSpeakers((prevSpeakers) =>
        prevSpeakers.filter((id) => id !== speaker.id)
      );
      toast.success(`Unselected "${speaker.name}"!`, { position: "top-center" });
      return;
    }

    setSelectedSpeakers((prevSpeakers) => [...prevSpeakers, speaker.id]);
    toast.success(`Selected "${speaker.name}"!`, { position: "top-center" });
  };

  const handleSubmit = () => {
    if (!user || !user.id) {
      toast.error("Please Login to Access the Contents", { position: "top-center" });
      navigate("/login");
      return;
    }

    if (selectedSpeakers.length === 0) {
      toast.error("Please select at least one speaker before submitting.", {
        position: "top-center",
      });
      return;
    }

    const payload = {
      userId: user.id,
      selectedSpeaker: selectedSpeakers,
    };

    toast.promise(
      fetch(`${BaseUrl}/user/updateSpeakers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(response);
          return response.json();
        }),
      {
        loading: "Submitting your speaker selection...",
        success: "Speakers successfully updated!",
        error: "Failed to update speakers. Please try again.",
      },
      { position: "top-center" }
    ).then((data) => {
      setRegisteredSpeakers(data.updatedSpeakers);
    }).catch((error) => console.error("Error:", error));
  };

  const isSelected = (speakerId) =>
    selectedSpeakers.includes(speakerId) || registeredSpeakers.includes(speakerId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d4b] via-[#020428] to-[#020322] px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Star className="text-[#9d31a1] w-8 h-8 mr-2" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white">
            Featured Speakers
          </h1>
          <Star className="text-[#9d31a1] w-8 h-8 ml-2" />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Connect with industry leaders and gain invaluable insights from their experiences.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="group bg-gradient-to-b from-[#d9d9d9]/10 to-[#d9d9d9]/5 backdrop-blur-sm 
                   rounded-[30px] border border-white/10 shadow-2xl p-8 
                   transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative mb-6">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="relative w-48 h-48 mx-auto rounded-full object-cover 
                       border-4 border-white/10 shadow-xl"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[#9d31a1] text-3xl font-bold mb-2">{speaker.name}</h2>
              <h3 className="text-white/80 text-lg font-medium mb-1">{speaker.role}</h3>
              <button
                onClick={() => handleSelectSpeaker(speaker)}
                disabled={isSelected(speaker.id)}
                className={`w-full px-6 py-3 rounded-full text-sm font-medium ${isSelected(speaker.id)
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-[#9d31a1] text-white hover:bg-[#bf5ac3]"
                  }`}
              >
                {isSelected(speaker.id) ? "Registered" : "Register"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="px-8 py-4 bg-[#9d31a1] text-white rounded-full text-lg font-medium 
                   hover:bg-[#bf5ac3] transition-all duration-300"
        >
          Submit Selection
        </button>
      </div>
    </div>
  );

}

export default Speaker;
