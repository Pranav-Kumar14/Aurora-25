import React, { useState, useEffect } from 'react';
import api from '../services/api';
import BaseUrl from '../BaseUrl';
import { workshops } from '../constants/workshops'
import * as XLSX from 'xlsx';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState('all');
  const navigate = useNavigate(); 
  const {user} = useAuth();

  const admins = ["istemancomm2425@gmail.com", "isteboard2425@gmail.com"]

  if(admins.includes(user?.email) === false){
    navigate('/*');
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get(`${BaseUrl}/user/get-all-users`);
      setAllUsers(response.data.allUsers);
      setFilteredUsers(response.data.allUsers);
    };
    fetchUsers();

  }, []);

  const handleFilterChange = (e) => {
    const workshopId = e.target.value;
    setSelectedWorkshop(workshopId);

    if (workshopId === 'all') {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter((user) =>
        user.workshops.includes(parseInt(workshopId))
      );
      setFilteredUsers(filtered);
    }
  };

  function downloadData() {
    const workbook = XLSX.utils.book_new();
  
    const formattedAllUsers = allUsers.map((user) => ({
      Email: user.email,
      "Name": user.fullName,
      "College ID": user.collegeid,
      Year: user.year,
      Branch: user.branch,
      Phone: user.phone,
      Workshops: user.workshops
        .map((id) => {
          const workshop = workshops.find((w) => w.id === id);
          return workshop.club;
        })
        .join(', '),
    }));
  
    const allUsersSheet = XLSX.utils.json_to_sheet(formattedAllUsers);
    XLSX.utils.book_append_sheet(workbook, allUsersSheet, "All Registrations");
  
    workshops.forEach((workshop) => {
      const workshopRegistrations = allUsers
        .filter((user) => user.workshops.includes(workshop.id))
        .map((user) => ({
          Email: user.email,
          "Name": user.fullName,
          "College ID": user.collegeid,
          Year: user.year,
          Branch: user.branch,
          Phone: user.phone,
        }));
  
      const workshopSheet = XLSX.utils.json_to_sheet(workshopRegistrations);
      XLSX.utils.book_append_sheet(workbook, workshopSheet, workshop.club);
    });
  
    const name = "WorkshopRegistrations";
    XLSX.writeFile(workbook, `${name}.xlsx`);
  }
  


  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Total Registrations: {filteredUsers.length}
      </h1>

      <div className="flex justify-between items-center mb-6">
        <div>
          <label htmlFor="workshopFilter" className="mr-2">
            Filter by Workshop:
          </label>
          <select
            id="workshopFilter"
            className="bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded"
            value={selectedWorkshop}
            onChange={handleFilterChange}
          >
            <option value="all">All Workshops</option>
            {workshops.map((workshop) => (
              <option key={workshop.id} value={workshop.id}>
                {workshop.club + " -- " + workshop.title}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => downloadData()}
        >
          Download Data
        </button>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
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
                    ? user.workshops
                      .map((id) => {
                        const workshop = workshops.find((w) => w.id === id);
                        return workshop.club;
                      })
                      .join(', ')
                    : 'None'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;