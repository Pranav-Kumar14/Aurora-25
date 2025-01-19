import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BaseUrl from "../BaseUrl";
import { UserPlus, Check, Star } from "lucide-react";
import { speakers } from "../constants/speakers";

function Speaker() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectSpeaker = (speaker) => {
    if (!user || !user.id) {
      toast.error("Please Login, To Access the Contents", { position: "top-center" });
      navigate("/login");
      return;
    }

    const alreadySelected = selectedSpeakers.find((s) => s.id === speaker.id);
    if (alreadySelected) {
      setSelectedSpeakers((prevSpeakers) =>
        prevSpeakers.filter((s) => s.id !== speaker.id)
      );
      toast.success(`Unselected "${speaker.name}"!`, { position: "top-center" });
      return;
    }

    setSelectedSpeakers((prevSpeakers) => [...prevSpeakers, speaker]);
    toast.success(`Selected "${speaker.name}"!`, { position: "top-center" });
  };

  const handleSubmit = () => {
    if (!user || !user.id) {
      toast.error("Please Login, To Access the Contents", { position: "top-center" });
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
          return response.json();
        }),
      {
        loading: "Submitting your speaker selection...",
        success: "Speakers successfully updated!",
        error: "Failed to update speakers. Please try again.",
      },
      { position: "top-center" }
    )
      .then((data) => {
        console.log("Updated speaker data:", data);
        setSubmitted(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  const isSelected = (speakerId) =>
    selectedSpeakers.some((s) => s.id === speakerId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d4b] via-[#020428] to-[#020322] px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Star className="text-[#9d31a1] w-8 h-8 mr-2" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white 
                       animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Featured Speakers
          </h1>
          <Star className="text-[#9d31a1] w-8 h-8 ml-2" />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Connect with industry leaders and gain invaluable insights from their experiences
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="group bg-gradient-to-b from-[#d9d9d9]/10 to-[#d9d9d9]/5 backdrop-blur-sm 
                     rounded-[30px] border border-white/10 shadow-2xl p-8 
                     transform hover:scale-[1.02] transition-all duration-300
                     hover:shadow-[0_0_30px_rgba(157,49,161,0.3)]"
          >
            {/* Speaker Image with Glow Effect */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#9d31a1]/20 rounded-full blur-2xl 
                           group-hover:bg-[#9d31a1]/30 transition-all duration-300"></div>
              <img
                src={speaker.image}
                alt={speaker.name}
                className="relative w-48 h-48 mx-auto rounded-full object-cover 
                         border-4 border-white/10 shadow-xl
                         group-hover:border-[#9d31a1]/30 transition-all duration-300"
              />
            </div>

            {/* Speaker Details */}
            <div className="text-center">
              <h2 className="text-[#9d31a1] text-3xl font-bold mb-2 
                           bg-clip-text text-transparent bg-gradient-to-r from-[#9d31a1] to-[#bf5ac3]">
                {speaker.name}
              </h2>
              <h3 className="text-white/80 text-lg font-medium mb-1">
                {speaker.role}
              </h3>
              <h4 className="text-[#9d31a1] text-sm font-medium mb-4">
                {speaker.company}
              </h4>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 hover:line-clamp-none 
                         transition-all duration-300">
                {speaker.details}
              </p>

              {/* Selection Button */}
              <button
                onClick={() => handleSelectSpeaker(speaker)}
                disabled={isSelected(speaker.id)}
                className={`group relative inline-flex items-center justify-center gap-2 
                         w-full px-6 py-3 rounded-full text-sm font-medium
                         transition-all duration-300 transform hover:-translate-y-0.5
                         ${isSelected(speaker.id)
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-[#9d31a1] text-white hover:bg-[#bf5ac3]"
                  }`}
              >
                {isSelected(speaker.id) ? (
                  <>
                    <Check size={18} />
                    Selected
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    Select Speaker
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      {selectedSpeakers.length > 0 && !submitted && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#020322] to-transparent 
                     py-6 px-4">
          <div className="max-w-7xl mx-auto flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#9d31a1] to-[#bf5ac3] text-white
                     px-8 py-4 rounded-full font-medium text-lg
                     transform transition-all duration-300 hover:scale-105
                     hover:shadow-[0_0_30px_rgba(157,49,161,0.5)]
                     flex items-center gap-2"
            >
              <Check size={20} />
              Confirm Selection ({selectedSpeakers.length} Speaker{selectedSpeakers.length > 1 ? 's' : ''})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Speaker;