const express = require("express");
const router = express.Router();
const { createTeam, joinTeam, teamList, teamRequest, checkLeader, getUserTeam,
  updateVisibility,
  approveRequest,
  rejectRequest,
  removeMember,
  leaveTeam,
  updateDescription,teamLists,CancelRequest, } = require("../controllers/team.controller")
// const authMiddleware = require("../middleware/auth.middleware")


router.post("/create", createTeam)

router.get("/list/", teamList)
router.get("/list/team", teamLists)


router.post("/join",joinTeam)

router.post("/request-join", teamRequest)

router.post("/check-leader", checkLeader)

router.get("/user-team", getUserTeam);


router.post("/update-visibility", updateVisibility);

router.post("/approve-request", approveRequest);

router.post("/reject-request", rejectRequest);

router.post("/remove-member", removeMember);

router.post("/leave", leaveTeam);

router.post("/update-description", updateDescription);

router.post("/cancel-request",CancelRequest);

module.exports = router;