const express = require("express");
const router = express.Router();
const { createTeam, joinTeam, teamList, teamRequest, checkLeader, getUserTeam,
  updateVisibility,
  approveRequest,
  rejectRequest,
  removeMember,
  leaveTeam,
  updateDescription, } = require("../controllers/team.controller")
const authMiddleware = require("../middleware/auth.middleware")


router.post("/create", createTeam)

router.get("/list", teamList)

router.post("/join", authMiddleware, joinTeam)

router.post("/request-join", authMiddleware, teamRequest)

router.post("/check-leader", checkLeader)

router.get("/user-team", getUserTeam);

// Route to update team visibility
router.post("/update-visibility", updateVisibility);

// Route to approve join requests
router.post("/approve-request", approveRequest);

// Route to reject join requests
router.post("/reject-request", rejectRequest);

// Route to remove a team member
router.post("/remove-member", removeMember);

// Route for a user to leave a team
router.post("/leave", leaveTeam);

// Route to update team description
router.post("/update-description", updateDescription);

module.exports = router;