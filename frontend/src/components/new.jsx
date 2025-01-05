import React, { useState } from 'react';

const Newfile = ({ team }) => {
  const [visibility, setVisibility] = useState('public');
  const [description, setDescription] = useState(team?.description || '');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const updateVisibility = () => {
    console.log('Visibility updated to:', visibility);
    // Add API call or state update logic here
  };

  const updateDescription = () => {
    console.log('Description updated to:', description);
    // Add API call or state update logic here
  };

  const handleAddMember = () => {
    console.log('Adding member with email:', newMemberEmail);
    setNewMemberEmail('');
    setShowAddMemberPopup(false);
    // Add API call or logic to add member here
  };

  const handleDissolveTeam = () => {
    console.log('Team dissolved');
    setShowPopup(false);
    // Add API call or logic to dissolve team here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
      <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
        Team: {team?.teamname || 'Unknown'}
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        <strong>Description:</strong> {team?.description}
      </p>

      {/* Visibility Update Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Team Visibility: {visibility}
        </h3>
        <div className="flex items-center gap-4">
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={updateVisibility}
          >
            Update Visibility
          </button>
        </div>
      </div>

      {/* Update Description Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Update Team Description
        </h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={updateDescription}
        >
          Update Description
        </button>
      </div>

      {/* Add Team Member Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add Team Member</h3>
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setShowAddMemberPopup(true)}
        >
          Add Member
        </button>
      </div>

      {/* Dissolve Team Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Dissolve Team</h3>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setShowPopup(true)}
        >
          Dissolve Team
        </button>
      </div>

      {/* Add Member Popup */}
      {showAddMemberPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
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
              className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              Are you sure you want to dissolve your team? This action cannot be undone.
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

export default Newfile;
