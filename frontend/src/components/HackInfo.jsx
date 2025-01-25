const HackInfo = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Hackathon Team Info</h2>
        <button
          onClick={onClose}
          className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
        >
          X
        </button>
      </div>
      <div className="text-left text-gray-700 text-sm font-mono leading-relaxed space-y-4">
        <p>
          <strong>1.</strong> Enter a <span className="font-semibold">unique team name</span> to create your team.
        </p>
        <p>
          <strong>2.</strong> Your <span className="font-semibold">email is automatically linked</span> to the team and cannot be changed.
        </p>
        <p>
          <strong>3.</strong> Set the visibility to <span className="font-semibold">"Private"</span> to restrict access or 
          <span className="font-semibold"> "Public"</span> to allow others to request to join.
        </p>
        <p>
          <strong>4.</strong> Use the <span className="font-semibold">"Manage Team"</span> section to approve or reject join requests and update team details.
        </p>
        <p>
          <strong>5.</strong> <span className="font-semibold">Only the Team Leader</span> is allowed to make any changes to the team.
        </p>
        <p>
          <strong>6.</strong> If the leader leaves the team, the <span className="font-semibold">entire team is dissolved</span>.
        </p>
      </div>
    </div>
  );
};

export default HackInfo;
