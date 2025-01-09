import { useEffect, useState } from "react";
import axios from "axios";

const PublicTeams = ({ onClose, userId }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinError, setJoinError] = useState("");
  const [joinMessage, setJoinMessage] = useState("");
  const [teamIdToJoin, setTeamIdToJoin] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = "http://localhost:8000";

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${url}/team/list`);
        if (response.data.success) {
          setTeams(response.data.teams.filter((team) => team.visibility === "public"));
        } else {
          setError("Failed to fetch public teams. Please try again.");
        }
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred while fetching teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleJoinTeam = async () => {
    if (!userId) {
      setJoinError("User ID is not available.");
      return;
    }

    try {
      const response = await axios.post(`${url}/team/request-join`, {
        teamId: teamIdToJoin,
        userId:"677d25ecc49da688a9ecce1b",
      });

      if (response.data.success) {
        setJoinMessage("Join request sent successfully!");
        setJoinError("");
      } else {
        setJoinMessage("");
        setJoinError(response.data.message || "Unable to send join request.");
      }
    } catch (err) {
      setJoinError(err.response?.data?.message || "An error occurred while sending the join request.");
      setJoinMessage("");
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#010A1E]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-center text-[#c5abf9]">Public Teams</h2>
        <button
          onClick={onClose}
          className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700"
        >
          Close
        </button>
      </div>

      {loading && <p className="text-center text-lg text-gray-400">Loading public teams...</p>}
      {error && <p className="text-center text-red-400 font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.length === 0 && !loading ? (
          <p className="col-span-full text-center text-lg text-gray-400">
            No public teams available.
          </p>
        ) : (
          teams.map((team) => (
            <div
              key={team._id}
              className="bg-[#c5abf9] p-6 rounded-lg shadow-md border border-[#6932E2]"
            >
              <h3 className="text-xl font-semibold text-[#6932E2]">{team.teamname}</h3>
              <p className="mt-2 text-gray-800">
                Leader: <span className="font-medium">{team.leader.username}</span>
              </p>
              <p className="mt-2 text-gray-800">
                Description: <span className="font-light">{team.description}</span>
              </p>
              <p className="text-gray-800">
                Visibility: <span className="uppercase">{team.visibility}</span>
              </p>

              <button
                className="mt-4 w-full bg-[#6932E2] text-white py-2 px-4 rounded-lg hover:bg-[#361c6e] transition duration-300"
                onClick={() => {
                  setTeamIdToJoin(team._id);
                  setIsModalOpen(true);
                }}
              >
                Join Team
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Join Team Confirmation</h3>
            <p>Are you sure you want to join this team?</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => {
                  handleJoinTeam();
                  setIsModalOpen(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {joinMessage && <p className="text-green-500">{joinMessage}</p>}
      {joinError && <p className="text-red-500">{joinError}</p>}
    </div>
  );
};

export default PublicTeams;
