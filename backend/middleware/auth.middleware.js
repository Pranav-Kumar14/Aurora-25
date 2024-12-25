const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            return res.status(401).send({ message: "Access denied. No token provided." });
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        req.user = user;
        next()
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });

    }
};

module.exports = authMiddleware;
