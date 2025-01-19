const express = require('express');
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/jwtUtils");
const {
    registerUser,
    loginUser,
    updateWorkshops,
    updateSpeakers,
    handlePasswordReset,
    updateCTF,
    updateProfile
} = require('../controllers/auth.controller');
const { sendOTP, verifyOTP } = require('../controllers/otp');
const authMiddleware = require('../middleware/auth.middleware');
const User = require("../models/user.model");
const Workshop = require('../models/workshop.models');
const { addUsersByWorkshopIds, substractUsersByWorkshopIds } = require('../controllers/workshop.controller');
const router = express.Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updateWorkshops', updateWorkshops);
router.post('/updateSpeakers', updateSpeakers);
router.post('/ctf', updateCTF);
router.post('/forgotpassword/sendotp', sendOTP);
router.post('/forgotpassword/verifyotp', verifyOTP);
router.post('/forgotpassword/resetpassword', handlePasswordReset);
//add-substract
router.put('/workshop/add', addUsersByWorkshopIds);
router.put('/workshop/substract', substractUsersByWorkshopIds);

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});

// Token verification
router.post('/token', (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ success: true, data: decoded });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

// Generate a new token
router.post('/newtoken', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: "Profile retrieved", token, user });
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve profile!' });
    }
});

// Update user profile
router.post('/updateProfile', updateProfile);

module.exports = router;
