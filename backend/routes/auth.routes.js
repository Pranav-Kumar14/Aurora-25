const express = require('express');
const { registerUser, loginUser, updateWorkshops } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updateWorkshops', updateWorkshops);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
