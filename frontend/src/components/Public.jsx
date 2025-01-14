import { useEffect, useState } from "react";
import axios from "axios";

const PublicTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("67840bb36508b75887fe0f46");

  const url = "http://localhost:8000/team";

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${url}/list`);
        if (response.data.success) {
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
    <div className="w-full mx-auto">
      <div className="text-3xl font-bold mb-8 pt-10 flex items-center space-x-4">
        <img
          src="../images/Frame.png"
          alt="Public Teams Icon"
          className="w-20 h-20 object-contain"
        />
        <h2 className="text-white">Public Teams</h2>
      </div>

      {loading && (
        <p className="text-center text-lg text-gray-400">
          Loading public teams...
        </p>
      )}
      {error && <p className="text-center text-red-400 font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.length === 0 ? (
          <p className="col-span-full text-center text-lg text-gray-400">
            No public teams available.
          </p>
        ) : (
          teams.map((team) => (
            <div
              key={team._id}
              className="bg-gray-200 text-black p-6 rounded-lg shadow-lg border border-black relative"
            >
              <div className="absolute top-4 right-4">
                <img
                  src={"../images/teampub.png"}
                  alt={`${team.teamname} Logo`}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-black">
                {team.teamname}
              </h3>
              <p className="mt-2 text-black">
                <span className="font-medium">Leader:</span> {team.leader?.username || "Unknown"}
              </p>
              <p className="mt-2 text-black">
                <span className="font-medium">Description:</span> {team.description || "No description provided"}
              </p>

              <button
                className={`mt-4 w-full py-2 px-4 rounded-lg font-medium ${team.isRequested
                  ? "text-black bg-gray-200 hover:bg-gray-400 border border-black"
                  : "text-white bg-[#0f0d14] hover:bg-[#1f113e]"
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
