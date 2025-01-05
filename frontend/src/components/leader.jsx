import { useState } from "react";
import axios from "axios";

const LeaderLogin = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [team, setTeam] = useState(null);
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState(""); // For the team description
  const [showPopup, setShowPopup] = useState(false);
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  const url = "http://localhost:6000";
  // const url = "https://team-test.onrender.com"; 
  const handleAddMember = async () => {
    try {
      const response = await axios.post(url + "/team", {
        teamName: team.teamname,
        email: newMemberEmail,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        setShowAddMemberPopup(false);
        setNewMemberEmail("");
        fetchTeamDetails(email);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error adding member. Please try again.");
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setMessage(""); // Reset previous messages

    try {
      const response = await axios.post(url + "/team/check-leader", { email });
      console.log(`${response}`)

      if (response.data.success) {
        if (response.data.isLeader) {
          setMessage(
            `Welcome Leader! You are leading the team: ${response.data.teamName}`
          );
          setIsLeader(true);
          fetchTeamDetails(email);
        } else {
          setMessage("You are not a leader.");
        }
      } else {
        setMessage("Email not registered. Please check your email.");
      }
    } catch (error) {
      setMessage(
        "An error occurred while verifying the email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamDetails = async (email) => {
    try {
      const response = await axios.get(url + "/team/list", {
        params: { email },
      });
      if (response.data.success) {
        const teamData = response.data.teams[0];
        setTeam(teamData);
        setVisibility(teamData.visibility);
        setDescription(teamData.description); // Set the current description of the team
      } else {
        setMessage("Failed to fetch team details.");
      }
    } catch (error) {
      setMessage("Error fetching team details. Please try again.");
    }
  };

  const updateVisibility = async () => {
    try {
      const response = await axios.post(url + "/team/update-visibility", {
        teamId: team._id,
        leaderEmail: email,
        visibility,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error updating visibility. Please try again.");
    }
  };

  const updateDescription = async () => {
    try {
      const response = await axios.post(url + "/team/update-description", {
        teamId: team._id,
        leaderEmail: email,
        description,
      });
      if (response.data.success) {
        setMessage("Team description updated successfully.");
        setTeam({ ...team, description }); // Update team state with the new description
      } else {
        setMessage("Error updating description. Please try again.");
      }
    } catch (error) {
      setMessage("Error updating description. Please try again.");
    }
  };

  const handleRemoveMember = async (userId) => {
    try {
      const response = await axios.post(url + "/team/remove-member", {
        teamId: team._id,
        userId,
        leaderEmail: email,
      });
      setMessage(response.data.message);
      fetchTeamDetails(email); // Refresh team details
    } catch (error) {
      setMessage("Error removing member. Please try again.");
    }
  };

  const handleDissolveTeam = async () => {
    try {
      const response = await axios.post(url + "/team/leave", { email });
      setMessage(response.data.message);
      setTeam(null);
    } catch (error) {
      setMessage("Error dissolving team. Please try again.");
    } finally {
      setShowPopup(false);
    }
  };

  const handleRequestAction = async (userId, action) => {
    const endpoint =
      action === "approve" ? "/approve-request" : "/reject-request";
    try {
      const response = await axios.post(url + `/team${endpoint}`, {
        teamId: team._id,
        userId,
        leaderEmail: email,
      });
      setMessage(response.data.message);
      fetchTeamDetails(email);
    } catch (error) {
      setMessage("Error processing request. Please try again.");
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#010A1E] mb-0">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
      >
        X
      </button>

      {!isLeader ? (
        <div className="bg-[#c5abf9] p-8 mt-2 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-[#6932E2] mb-6">
            Leader Login
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2 p-2 pt-0"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 bg-[#010A1E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6932E2] focus:text-[#c5abf9]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {message && (
            <p className="text-center mt-4 text-gray-800">{message}</p>
          )}

          <div className="mt-6">
            <button
              className="w-full bg-[#6932E2] text-[#c5abf9] py-3 px-4 rounded-lg hover:bg-[#361c6e] focus:outline-none focus:ring-2 focus:ring-[#c5abf9]"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Login"}
            </button>
          </div>
        </div>
      ) : (
        // Render leader content here (team details, members, actions, etc.)
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Team: {team?.teamname}
          </h2>
          <p>Description: {team?.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Add Member
            </h3>
            <button
              className="bg-[#6932E2] text-white py-2 px-4 rounded-lg hover:bg-[#361c6e] focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
              onClick={() => setShowAddMemberPopup(true)}
            >
              Add Member
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Dissolve Team
            </h3>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setShowPopup(true)}
            >
              Dissolve Team
            </button>
          </div>
        </div>
      )}

      {/* Add Member Popup */}
      {showAddMemberPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowAddMemberPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl text-center text-black font-semibold mb-4">
              Add Team Member
            </h2>
            <label
              htmlFor="newMemberEmail"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Enter Member's Email
            </label>
            <input
              type="email"
              id="newMemberEmail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
            />
            <button
              className="mt-4 w-full bg-[#6932E2] text-white py-2 px-4 rounded-lg hover:bg-[#361c6e] focus:outline-none focus:ring-2 focus:ring-[#6932E2]"
              onClick={handleAddMember}
            >
              Add Member
            </button>
          </div>
        </div>
      )}

      {/* Confirm Team Dissolution Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl text-center text-black font-semibold mb-4">
              Confirm Team Dissolution
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Are you sure you want to dissolve your team? This action cannot be
              undone.
            </p>
            <div className="flex justify-between">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={handleDissolveTeam}
              >
                Dissolve Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderLogin;

