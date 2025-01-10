const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username, email: user.email, fullName: user.fullName, team: user.team, collegeid: user.collegeid, wpaid: user.workshopPaid, hPaid: user.hackathonPaid, workshops: user.workshops }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
