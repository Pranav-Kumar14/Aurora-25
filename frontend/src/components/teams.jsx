import { useState, useEffect } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import HackInfo from "./HackInfo";

const Teams = ({ onClose, email }) => {
  const [teamData, setTeamData] = useState({
    teamname: "",
    email: email || "", // Set email from prop
    visibility: "private",
  });
  const [message, setMessage] = useState("");
  const [createdTeam, setCreatedTeam] = useState(null);
  const url = BaseUrl;
  const [showInfo, setShowInfo] = useState(false);

  // Update email in state if it changes
  useEffect(() => {
    setTeamData((prevData) => ({
      ...prevData,
      email: email,
    }));
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/team/create`, teamData);

      if (response.data.success) {
        setMessage("Team created successfully!");
        setCreatedTeam(response.data.team);
        setTeamData({
          teamname: "",
          email: email, // Reset email from prop
          visibility: "private",
        });
        setTimeout(() => {
          console.log("Reloading page...");
          window.location.reload();
        }, 500);
      } else {
        setMessage(response.data.message);
      }
    } catch (err) {
      setMessage("An error occurred while creating the team.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-black">
      <div className="lg:max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {!showInfo ? (
          <>
            {/* Info Button */}
            <button
              onClick={() => setShowInfo(true)}
              className="top-3 right-12 text-white mb-6 bg-black rounded-full py-2 px-4 flex items-center justify-center gap-2 shadow-md border-2 border-[#451A7A] hover:bg-[#361c6e] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-3a1 1 0 112 0v1a1 1 0 11-2 0V7zm0 4a1 1 0 012 0v3a1 1 0 11-2 0v-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Info</span>
            </button>

            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-xl font-bold text-black">
                Create a Team
              </h2>
              <button
                onClick={onClose}
                className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700"
              >
                X
              </button>
            </div>

            {message && (
              <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-lg mb-2">Team Name</label>
                <input
                  type="text"
                  name="teamname"
                  value={teamData.teamname}
                  onChange={handleChange}
                  required
                  className="text-sm w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
                  placeholder="Enter team name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={teamData.email}
                  readOnly
                  className="text-sm w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg mb-2">Visibility</label>
                <select
                  name="visibility"
                  value={teamData.visibility}
                  onChange={handleChange}
                  className="text-sm w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-black-400 border-4 border-black transition duration-300"
              >
                Create Team
              </button>
            </form>
          </>
        ) : (
          // Information Content Component
          <HackInfo onClose={() => setShowInfo(false)} />
        )}
      </div>
    </div>
  );
};

export default Teams;
