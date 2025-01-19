import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BaseUrl from "../BaseUrl";

function Speaker() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedSpeakers, setSelectedSpeakers] = useState([]); // Changed to an array
  const [submitted, setSubmitted] = useState(false);

  const handleSelectSpeaker = (speaker) => {
    if (!user || !user.id) {
      toast.error("Please Login, To Access the Contents", { position: "top-center" });
      navigate("/login");
      return;
    }

    // Check if the speaker is already in the array
    const alreadySelected = selectedSpeakers.find(
      (s) => s.id === speaker.id
    );
    if (alreadySelected) {
      toast.error(`"${speaker.name}" is already selected!`, {
        position: "top-center",
      });
      return;
    }

    // Add the speaker to the array
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
      selectedSpeaker: selectedSpeakers, // Send the array
    };
    console.log("Submitting payload:", payload);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d4b] via-[#020428] to-[#020322] flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white mb-8 sm:mb-10">
        Meet The Speaker
      </h1>
      <div className="bg-gradient-to-b bg-[#d9d9d9]/5 rounded-[30px] sm:rounded-[60px] border border-white shadow-lg w-full max-w-2xl sm:max-w-4xl p-6 sm:p-8 flex flex-col sm:flex-row items-center">
        {/* Speaker Image */}
        <div className="flex-none w-full sm:w-1/3 flex justify-center items-center mb-6 sm:mb-0">
          <img
            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121212/image_yvaffc.png"
            alt="Dale Vaz"
            className="w-40 h-40 sm:w-[240px] sm:h-[240px] lg:w-[322px] lg:h-[341px] rounded-full"
          />
        </div>
        {/* Speaker Details */}
        <div className="flex-1 sm:pl-8">
          <h2 className="text-[#9d31a1] text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left mb-4 sm:mb-5">
            Dale Vaz
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2 mb-4 text-center sm:text-left">
            Dale Vaz, former Chief Technology Officer at Swiggy, led engineering
            and data science efforts to...
          </p>
          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            onClick={() =>
              handleSelectSpeaker(1)
            }
          >
            Select Speaker
          </button>
        </div>
      </div>

      {/* Submit Button */}
      {
        selectedSpeakers.length > 0 && !submitted && (
          <div
            className="sticky bottom-0 left-0 w-full bg-[#007bff] text-white py-4 text-center cursor-pointer"
            onClick={handleSubmit}
            navigate="/login"
          >
            Submit
          </div>
        )
      }
    </div >
  );
}

export default Speaker;
