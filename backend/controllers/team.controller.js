const Team = require("../models/hackathonTeam.models");
const User = require("../models/user.model");
const TeamLimit = 5;

const {
  sendJoinEmail,
  sendLeaveEmail,
  sendStatusUpdateEmail,
  sendTeamCreationEmail,
  sendJoinRequestEmail,
  sendApprovalEmail,
  sendRejectionEmail,
  sendRemoveMemberEmail,
  sendStatusChangeEmail,
} = require("../utils/mailContent.js");

const createTeam = async (req, res) => {
  const { teamname, email, visibility } = req.body;
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

    const team = await Team.create({
      teamname,
      leader: user._id,
      members: [user._id],
      joinRequests: [],
      visibility: teamVisibility,
    });

    user.team = team._id;
    await user.save();
    sendTeamCreationEmail(user.email, team.teamname, user.username);

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
    sendJoinRequestEmail(user.email);

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
  const { teamName, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.team) {
      return res.json({ success: false, message: "You are already in a Team" });
    }

    const team = await Team.findOne({ teamname: teamName });
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
    sendJoinEmail(email);

    return res.json({
      success: true,
      message: "Joined team successfully",
      team,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "ServerError",
      error: error.message,
    });
  }
};


const teamList = async (req, res) => {
  const { email } = req.params;

  try {
    let teams = [];

    if (email) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }

      const leaderTeams = await Team.find({ leader: user._id })
        .populate("leader", "username email")
        .populate("members", "username email")
        .populate("joinRequests", "username email")
        .select("teamname description visibility registered");

      if (leaderTeams.length > 0) {
        return res.json({ success: true, teams: leaderTeams });
      }


      const memberTeams = await Team.find({ members: user._id })
        .populate("leader", "username email")
        .populate("members", "username email")
        .select("teamname description visibility registered");

      if (memberTeams.length > 0) {
       
        return res.json({ success: true, teams: memberTeams });
      }
      return res.json({
        success: false,
        message: "User is not a leader or a member of any team.",
      });
    } else {
      // Fetch public teams for general users
      teams = await Team.find({ visibility: "public" })
        .populate("leader", "username email")
        .select("teamname description visibility");

      return res.json({ success: true, teams });
    }
  } catch (error) {
    return res.json({ success: false, message: "Server error", error: error.message });
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
      .populate("members", "username email")
      .populate("leader", "username email");

    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    return res.json({
      success: true,
      team: {
        name: team.teamname,
        description: team.description,
        leader: team.leader,
        members: team.members.map((member) => member.username),
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
    sendStatusChangeEmail(leaderEmail, visibility);

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
    const team = await Team.findOne({ _id: teamId });
    if (!team) {
      return res.json({ success: false, message: "Team Not Found" });
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
  const { teamId, userId, leaderEmail } = req.body;

  try {
    const leader = await User.findOne({ email: leaderEmail });
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
    const user = await User.findOne({ email }).populate("team");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (!user.team) {
      return res.json({ success: false, message: "You are not in a Team" });
    }

    const team = await Team.findOne({ _id: user.team._id });
    if (!team) {
      return res.json({ success: false, message: "Team not found" });
    }

    team.members = team.members.filter(
      (member) => member.toString() !== user._id.toString()
    );

    if (team.leader.toString() === user._id.toString()) {
      await team.deleteOne();
      user.team = null;
      await user.save();
      sendLeaveEmail(email);
      return res.json({
        success: true,
        message: "You left and Your Team is Collapsed",
      });
    }

    await team.save();
    user.team = null;
    await user.save();
    sendLeaveEmail(email);
    return res.json({
      success: true,
      message: "You left the Team Successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `ServerError ${error}`,
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
    sendStatusUpdateEmail(leaderEmail, "description updated");

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
};
