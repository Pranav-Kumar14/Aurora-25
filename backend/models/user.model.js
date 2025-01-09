const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: null,

    },
    collegeid: {
        type: Number,
        required: true,

    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);

