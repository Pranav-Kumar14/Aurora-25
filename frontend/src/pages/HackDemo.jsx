import React, { useEffect, useState } from "react";
import Teams from "../components/Teams";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import SquidGame from "../images/hackbg.png";
import { getProfile } from "../services/auth";
import PublicTeams from "../components/Public";
import BaseUrl from "../BaseUrl";

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
  const [newemail, setnewemail] = useState("")
  const [userId, setUserId] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const url = BaseUrl+'/team';

  
 

  
  
  useEffect(() => {
    const fetchUserData = async () => {
        if (user) {
            // console.log("User from AuthContext:", user);

            try {
                // Simulate async operations, if needed
                await new Promise((resolve) => setTimeout(resolve, 500)); // Mock delay

                setUserId(user.id);
                setNewEmail(user.email);

                // console.log("User ID:", user.id);
                // console.log("User Email:", user.email);
            } catch (error) {
                // console.error("Error setting user data:", error);
            }
        }
    };

    fetchUserData();
}, [user]);


  
  const handleToggle = (section) => {
    setActiveSection(section);
  };
  const handleClose = () => {
    setShowTeams(false);
  };
  
  const FetchTeamDetails = async (email) => {
    // console.log(userId)
    // console.log(email)
    try {
      const response = await axios.get(`${url}/list/team`,{
        params: { email: email },
      });
      // console.log(response);
      if (response.data.success && response.data.teams.length > 0) {
        const teamData = response.data.teams[0];
        // console.log("Fetched team data:", teamData);
        setTeam(teamData);
        setTeamcheck(true)

        setVisibility(teamData.visibility);
        setDescription(teamData.description);
        setMembers(teamData.members || ["my memer"]);
        setLeader(teamData.leader || null);
        setJoinRequests(teamData.joinRequests || []);
      } 
    } catch (error) {
      console.log(`Error fetching team details.: ${error}`);
    }
  };

  useEffect(() => {
    checkIfLeader(newEmail);

  }, []);

  useEffect(() => {
   

    if (!token) {
        setError('Token not found. Please log in.');
        return;
    }

    // Send a POST request to the backend to decode the token
    fetch(`${BaseUrl}/user/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }), // Send token in the body
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch token data. Please log in again.');
            }
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                setUserData(data.data); // Set the decoded user data
            } else {
                setError('Invalid token. Please log in again.');
            }
        })
        .catch((err) => {
            setError(err.message);
        });
}, []); 
useEffect(() => {
  if (newEmail) {
    //  console.log(isLeader)
      checkIfLeader(newEmail);
      FetchTeamDetails(newEmail);
  }
}, [newEmail]);


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
        setJoinRequests((prev) => prev.filter((req) => req._id !== userId));
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
        setJoinRequests((prev) => prev.filter((req) => req._id !== userId));
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
        setMembers(response.data.team.members);
      setTeam(response.data.team);
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
  const checkIfLeader = async () => {
    console.log(newEmail)
    try {
      const email = newEmail; // Replace with dynamic email
      const response = await axios.post(url+"/check-leader", {email});
      console.log(response)
      if (response.data.success) {
        console.log("leader",response)
        setIsLeader(response.data.isLeader);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error checking leader status:", error.message);
    } finally {
      setLoading(false);
    }
  };





  return (
    <div
      className="  bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen p-8 font-press-start bg-no-repeat bg-cover overflow-hidden overflow-x-hidden"
      style={{ backgroundImage: `url(${SquidGame})` }}
    >
       <div>
      <h1>Welcome to Hack Demo</h1>
      {isLeader ? (
        <button onClick={() => console.log("Leader button clicked!")}>
          Leader Action
        </button>
      ) : (
        <p>You are not a leader.</p>
      )}
    </div>
      {/* create team  */}
      <div className="   mx-auto space-y-8 mb-10">
        {!showTeams ? (
          <>
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
                    {/* <p className="text-[10px] p-2 font-press-start">
                      Bring your vision to life! Click here to assemble a team
                      and start collaborating towards your goals.
                    </p> */}
                  </div>
                  <img src="/create icon.png" alt="" className="w-16 h-16  rounded-md m-1" />
               
                </button>
            
              </div>
            </section>
          </>
        ) : (
          <Teams onClose={handleClose} />
        )}
      </div>  
         <div className="team-toggle-container">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === "yourTeam"
              ? "bg-[#0f0d14] text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => handleToggle("yourTeam")}
        >
          Your Team
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === "publicTeams"
              ? "bg-[#0f0d14] text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => handleToggle("publicTeams")}
        >
          Public Teams
        </button>
      </div>
         {/* Conditional Content */}
      
      
      </div>
      {activeSection === "yourTeam" ? (
  teamcheck ? (
    // Render "Your Team" section if a team exists
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
     const newVisibility = e.target.checked ? "public" : "private";
     setVisibility(newVisibility);
     updateVisibility(newVisibility);
   }}
 /> {isLeader && (
  <div className="relative w-16 h-8 bg-gray-300 rounded-full shadow-inner peer dark:bg-gray-800 peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:h-6 after:w-6 after:rounded-full after:shadow-md after:transition-all peer-hover:after:scale-110 peer-checked:after:translate-x-8 dark:after:border-gray-600"></div>
 )}
 <span className="ml-2 text-sm sm:text-base text-white">
   {visibility === "private" ? "Private" : "Public"}
 </span>
</label>
</div>

        <div className="mb-6 font-press-start">
          <label
            htmlFor="description"
            className="block textt-lg font-medium text-white my-5  font-press-start"
          >
           Team Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full sm:w-1/2 sm:flex  sm:flex-col p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start text-md"
            placeholder="Enter a new team description"
            rows={5}
          />
           {isLeader && (
          <button
            className="text-sm mt-4 m-auto bg-gray-700 text-white hover:bg-gray-900 hover:text-white py-3 px-4 rounded-lg focus:outline-none font-press-start"
            onClick={updateDescription}
          >
            Update Description
          </button>)}

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
                <h2 className="text-md sm:text-xl  text-center text-black font-semibold mb-4 font-press-start">
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
                  className={` w-full h-11 p-3 text-sm sm:text-lg border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-press-start text-black`}
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
      <h3 className="text-lg font-bold font-press-start">{member.fullName}</h3>
      <p className="text-sm text-gray-400">{index === 0 ? "Leader" : "Member"}</p>
      {isLeader ? (
              <>
      {index === 0 ? (
        // Leader action button
        
        <button
          onClick={handleDissolveTeam}
          className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
        >
          Dissolve Team
        </button>
      ) : (
        // Member action button
        <button
          onClick={() => handleRemoveMember(member._id)}
          className="bg-[#0f0d14] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e] font-press-start"
        >
          Remove
        </button>
      )}
      </>):(
        <p></p>
      )}
    </div>
  ))}
</div>

        {/* Join Requests */}
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
                    </button>)}
                    {isLeader && (
                    <button
                      onClick={() => handleRejectRequest(request._id, "reject")}
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
    // Render a message if no team exists
    <div className="text-center text-red-500 text-lg font-bold">
      You are not a leader or a member of any team.
    </div>
  )
) : (
  // Render "Public Teams" if active section is not "yourTeam"
  <PublicTeams />
)}
      
      
    </div>
  );
};

export default TeamManagementPage;

