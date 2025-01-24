import React, { useEffect, useState } from "react";
import Teams from "../components/Teams";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import SquidGame from "../images/hackbg.png";
import PublicTeams from "../components/Public";
import BaseUrl from "../BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast

const TeamManagementPage = () => {
  const [team, setTeam] = useState(null);
  const [teamcheck, setTeamcheck] = useState(null);
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
  const [showTeams, setShowTeams] = useState(false);
  const [activeSection, setActiveSection] = useState("publicTeams");
  const token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showvisiVisibility, setshowvisiVisibility] = useState("");
  const { user } = useAuth();
  const url = BaseUrl + "/team";
  const navigate = useNavigate(); // Initialize navigate


  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500)); // Mock delay
          setNewEmail(user.email);
        } catch (error) {
          console.error("Error setting user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);


  useEffect(() => {
    if (teamcheck) {
      handleToggle("yourTeam"); // Automatically switch to "Your Team" section
    }
  }, [teamcheck]); // Dependency ensures this runs whenever `teamcheck` changes
  

  

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setShowTeams(false);
  };

  const FetchTeamDetails = async (email) => {
    try {
      const response = await axios.get(`${url}/list/team`, {
        params: { email: email },
      });
      if (response.data.success && response.data.teams.length > 0) {
        const teamData = response.data.teams[0];
        setTeam(teamData);
        setTeamcheck(true);
        setVisibility(teamData.visibility);
        setDescription(teamData.description);
        setMembers(teamData.members || []);
        setLeader(teamData.leader || null);
        setJoinRequests(teamData.joinRequests || []);
      }
    } catch (error) {
      console.log(`Error fetching team details.: ${error}`);
    }
  };

  useEffect(() => {
    if (!token) {
      setError("Token not found. Please log in.");
      return;
    }

    fetch(`${BaseUrl}/user/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch token data. Please log in again.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setUserData(data.data);
        } else {
          setError("Invalid token. Please log in again.");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    if (newEmail) {
      checkIfLeader(newEmail);
      FetchTeamDetails(newEmail);
    }
  }, [newEmail]);

  const updateVisibility = async (newvisibility) => {
    try {
      const response = await axios.post(url + "/update-visibility", {
        teamId: team._id,
        leaderEmail: team.leader.email,
        visibility: newvisibility,
      });
      if (response.data.success) {
        toast.success(response.data.message); // Show success toast
      } else {
        toast.error(response.data.message); // Show error toast
      }
    } catch (error) {
      toast.error("Error updating visibility. Please try again.");
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
  };

  const updateDescription = async () => {
    try {
      const response = await axios.post(url + "/update-description", {
        teamId: team._id,
        leaderEmail: team.leader.email,
        description,
      });
      toast.success("Team description updated successfully.");
      if (response.data.success) {
        // Show success toast
        setTeam({ ...team, description }); // Update team state with the new description
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error updating description. Please try again.");
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
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
        setJoinRequests((prev) => prev.filter((req) => req._id !== userId));
        toast.success("Member added Successully"); // Show success toast
        FetchTeamDetails(newEmail);
      } else {
        toast.error("User Rejected"); // Show error toast
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error processing request. Please try again.");
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
  };

  const handleRejectRequest = async (userId) => {
    try {
      const response = await axios.post(url + "/reject-request", {
        teamId: team._id,
        userId,
      });
      if (response.data.success) {
        setJoinRequests((prev) => prev.filter((req) => req._id !== userId));
        toast.success("User Rejected"); // Show success toast
        FetchTeamDetails(newEmail);
      }
      toast.success("User Rejected");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("User Rejected");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
  };

  const handleAddMember = async () => {
    try {
      const response = await axios.post(url + "/join", {
        teamId: team._id,
        email: newMemberEmail,
      });

      if (response.data.success) {
        toast.success("Added Member"); // Show success toast
        setShowAddMemberPopup(false);
        setNewMemberEmail("");
        FetchTeamDetails(newEmail);
      } else {
        toast.error(response.data.message); // Show error toast
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error adding member. Please try again.");
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
  };

  const handleRemoveMember = async (userId) => {
    try {
      const response = await axios.post(url + "/remove-member", {
        teamId: team._id,
        userId,
        leaderId: team.leader._id,
      });
      if (response.data.success) {
        toast.success(response.data.message); // Show success toast
        FetchTeamDetails(newEmail);
      }
      toast.success("Removed member");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Removed Member");
    }
    // finally {
    //   window.location.reload(); // Reload the page
    // }
  };

  const handleDissolveTeam = async () => {
    try {
      const response = await axios.post(url + "/leave", {
        email: team.leader.email || team.members.email || "",
      });
      if (response.data.success) {
        setMembers(response.data.team.members);
        setTeam(response.data.team);

         if (isLeader) {
    // Show success toast if the user is the leader
    toast.success("Team Dissolved");
  } else {
    // Show a different message if the user is not the leader
    toast.info("You left the team");
  } // Show success toast
        setTeam(null);
      }
      if (isLeader) {
        // Show success toast if the user is the leader
        toast.success("Team Dissolved");
      } else {
        // Show a different message if the user is not the leader
        toast.info("You left the team");
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      if (isLeader) {
        // Show success toast if the user is the leader
        toast.success("Team Dissolved");
      } else {
        // Show a different message if the user is not the leader
        toast.info("You left the team");
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    // finally {
    //   setShowPopup(false);
    //   window.location.reload(); // Reload the page
    // }
  };

  const checkIfLeader = async () => {
    try {
      const response = await axios.post(url + "/check-leader", {
        email: newEmail,
      });
      if (response.data.success) {
        setIsLeader(response.data.isLeader);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error checking leader status:", error.message);
    }
    //  finally {
    //   setLoading(false);
    // }
  };

  if (!user) {
    return (
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/Bg1_ouzd2n.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
        className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div
            className="py-6 px-6 shadow sm:rounded-lg sm:px-10"
            style={{
              backgroundColor: "rgba(69, 92, 147, 0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
            }}
          >
            <h1 className="text-xl font-bold text-white text-center">
              User Not Logged In
            </h1>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => navigate("/login")}
                className="w-full sm:w-1/2 py-3 px-5 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#040D4C] hover:bg-[#072C5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div
        className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen p-8 font-press-start bg-no-repeat bg-cover overflow-hidden overflow-x-hidden"
        style={{ backgroundImage: `url(${SquidGame})` }}
      >
        <div className="mx-auto space-y-8 mb-10">
          {!teamcheck && !showTeams ? ( // Show create team button only if no team exists
            <section>
              <div className="text-3xl sm:text-3xl font-bold mb-8 pt-10 flex items-center space-x-1 sm:space-x-3">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-xl sm:text-3xl font-bold p-5 font-press-start">
                  Team Management
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-press-start">
                <button
                  className="bg-gray-100 text-black rounded-lg shadow-md px-4 py-4 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-md font-bold font-press-start">
                      Create Team
                    </h2>
                  </div>
                  <img
                    src="/create icon.png"
                    alt=""
                    className="w-16 h-16 rounded-md m-1"
                  />
                </button>
              </div>
            </section>
          ) : null}{" "}
          {/* Show nothing if a team exists */}
          {/* Show Teams component only if no team exists */}
          {!teamcheck && showTeams && <Teams email={newEmail} onClose={handleClose} />}
        </div>
        <div className="team-toggle-container">
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeSection === "yourTeam"
                  ? "bg-gray-200 text-black hover:bg-gray-300"
                  : "bg-[#0f0d14] text-white"
              }`}
              onClick={() => handleToggle("yourTeam")}
            >
              Your Team
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeSection === "publicTeams"
                  ? "bg-gray-200 text-black hover:bg-gray-300"
                  : "bg-[#0f0d14] text-white"
              }`}
              onClick={() => handleToggle("publicTeams")}
            >
              Public Teams
            </button>
          </div>
        </div>
        {activeSection === "yourTeam" ? (
          teamcheck ? (
            <section>
              <div className="text-3xl sm:text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-xl sm:text-3xl font-bold p-5 font-press-start">
                  {team?.teamname}
                </h2>
                
                
              </div>
            
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 font-press-start">
              
                <span className="text-md sm:text-lg">Team Visibility</span>
                <label className="relative inline-flex items-center cursor-pointer m-5">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={visibility === "public"}
                    onChange={(e) => {
                      const newVisibility = e.target.checked
                        ? "public"
                        : "private";
                      setVisibility(newVisibility);
                      setshowvisiVisibility(newVisibility)
                      updateVisibility(newVisibility);
                    }}
                  />
                  {isLeader && (
                    <div className="relative w-16 h-8 bg-gray-300 rounded-full shadow-inner peer dark:bg-gray-800 peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:h-6 after:w-6 after:rounded-full after:shadow-md after:transition-all peer-hover:after:scale-110 peer-checked:after:translate-x-8 dark:after:border-gray-600"></div>
                  )}
                      
                                    
                  
           

                </label>
                <span className="ml-2 text-sm sm:text-base text-black bg-white border border-white p-2 rounded-lg pointer-events-none">
                    {visibility === "private" ? "Private" : "Public"}  
                  </span>
                  {/* <div>{visibility}</div> */}
              </div>
              <div className="mb-6 font-press-start">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-white my-5 font-press-start"
                >
                  Team Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full sm:w-1/2 sm:flex sm:flex-col p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start text-md"
                  placeholder="Enter a new team description"
                  rows={5}
                  readOnly={!isLeader}
                />
                {isLeader && (
                  <button
                    className="text-sm mt-4 m-auto bg-gray-700 text-white hover:bg-gray-900 hover:text-white py-3 px-4 rounded-lg focus:outline-none font-press-start"
                    onClick={updateDescription}
                  >
                    Update Description
                  </button>
                )}
                <div className="mt-6 font-press-start">
                  {isLeader && (
                    <button
                      className="mt-4 bg-gray-700 text-white hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg focus:outline-none font-press-start"
                      onClick={() => setShowAddMemberPopup(true)}
                    >
                      Add Member
                    </button>
                  )}
                </div>
                {showAddMemberPopup && (
                  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center font-press-start">
                    <div className="bg-gray-200 p-5 sm:p-8 rounded-lg shadow-lg w-100 font-press-start m-10">
                      <h2 className="text-md sm:text-xl text-center text-black font-semibold mb-4 font-press-start">
                        Add Team Member
                      </h2>
                      <label
                        htmlFor="newMemberEmail"
                        className="block text-sm ms-auto sm:text-lg font-medium text-gray-700 mb-5 font-press-start"
                      >
                        Enter Member's Email
                      </label>
                      <textarea
                        name="email"
                        value={newMemberEmail}
                        onChange={(e) => setNewMemberEmail(e.target.value)}
                        className={`w-full h-11 p-3 text-sm sm:text-sm border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start text-black`}
                        placeholder="Enter email"
                        rows="1"
                      />
                      <div className="flex justify-between mt-6 font-press-start">
                        <button
                          className="bg-[#0f0d14] text-white py-2 px-4 m-2 text-sm sm:text-xl rounded-lg hover:bg-gray-800 font-press-start"
                          onClick={handleAddMember}
                        >
                          Add Member
                        </button>
                        <button
                          className="bg-gray-500 text-white py-2 px-4 m-2 text-sm sm:text-xl rounded-lg hover:bg-gray-600 font-press-start"
                          onClick={() => setShowAddMemberPopup(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-3xl sm:text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                  alt="Image description"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <h2 className="text-xl sm:text-3xl font-bold p-5 font-press-start">
                  Members
                </h2>
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
                      className="w-16 h-16 sm:w-24 rounded-md object-cover"
                    />
                    <h3 className="text-lg font-bold font-press-start">
                      {member.fullName}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {index === 0 ? "Leader" : "Member"}
                    </p>
                    {isLeader ? (
                      <>
                        {index === 0 ? (
                          <button
                            onClick={handleDissolveTeam}
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
                      </>
                    ) : (
                      <p></p>
                    )}
                  </div>
                
                ))}
                
              </div>
              <div className="flex justify-center items-center min-h-[200px]"> <button
                            onClick={handleDissolveTeam}
                            className="bg-[#c52a28] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start m-5 mt-16"
                          >
                            Leave Team
                          </button></div>
              <div>
                <div className="text-3xl sm:text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
                  <img
                    src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/frame_wilx26.png"
                    alt="Image description"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <h2 className="text-xl sm:text-3xl font-bold p-5 font-press-start">
                    Join Requests
                  </h2>
                </div>
                {joinRequests.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-press-start">
                    {joinRequests.map((request) => (
                      <div
                        key={request._id}
                        className="bg-gray-300 text-white rounded-xl p-8 px-3 flex flex-col items-center gap-4 shadow-md font-press-start sm:w-[160%] lg:w-[120%]"
                      >
                        <img
                          src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/reqicon_cnnpyi.png"
                          alt="Image description"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <p className="text-sm text-center text-black font-press-start">
                          {request.fullName} would like to join your team.
                        </p>
                        <div className="flex gap-2 font-press-start ">
                          {isLeader && (
                            <button
                              onClick={() =>
                                handleRequestAction(request._id, "approve")
                              }
                              className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                            >
                              Accept
                            </button>
                          )}
                          {isLeader && (
                            <button
                              onClick={() => handleRejectRequest(request._id)}
                              className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
                            >
                              Decline
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-white text-lg font-press-start">
                    No join requests at the moment.
                  </div>
                )}
              </div>
            </section>
          ) : (
            <div className="text-center text-red-500 text-lg font-bold">
              You are not a leader or a member of any team.
            </div>
          )
        ) : (
          <PublicTeams />
        )}
      </div>
    );
  };

export default TeamManagementPage;
