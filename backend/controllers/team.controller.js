const Team = require("../models/hackathonTeam.models");
const User = require("../models/user.model");
const TeamLimit = 5;

const {
  sendJoinEmail,
  sendLeaveEmail,
 
  sendTeamCreationEmail,
  sendJoinRequestEmail,
  sendApprovalEmail,
  sendRejectionEmail,
  sendRemoveMemberEmail,
} = require("../utils/mailContent.js");

const createTeam = async (req, res) => {
  const { teamname, email, visibility, description } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    if (user.team) {
      return res.json({
        success: false,
        message: "You are already in a team.",
      });
    }

    const existingTeam = await Team.findOne({ teamname });
    if (existingTeam) {
      return res.json({
        success: false,
        message: "A team with this teamname already exists.",
      });
    }

    const teamVisibility = visibility || "private";
    const teamDescription = description || "";

    const team = await Team.create({
      teamname,
      leader: user._id,
      members: [user._id],
      joinRequests: [],
      visibility: teamVisibility,
      description: teamDescription,
    });

    user.team = team._id;
    await user.save();
    console.log(user.email, team.teamname, user.fullName)
    sendTeamCreationEmail(user.email, team.teamname, user.fullName);

    return res.json({
      success: true,
      message: "Team created successfully!",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `Server error:${error}`,
      error: error.message,
    });
  }
};

const teamRequest = async (req, res) => {
  const { teamId, userId } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.team) {
      return res.json({ success: false, message: "You are already in a Team" });
    }

    const team = await Team.findOne({ _id: teamId });
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    if (team.visibility === "private") {
      return res.json({
        success: false,
        message: "This team is private. You cannot send a join request.",
      });
    }

    if (team.members.length >= TeamLimit) {
      return res.json({
        success: false,
        message: "Team is already full (TeamLimit members).",
      });
    }

    if (team.joinRequests.includes(user._id)) {
      return res.json({
        success: false,
        message: "You have already requested to join this team.",
      });
    }

    team.joinRequests.push(user._id);
    await team.save();
    sendJoinRequestEmail(team.leader.email,team.teamname,user.fullName);

    return res.json({
      success: true,
      message: "Join request sent successfully",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const joinTeam = async (req, res) => {
  const { teamId, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.team) {
      return res.json({ success: false, message: "Already in a Team" });
    }

    const team = await Team.findById(teamId);
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }
    if (team.members.length >= TeamLimit) {
      return res.json({ success: false, message: "Team is already full " });
    }

    team.members.push(user._id);
    await team.save();

    user.team = team._id;
    await user.save();
    sendApprovalEmail(email,team.teamnamex);

    return res.json({
      success: true,
      message: "Joined team successfully",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `ServerError ${error}`,
      error: error.message,
    });
  }
};

