const mongoose = require('mongoose');
const { Schema } = mongoose;

const workshopSchema = new Schema({
    workshop1: { type: Number, default: 0 },
    workshop2: { type: Number, default: 0 },
    workshop3: { type: Number, default: 0 },
    workshop4: { type: Number, default: 0 },
    workshop5: { type: Number, default: 0 },
    workshop6: { type: Number, default: 0 },
    workshop7: { type: Number, default: 0 },
    workshop8: { type: Number, default: 0 },
    workshop9: { type: Number, default: 0 },
    workshop10: { type: Number, default: 0 },
    workshop11: { type: Number, default: 0 },
    speaker1: { type: Number, default: 0 },
    speaker2: { type: Number, default: 0 },
    ctf: { type: Number, default: 0 },
});

// Create and export the Workshop model
const Workshop = mongoose.model('Workshop', workshopSchema);
module.exports = Workshop;
