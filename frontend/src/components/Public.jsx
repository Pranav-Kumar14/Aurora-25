import { useEffect, useState } from "react";
import axios from "axios";

const PublicTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("67840bb36508b75887fe0f46");

  const url = "http://localhost:8000/team";

  // Fetch public teams
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${url}/list`);
        if (response.data.success) {
          // Add isRequested property to track join status for each team
          const teamsWithStatus = response.data.teams
            .filter((team) => team.visibility === "public")
            .map((team) => ({ ...team, isRequested: false }));
          setTeams(teamsWithStatus);
        } else {
          setError(response.data.message || "Failed to fetch teams.");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  // Handle join team request
  const handleJoinTeam = async (teamId) => {
    try {
      const response = await axios.post(`${url}/request-join`, {
        teamId,
        userId,
      });

      if (response.data.success) {
        setTeams((prevTeams) =>
          prevTeams.map((team) =>
            team._id === teamId ? { ...team, isRequested: true } : team
          )
        );
      } else {
        alert(response.data.message || "Failed to join the team.");
      }
    } catch (err) {
      alert(err.message || "An error occurred while sending the join request.");
    }
  };

  // Handle cancel join request
  const handleCancelRequest = async (teamId) => {
    try {
      const response = await axios.post(`${url}/cancel-request`, {
        teamId,
        userId,
      });
  
      if (response.data.success) {
        setTeams((prevTeams) =>
          prevTeams.map((team) =>
            team._id === teamId ? { ...team, isRequested: false } : team
          )
        );
        alert(response.data.message);
      } else {
        alert(response.data.message || "Failed to cancel the request.");
      }
    } catch (err) {
      alert(err.message || "An error occurred while canceling the request.");
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-[#c5abf9] mb-6">
        Public Teams
      </h2>

      {loading && <p className="text-center text-lg text-gray-400">Loading public teams...</p>}
      {error && <p className="text-center text-red-400 font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.length === 0 ? (
          <p className="col-span-full text-center text-lg text-gray-400">
            No public teams available.
          </p>
        ) : (
          teams.map((team) => (
            <div
              key={team._id}
              className="bg-[#c5abf9] p-6 rounded-lg shadow-md border border-[#6932E2]"
            >
              <h3 className="text-xl font-semibold text-[#6932E2]">
                {team.teamname}
              </h3>
              <p className="mt-2 text-gray-800">
                Leader: <span className="font-medium">{team.leader?.username || "Unknown"}</span>
              </p>
              <p className="mt-2 text-gray-800">
                Description:{" "}
                <span className="font-light">{team.description || "No description provided"}</span>
              </p>
              <button
                className={`mt-4 w-full py-2 px-4 rounded-lg text-white ${
                  team.isRequested
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-[#6932E2] hover:bg-[#361c6e]"
                }`}
                onClick={() =>
                  team.isRequested
                    ? handleCancelRequest(team._id)
                    : handleJoinTeam(team._id)
                }
              >
                {team.isRequested ? "Cancel Request" : "Join Team"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PublicTeams;