const teamLists = async (req, res) => {
 const {email}= req.query;
 try {
  

  if (email) {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const leaderTeams = await Team.find({ leader: user._id })
      .populate("leader", "fullName email")
      .populate("members", "fullName email")
      .populate("joinRequests", "fullName email")
      .select("teamname description visibility registered");

    if (leaderTeams.length > 0) {
      return res.json({ success: true, teams: leaderTeams });
    }

    const memberTeams = await Team.find({ members: user._id })
      .populate("leader", "fullName email")
      .populate("members", "fullName email")
      .select("teamname description visibility registered");

    if (memberTeams.length > 0) {
      return res.json({ success: true, teams: memberTeams });
    }
    return res.json({
      success: false,
      message: "User is not a leader or a member of any team.",
    });
  }  } catch (error) {
  console.log("error")
  }
};
const teamList = async (req, res) => {
  try {
    let teams = [];
    // Fetch public teams for general users
    teams = await Team.find({ visibility: "public" })
      .populate("leader", "fullName email")
      .populate("members", "fullName email")
      .select("teamname description visibility");

    return res.json({ success: true, teams });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const checkLeader = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not registered." });
    }

    const team = await Team.findOne({ leader: user._id });
    if (team) {
      return res.json({
        success: true,
        isLeader: true,
        teamName: team.teamname,
      });
    } else {
      return res.json({ success: true, isLeader: false });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getUserTeam = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email }).populate("team");

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (!user.team) {
      return res.json({
        success: false,
        message: "You are not part of a team",
      });
    }

    const team = await Team.findOne({ _id: user.team._id })
      .populate("members", "fullName email")
      .populate("leader", "fullName email");

    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    return res.json({
      success: true,
      team: {
        name: team.teamname,
        description: team.description,
        leader: team.leader,
        members: team.members.map((member) => member.fullName),
      },
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

// Controller to update team visibility
const updateVisibility = async (req, res) => {
  const { teamId, leaderEmail, visibility } = req.body;

  try {
    const leader = await User.findOne({ email: leaderEmail });
    if (!leader) {
      return res.json({ success: false, message: "Leader not found" });
    }

    const team = await Team.findOne({ _id: teamId });
    if (!team || team.leader.toString() !== leader._id.toString()) {
      return res.json({
        success: false,
        message: "You are not authorized to update this team's visibility.",
      });
    }

    if (!["public", "private"].includes(visibility)) {
      return res.json({
        success: false,
        message: "Invalid visibility option. Use 'public' or 'private'.",
      });
    }

    team.visibility = visibility;
    await team.save();
    

    return res.json({
      success: true,
      message: `Team visibility updated to ${visibility}.`,
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Controller to approve join requests
const approveRequest = async (req, res) => {
  const { teamId, userId, leaderEmail } = req.body;

  try {
    const leader = await User.findOne({ email: leaderEmail });
    if (!leader) {
      return res.json({ success: false, message: "Invalid Id" });
    }

    const team = await Team.findOne({ _id: teamId });
    if (!team || team.leader.toString() !== leader._id.toString()) {
      return res.json({
        success: false,
        message: "You are not authorized to approve requests for this team.",
      });
    }

    if (team.members.length >= TeamLimit) {
      return res.json({
        success: false,
        message: "Team is already full (TeamLimit members).",
      });
    }

    const userIndex = team.joinRequests.indexOf(userId);
    if (userIndex === -1) {
      return res.json({
        success: false,
        message: "No such join request found.",
      });
    }

    team.joinRequests.splice(userIndex, 1);
    team.members.push(userId);

    const user = await User.findOne({ _id: userId });
    user.team = team._id;
    await user.save();
    await team.save();
    sendApprovalEmail(leaderEmail, team.teamname);

    return res.json({
      success: true,
      message: "Member approved successfully",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Controller to reject join requests
const rejectRequest = async (req, res) => {
  const { teamId, userId } = req.body;

  try {
    const team = await Team.findById(teamId);
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }
    const userIndex = team.joinRequests.indexOf(userId);
    if (userIndex === -1) {
      return res.json({
        success: false,
        message: "No such join request found.",
      });
    }

    team.joinRequests.splice(userIndex, 1);
    await team.save();
    sendRejectionEmail(leaderEmail, team.teamname);

    return res.json({ success: true, message: "Join request rejected", team });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Controller to remove a team member
const removeMember = async (req, res) => {
  const { teamId, userId, leaderId } = req.body;

  try {
    const leader = await User.findById(leaderId);
    if (!leader) {
      return res.json({ success: false, message: "Leader not found" });
    }

    const team = await Team.findOne({ _id: teamId });
    if (!team || team.leader.toString() !== leader._id.toString()) {
      return res.json({
        success: false,
        message: "You are not authorized to remove members from this team.",
      });
    }

    const memberIndex = team.members.indexOf(userId);
    if (memberIndex === -1) {
      return res.json({
        success: false,
        message: "User is not a member of the team.",
      });
    }

    team.members.splice(memberIndex, 1);

    const user = await User.findOne({ _id: userId });
    user.team = null;
    await user.save();
    await team.save();
    sendRemoveMemberEmail(leaderEmail, team.teamname);

    return res.json({
      success: true,
      message: "Member removed successfully",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Controller to leave a team
const leaveTeam = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user and populate their team
    const user = await User.findOne({ email }).populate("team");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (!user.team) {
      return res.json({ success: false, message: "You are not in a Team" });
    }

    // Get the team details
    const team = await Team.findOne({ _id: user.team._id }).populate("members");
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    // If the user is the team leader, dissolve the team
    if (team.leader.toString() === user._id.toString()) {
      // Remove the team reference from all members
      await Promise.all(
        team.members.map(async (memberId) => {
          const member = await User.findById(memberId);
          if (member) {
            member.team = null;
            await member.save();
          }
        })
      );

      // Delete the team
      await team.deleteOne();
      sendLeaveEmail(email);

      return res.json({
        success: true,
        message: "You left and your Team has been dissolved.",
      });
    }

    // If the user is not the leader, remove them from the team
    team.members = team.members.filter(
      (member) => member._id.toString() !== user._id.toString()
    );
    await team.save();

    user.team = null;
    await user.save();
    sendLeaveEmail(email);

    return res.json({
      success: true,
      message: "You left the Team Successfully.",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `Server Error: ${error.message}`,
      error: error.message,
    });
  }
};

// Controller to update team description
const updateDescription = async (req, res) => {
  const { teamId, leaderEmail, description } = req.body;

  try {
    const leader = await User.findOne({ email: leaderEmail });
    if (!leader) {
      return res.json({ success: false, message: "Leader not found" });
    }

    const team = await Team.findById(teamId);
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    if (team.leader.toString() !== leader._id.toString()) {
      return res.json({
        success: false,
        message: "You are not the leader of this team",
      });
    }

    team.description = description;
    await team.save();
  

    return res.json({
      success: true,
      message: "Description updated successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error updating description",
      error: error.message,
    });
  }
};

const CancelRequest =async (req, res) => {
  const { teamId, userId } = req.body;

  try {
    // Find the team by ID
    const team = await Team.findById(teamId);
    if (!team) {
      return res.json({ success: false, message: "Team not found." });
    }

    // Check if the user is in joinRequests
    const userIndex = team.joinRequests.findIndex(
      (request) => request.toString() === userId.toString()
    );

    if (userIndex === -1) {
      return res.json({
        success: false,
        message: "You have no pending join request for this team.",
      });
    }

    // Remove the user from joinRequests
    team.joinRequests.splice(userIndex, 1);
    await team.save();

    return res.json({
      success: true,
      message: "Your join request has been successfully canceled.",
      team,
    });
  } catch (error) {
    console.error("Error canceling join request:", error.message);
    return res.json({
      success: false,
      message: `Server error occurred.${error}`,
      error: error.message,
    });
  }
}

module.exports = {
  createTeam,
  joinTeam,
  teamList,
  teamRequest,
  checkLeader,
  getUserTeam,
  updateVisibility,
  approveRequest,
  rejectRequest,
  removeMember,
  leaveTeam,
  updateDescription,
  teamLists,
  CancelRequest,
};
