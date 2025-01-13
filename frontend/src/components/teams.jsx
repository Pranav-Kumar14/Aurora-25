import { useState } from "react";
import axios from "axios";

const Teams = ({ onClose }) => {
  const [teamData, setTeamData] = useState({
    teamname: "",
    email: "",
    visibility: "private",
    description: "",
  });
  const [message, setMessage] = useState("");
  const url = "http://localhost:8000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/team/create`, teamData);
      if (response.data.success) {
        setMessage("Team created successfully!");
        setTeamData({
          teamname: "",
          email: "",
          visibility: "private",
          description: "",
        });
      } else {
        setMessage(response.data.message);
      }
    } catch (err) {
      setMessage("An error occurred while creating the team.");
    }
  };

  const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]";
  const containerStyle = "w-full p-6 bg-[#451A7A] rounded-lg shadow-lg max-w-md";

  return (
    <div className="w-full h-full flex items-center justify-center p-8 text-white">
      <div className={containerStyle}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Create a Team</h2>
          <button onClick={onClose} className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700">X</button>
        </div>
        {message && <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">{message}</div>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-lg mb-2">Team Name</label>
            <input
              type="text"
              name="teamname"
              value={teamData.teamname}
              onChange={handleChange}
              className={`${inputStyle} bg-[#6d8dd2] text-white`}
              placeholder="Enter team name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={teamData.email}
              onChange={handleChange}
              className={`${inputStyle} bg-[#010A1E] text-white`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Visibility</label>
            <select
              name="visibility"
              value={teamData.visibility}
              onChange={handleChange}
              className={`${inputStyle} bg-[#010A1E] text-white`}
            >
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg mb-2">Description</label>
            <textarea
              name="description"
              value={teamData.description}
              onChange={handleChange}
              className={`${inputStyle} bg-[#010A1E] text-white`}
              placeholder="Enter team description"
              rows="4"
            />
          </div>
          <button type="submit" className="w-full bg-[#6932E2] py-2 rounded-lg hover:bg-[#361c6e]">
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teams;
