const express = require('express');
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/jwtUtils");
const { registerUser, loginUser, updateWorkshops, upateProfile} = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const User = require("../models/user.model");

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updateWorkshops', updateWorkshops);

router.get('/profile', (req, res) => {
    console.log(req);
    res.json({ user: req.user });
});
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

router.post('/newtoken', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        const token = generateToken(user);
        res.status(200).json({ message: "Profile retrieved", token, user });
    } catch (err) {
        res.status(500).json('Failed to retrieve profile!')

    }


})

router.post('/updateProfile',upateProfile);
module.exports = router;
