import axios from "axios";
import React, { useEffect, useState } from "react";

const Teamlogin = () => {
  const [team, setTeam] = useState(null);
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState(null);
  const [joinRequests, setJoinRequests] = useState([]);
  const [message, setMessage] = useState("");

  const url = "http://localhost:8000/team";

  const MemberCard = ({ name, email, role }) => (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <p><strong>Name:</strong> {name || "N/A"}</p>
      <p><strong>Email:</strong> {email || "N/A"}</p>
      <p><strong>Role:</strong> {role || "Member"}</p>
    </div>
  );
  const JoinRequestCard = ({ name, handleResponse }) => {
    return (
      <div className="flex justify-between items-center p-4 border rounded mb-2">
        <span>{name}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => handleResponse(name, 'accept')}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Accept
          </button>
          <button
            onClick={() => handleResponse(name, 'reject')}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reject
          </button>
        </div>
      </div>
    );
  };
  const handleJoinRequestResponse = (name, action) => {
    console.log(`${action} request from ${name}`);
    // Implement the logic to accept/reject the join request here, like updating the backend.
    // You might call an API to update the team members or remove the request.
  };  

  const FetchTeamDetails = async (email) => {
    try {
      const response = await axios.get(`${url}/list`, {
        params: { email },
      });
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
      }
    } catch (error) {
      console.log(`Error fetching team details.: ${error}`);
    }
  };
  useEffect(() => {
    FetchTeamDetails("abh@gmail.com");
  }, []);

  useEffect(() => {
    console.log("Updated state values:", { team, visibility, description });
  }, [team, visibility, description]);
  useEffect(() => {
    // Make sure you set the joinRequests state with the fetched data (same as team members)
    setJoinRequests(teamData.joinRequests || []);
  }, [teamData]);

  if (!team) {
    return <div>Loading...</div>;
  }
 
  
  return (
    <div className="flex flex-col justify-center items-center text-center">
      
        <div className="mt-8 text-lg">
          <p><strong>Team Name:</strong> {team.teamname || "N/A"}</p>
          
          <p><strong>Description:</strong> {description || "No description available"}</p>
          
          <p><strong>Visibility:</strong> {visibility || "N/A"}</p>

          {/* Leader */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Team Leader</h3>
          <p>{leader ? leader.username : "No leader assigned"}</p>
        </div>

           {/* Team Members */}
           <div className="mt-6">
            <h2 className="text-2xl font-semibold">Team Members</h2>
            {members.length > 0 ? (
              members.map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.username}
                  email={member.email}
                  role="Member"
                />
              ))
            ) : (
              <p>No team members found.</p>
            )}
          </div>
        </div>
        <div className="mt-6">
    <h2 className="text-2xl font-semibold">Join Requests</h2>
    {joinRequests.length > 0 ? (
      joinRequests.map((request, index) => (
        <JoinRequestCard
          key={index}
          name={request.name}
          handleResponse={handleJoinRequestResponse}
        />
      ))
    ) : (
      <p>No join requests found.</p>
    )}
  </div>
      
    </div>
  );
};

export default Teamlogin;
