import { useState } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";

const Teams = ({ onClose }) => {
    const [teamData, setTeamData] = useState({
        teamname: "",
        email: "",
        visibility: "private",
    });
    const [message, setMessage] = useState("");
    const [createdTeam, setCreatedTeam] = useState(null);
    // const url = "https://team-test.onrender.com";
    const url = BaseUrl;

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
                    email: "",
                    visibility: "private",
                });
            } else {
                setMessage(response.data.message);
            }
        } catch (err) {
            setMessage("An error occurred while creating the team.");
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-black p-8">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-black">Create a Team</h2>
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
                            className="w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
                            placeholder="Enter team name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg mb-2">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={teamData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg mb-2">Visibility</label>
                        <select
                            name="visibility"
                            value={teamData.visibility}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 bg-[#010A1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
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
            </div>
        </div>
    );
};

export default Teams;