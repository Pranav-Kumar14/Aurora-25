import React, { useEffect, useState } from "react";
import Teams from "../components/Teams";
import axios from "axios";
import Public from "../components/Public";
import { useAuth } from "../context/AuthContext";

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
  const [teamMembers,setTeamMembers] = useState([]);
  const token = sessionStorage.getItem('token');

     const { user, setUser } = useAuth();
//  console.log("user check ",user,"token",token)
  const [publicTeams] = useState([
    { id: 1, name: "Team Aurora", leader: "Souvik" },
    { id: 2, name: "Team Orion", leader: "Alex" },
  ]);

  const [showTeams, setShowTeams] = useState(false);

  const handleClose = () => {
    setShowTeams(false);
  };
  const url = "http://localhost:8000/team";

  const FetchTeamDetails = async (email) => {
    try {
      const response = await axios.get(`${url}/list/team`,{
        params: { email: email },
      }
      );
      if (response.data.success) {
        const teamData = response.data.teams[0];
        console.log("Fetched team data:", teamData);
        setTeam(teamData);

        setVisibility(teamData.visibility);
        setDescription(teamData.description);
        setMembers(teamData.members || ["my memer"]);
        setLeader(teamData.leader || null);
        setJoinRequests(teamData.joinRequests || []);
      } else {
        setMessage("Failed to fetch team details.");
        console.error("error")
      }
    } catch (error) {
      console.log(`Error fetching team details.: ${error}`);
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
        visibility:newvisibility,
      });
      if (response.data.success) {
        setMessage(response.data.message);
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
        setTeam({ ...team, description }); // Update team state with the new description
      } else {
        setMessage("Error updating description. Please try again.");
      }
    } catch (error) {
      setMessage("Error updating description. Please try again.");
    }
  };
  const handleRequestAction = async (userId, action) => {
    const endpoint =
      action === "approve" ? "/approve-request" :"";
    try {
      const response = await axios.post(url + `${endpoint}`, {
        teamId: team._id,
        userId,
        leaderEmail: team.leader.email,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        FetchTeamDetails(email);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error processing request. Please try again.");
    }
  };
  const handleRejectRequest = async (userId, action) => {
    const endpoint =
      action === "reject" ? "/reject-request" :"";
    try {
      const response = await axios.post(url + `${endpoint}`, {
        teamId: team._id,
        userId,
    
      });
      if (response.data.success) {
        setMessage(response.data.message);
        FetchTeamDetails(email);
      } else {
        setMessage(response.data.message);
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
        fetchTeamDetails(email); 
      } else {
        setMessage(response.data.message); 
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
        FetchTeamDetails(team.leader.email);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error removing member. Please try again.");
    }
  };
  const handleDissolveTeam = async () => {
    try {
      const response = await axios.post(url + "/leave", { email: team.leader.email || team.members.email ||"" });
      if (response.data.success) {
        setMessage(response.data.message);
        setTeam(null);
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
    <div className="bg-gradient-to-br from-[#1B1033] to-[#451A7A] text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {!showTeams ? (
          <>
            <section>
              <h1 className="text-3xl font-bold mb-6 pt-20">Team Management</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  className="bg-gray-100 text-black rounded-lg shadow-md px-6 py-4 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold">Create a Team</h2>
                    <p className="text-sm">
                      Bring your vision to life! Click here to assemble a team
                      and start collaborating towards your goals.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                </button>
                <button
                  className="bg-gray-100 text-black rounded-lg shadow-md px-6 py-4 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold">Join a Team</h2>
                    <p className="text-sm">
                      Bring your vision to life! Click here to join a team and
                      start collaborating towards your goals.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 m-auto">
                Team name : {team?.teamname}
              </h2>
              
              <div className="flex gap-4 mb-4">
                {["private", "public"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-lg text-white ${
                      visibility === type
                        ? "bg-[#6932E2]"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => {setVisibility(type);
                        updateVisibility(type);}}
                  >
                    {type === "private" ? "Private" : "Public"}
                  </button>
                ))}
              </div>
              <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-lg font-medium text-black mb-2"
        >
          Edit Team Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new team description"
        />
        <button
          className="mt-4 bg-[#6932E2] text-white py-2 px-4 rounded-lg  focus:outline-none"
          onClick={updateDescription}
        >
          Update Description
        </button>

        <div className="mt-6">
            <button
              className="mt-4 bg-[#6932E2] text-white py-2 px-4 rounded-lg  focus:outline-none"
              onClick={() => setShowAddMemberPopup(true)}
            >
              Add Member
            </button>
          </div>
          {showAddMemberPopup && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
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
                <div className="flex justify-between mt-6">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={handleAddMember}
                  >
                    Add Member
                  </button>
                  <button
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    onClick={() => setShowAddMemberPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {members.map((member,index) => (
                  <div
                    key={index}
                    className="bg-[#1E1E2E] text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md"
                  >
                    <div className="w-16 h-16 bg-[#FFFFFF20] rounded-full"></div>
                    <h3 className="text-lg font-bold">{member.username}</h3>
                    <p className="text-sm text-gray-400">{member.leader}</p>
                    {member.role === "Leader" ? (
                        
                      <button onClick={handleDissolveTeam()}
                      className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Disolve Team
                      </button>
                    ) : (
                      <button onClick={() => handleRemoveMember(member._id)}
                      className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Join Request</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {joinRequests.map((request) => (
                  <div
                  key={request._id}
                    className="bg-[#1E1E2E] text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md"
                  >
                    <div className="w-16 h-16 bg-[#FFFFFF20] rounded-full"></div>
                    <p className="text-sm text-center text-gray-400">
                      {request.username} would like to join your team.
                    </p>
                    <div className="flex gap-2">
                      <button  onClick={() =>
                        handleRequestAction(request._id, "approve")
                      } className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Accept
                      </button>
                      <button  onClick={() => handleRejectRequest(request._id, "reject")} className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            
            <Public/>
          </>
        ) : (
          <Teams onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default TeamManagementPage;
