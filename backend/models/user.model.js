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
    year: {
        type: Number,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    interest: {
        type: Array,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    workshopPaid: {
        type: Boolean,
        default: false
    },
    hackathonPaid: {
        type: Boolean,
        default: false
    },
    workshops: {
        type: Array,
        default: [],
    },
    speaker: {
        type: Boolean,
        default: false,
    },
    ctf:{
        type: Boolean,
        default: false
    }

}, { timestamps: true })

userSchema.static('updatePassword', async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) throw new Error('User not found')

    user.password = password
    await user.save()
    return { msg: "Password updated successfully", user }
})



module.exports = mongoose.model('User', userSchema);
