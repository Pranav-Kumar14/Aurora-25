const express = require('express');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser, updateWorkshops } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

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
module.exports = router;
