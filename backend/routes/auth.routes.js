const express = require('express');
<<<<<<< Updated upstream
const { registerUser, loginUser } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authMiddleware, (req, res) => {
=======
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/jwtUtils");
const { registerUser, loginUser, updateWorkshops, handlePasswordReset } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const User = require("../models/user.model");
const { sendOTP, verifyOTP } = require('../controllers/otp');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updateWorkshops', updateWorkshops);
router.post('/forgotpassword/sendotp', sendOTP);
router.post('/forgotpassword/verifyotp', verifyOTP);
router.post('/forgotpassword/resetpassword', handlePasswordReset);
router.get('/profile', (req, res) => {
    console.log(req);
>>>>>>> Stashed changes
    res.json({ user: req.user });
});

module.exports = router;
