import React, { useEffect, useState } from "react";
import Teams from "../components/teams";
import axios from "axios";
import Public from "../components/Public";
import { useAuth } from "../context/AuthContext";
// import createpng from "../images/create.png";
// import framepng from "../images/Frame.png";
// import reqimg from "../images/reqicon.png";
// import grpimg from "../images/Group.png";

const TeamManagementPage = () => {
  const [team, setTeam] = useState(null);
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState(null);
  const [joinRequests, setJoinRequests] = useState([]);
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const token = sessionStorage.getItem("token");

  const { user, setUser } = useAuth();
  const [showTeams, setShowTeams] = useState(false);

  const handleClose = () => {
    setShowTeams(false);
  };
  const url = "http://localhost:8000/team";

  const FetchTeamDetails = async (email) => {
    try {
      const response = await axios.get(`${url}/list/team`, {
        params: { email: email },
      });
      if (response.data.success) {
        const teamData = response.data.teams[0];
        setTeam(teamData);
        setVisibility(teamData.visibility);
        setDescription(teamData.description);
        setMembers(teamData.members || []);
        setLeader(teamData.leader || null);
        setJoinRequests(teamData.joinRequests || []);
      } else {
        setMessage("Failed to fetch team details.");
      }
    } catch (error) {
      setMessage(`Error fetching team details: ${error}`);
    }
  };

  useEffect(() => {
    FetchTeamDetails("abh@gmail.com");
  }, []);

  const updateVisibility = async (newvisibility) => {
    try {
      const response = await axios.post(url + "/update-visibility", {
        teamId: team._id,
        leaderEmail: team.leader.email,
        visibility: newvisibility,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error updating visibility. Please try again.");
    }
  };

  const updateDescription = async () => {
    try {
      const response = await axios.post(url + "/update-description", {
        teamId: team._id,
        leaderEmail: team.leader.email,
        description,
      });
      if (response.data.success) {
        setMessage("Team description updated successfully.");
        window.location.reload(); 
      } else {
        setMessage("Error updating description. Please try again.");
      }
    } catch (error) {
      setMessage("Error updating description. Please try again.");
    }
    window.location.reload();
  };

  const handleRequestAction = async (userId, action) => {
    const endpoint = action === "approve" ? "/approve-request" : "";
    try {
      const response = await axios.post(url + `${endpoint}`, {
        teamId: team._id,
        userId,
        leaderEmail: team.leader.email,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error processing request. Please try again.");
    }
  };

  const handleRejectRequest = async (userId, action) => {
    const endpoint = action === "reject" ? "/reject-request" : "";
    try {
      const response = await axios.post(url + `${endpoint}`, {
        teamId: team._id,
        userId,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      setMessage("Error processing request. Please try again.");
    }
  };

  const handleAddMember = async () => {
    try {
      const response = await axios.post(url + "/join", {
        teamName: team.teamname,
        email: newMemberEmail,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        setShowAddMemberPopup(false);
        setNewMemberEmail("");
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      setMessage("Error adding member. Please try again.");
    }
  };

  const handleRemoveMember = async (userId) => {
    try {
      const response = await axios.post(url + "/remove-member", {
        teamId: team._id,
        userId,
        leaderId: team.leader._id,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      setMessage("Error removing member. Please try again.");
    }
  };

  const handleDissolveTeam = async () => {
    try {
      const response = await axios.post(url + "/leave", {
        email: team.leader.email || team.members.email || "",
      });
      if (response.data.success) {
        setMessage(response.data.message);
        setTeam(null);
        window.location.reload(); 
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error dissolving team. Please try again.");
    } finally {
      setShowPopup(false);
    }
  };

  


  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen p-8 font-press-start">
      <div className="max-w-5xl mx-auto space-y-8">
        {!showTeams ? (
          <>
            <section>
              <div className="text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-3xl font-bold p-5 font-press-start">Team Management</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-press-start">
                <button
                  className="bg-gray-300 text-black rounded-lg shadow-md px-6 py-4 hover:bg-gray-400 flex justify-between items-center border font-press-start"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold font-press-start">Create a Team</h2>
                    <p className="text-md p-2 font-press-start">
                      Bring your vision to life! Click here to assemble a team
                      and start collaborating towards your goals.
                    </p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/create_b4n2uf.png"
                    alt="Image description"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </button>
              </div>
            </section>
  
            <section>
              <div className="text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-3xl font-bold p-5 font-press-start">
                  Team : {team?.teamname}
                </h2>
              </div>
  
              <div className="flex gap-4 mb-4 font-press-start">
                {["private", "public"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-lg border ${
                      visibility === type
                        ? "bg-gray-200 text-black"
                        : "bg-[#0f0d14] text-white hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setVisibility(type);
                      updateVisibility(type);
                    }}
                  >
                    {type === "private" ? "Private" : "Public"}
                  </button>
                ))}
              </div>
              <div className="mb-6 font-press-start">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-white mb-2 font-press-start"
                >
                  Edit Team Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start"
                  placeholder="Enter a new team description"
                  rows={5}
                />
                <button
                  className="mt-4 bg-gray-700 text-white hover:bg-gray-900 hover:text-white py-2 px-4 rounded-lg focus:outline-none font-press-start"
                  onClick={updateDescription}
                >
                  Update Description
                </button>
  
                <div className="mt-6 font-press-start">
                  <button
                    className="mt-4 bg-gray-700 text-white hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg focus:outline-none font-press-start"
                    onClick={() => setShowAddMemberPopup(true)}
                  >
                    Add Member
                  </button>
                </div>
                {showAddMemberPopup && (
                  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center font-press-start">
                    <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-100 font-press-start">
                      <h2 className="text-xl text-center text-black font-semibold mb-4 font-press-start">
                        Add Team Member
                      </h2>
                      <label
                        htmlFor="newMemberEmail"
                        className="block text-lg font-medium text-gray-700 mb-2 font-press-start"
                      >
                        Enter Member's Email
                      </label>
                      <textarea
                        name="email"
                        value={newMemberEmail}
                        onChange={(e) => setNewMemberEmail(e.target.value)}
                        className={` w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start text-black`}
                        placeholder="Enter email"
                        rows="1"
                        />
                      <div className="flex justify-between mt-6 font-press-start">
                        <button
                          className="bg-[#0f0d14] text-white py-2 px-4 rounded-lg hover:bg-gray-800 font-press-start"
                          onClick={handleAddMember
                          }
                        >
                          Add Member
                        </button>
                        <button
                          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 font-press-start"
                          onClick={() => setShowAddMemberPopup(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-press-start">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 text-gray-800 rounded-xl p-4 flex flex-col items-center gap-4 shadow-md font-press-start"
                  >
                    <img
                      src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/Group_n98bl6.png"
                      alt="Image description"
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <h3 className="text-lg font-bold font-press-start">{member.username}</h3>
                    <p className="text-sm text-gray-400">{member.leader}</p>
                    {member.role === "Leader" ? (
                      <button
                        onClick={handleDissolveTeam()}
                        className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                      >
                        Dissolve Team
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveMember(member._id)}
                        className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>
  
            <section>
              <div className="text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-3xl font-bold p-5 font-press-start">Join Request</h2>
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-press-start">
                {joinRequests.map((request) => (
                  <div
                    key={request._id}
                    className="bg-gray-300 text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md font-press-start"
                  >
                    <img
                      src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/reqicon_cnnpyi.png"
                      alt="Image description"
                      className="w-16 h-16 rounded-full object-cover"
                    />
  
                    <p className="text-sm text-center text-black font-press-start">
                      {request.username} would like to join your team.
                    </p>
                    <div className="flex gap-2 font-press-start">
                      <button
                        onClick={() =>
                          handleRequestAction(request._id, "approve")
                        }
                        className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleRejectRequest(request._id, "reject")
                        }
                        className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
  
            <Public />
          </>
        ) : (
          <Teams onClose={handleClose} />
        )}
      </div>
    </div>
  );
  
};

export default TeamManagementPage;