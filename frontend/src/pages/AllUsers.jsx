import React, { useState, useEffect } from 'react';
import api from '../services/api';
import BaseUrl from '../BaseUrl';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get(`${BaseUrl}/user/get-all-users`);
      setAllUsers(response.data.allUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Total Registrations: {allUsers.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">Email</th>
              <th className="border border-gray-700 px-4 py-2">Full Name</th>
              <th className="border border-gray-700 px-4 py-2">College ID</th>
              <th className="border border-gray-700 px-4 py-2">Year</th>
              <th className="border border-gray-700 px-4 py-2">Branch</th>
              <th className="border border-gray-700 px-4 py-2">Phone</th>
              <th className="border border-gray-700 px-4 py-2">Workshops</th>
              <th className="border border-gray-700 px-4 py-2">Speaker</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
              >
                <td className="border border-gray-700 px-4 py-2">{user.email}</td>
                <td className="border border-gray-700 px-4 py-2">{user.fullName}</td>
                <td className="border border-gray-700 px-4 py-2">{user.collegeid}</td>
                <td className="border border-gray-700 px-4 py-2">{user.year}</td>
                <td className="border border-gray-700 px-4 py-2">{user.branch}</td>
                <td className="border border-gray-700 px-4 py-2">{user.phone}</td>
                <td className="border border-gray-700 px-4 py-2">
                  {user.workshops.length > 0
                    ? user.workshops.join(', ')
                    : 'None'}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {user.speaker ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
