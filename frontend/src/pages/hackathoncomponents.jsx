import React, { useState } from "react";
import CreateTeam from "../components/teams";
import PublicTeams from "../components/publicteams";
import LeaderLogin from "../components/leader";

function Hackathon() {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showPublicTeams, setShowPublicTeams] = useState(false);
  const [showLeaderLogin, setLeaderLogin] = useState(false);

  return (
    <div className="App h-screen w-screen bg-[#010A1E]">
      <header className="fixed w-full bg-[#3b1e69] text-white py-4 text-center text-3xl z-10">
        Aurora presents <span className="text-[#9D31A1]">(Hackathon);</span>
      </header>

      <div className="pt-28 flex flex-col items-center">
        <div className="w-full h-full space-y-8 px-6 bg-[#010A1E]">
          {!showCreateTeam && !showPublicTeams && !showLeaderLogin ? (
            <div className="flex flex-col items-center">
              <div className="bg-[#c5abf9] p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-[#6932E2]">Team Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div
                    onClick={() => setShowCreateTeam(true)}
                    className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-out"
                  >
                    <span className="bg-purple-300 text-purple-800 px-2 py-1 rounded-full text-sm">IDEA</span>
                    <h3 className="mt-2 text-xl font-semibold text-black">Create a Team</h3>
                    <p className="text-gray-600">
                      Bring your vision to life! Click here to assemble a team and start collaborating towards your goals.
                    </p>
                  </div>
                  <div
                    onClick={() => setShowPublicTeams(true)}
                    className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-out"
                  >
                    <span className="bg-purple-300 text-purple-800 px-2 py-1 rounded-full text-sm">EXPLORE</span>
                    <h3 className="mt-2 text-xl font-semibold text-black">View Public Teams</h3>
                    <p className="text-gray-600">
                      Discover public teams! Click here to explore available teams and find one to join.
                    </p>
                  </div>
                  <div
                    onClick={() => setLeaderLogin(true)}
                    className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-out"
                  >
                    <span className="bg-purple-300 text-purple-800 px-2 py-1 rounded-full text-sm">IDEA</span>
                    <h3 className="mt-2 text-xl font-semibold text-black">Leader Login</h3>
                    <p className="text-gray-600">
                      Bring your vision to life! Click here to assemble a team and start collaborating towards your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : showCreateTeam ? (
            <CreateTeam onClose={() => setShowCreateTeam(false)} />
          ) : showPublicTeams? (
            <PublicTeams onClose={() => setShowPublicTeams(false)} />
          ) : (
            <LeaderLogin onClose={()=> setLeaderLogin(false)} />
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Hackathon;
