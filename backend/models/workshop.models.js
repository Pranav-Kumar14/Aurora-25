const mongoose = require('mongoose');
const { Schema } = mongoose;

const workshopSchema = new Schema({
    workshop1: { type: Number, required: true },
    workshop2: { type: Number, required: true },
    workshop3: { type: Number, required: true },
    workshop4: { type: Number, required: true },
    workshop5: { type: Number, required: true },
    workshop6: { type: Number, required: true },
    workshop7: { type: Number, required: true },
    workshop8: { type: Number, required: true },
    workshop9: { type: Number, required: true },
    workshop10: { type: Number, required: true },
    workshop11: { type: Number, required: true },
    speaker1: { type: Number, required: true },
    speaker2: { type: Number, required: true },
    ctf: { type: Number, required: true },
});

// Function to add users
workshopSchema.methods.addUsers = function (userArray) {
    // userArray should have 14 numbers, corresponding to workshop1 to ctf
    const fieldNames = [
        'workshop1', 'workshop2', 'workshop3', 'workshop4', 'workshop5', 'workshop6',
        'workshop7', 'workshop8', 'workshop9', 'workshop10', 'workshop11',
        'speaker1', 'speaker2', 'ctf'
    ];

    // Iterate through userArray and corresponding fields, incrementing each value
    for (let i = 0; i < userArray.length; i++) {
        if (this[fieldNames[i]] !== undefined) {
            this[fieldNames[i]] += userArray[i];
        }
    }

    // Save the updated schema
    return this.save();
};

// Function to subtract users
workshopSchema.methods.subtractUsers = function (userArray) {
    const fieldNames = [
        'workshop1', 'workshop2', 'workshop3', 'workshop4', 'workshop5', 'workshop6',
        'workshop7', 'workshop8', 'workshop9', 'workshop10', 'workshop11',
        'speaker1', 'speaker2', 'ctf'
    ];

    // Iterate through userArray and corresponding fields, decrementing each value
    for (let i = 0; i < userArray.length; i++) {
        if (this[fieldNames[i]] !== undefined) {
            this[fieldNames[i]] -= userArray[i];
        }
    }

    // Save the updated schema
    return this.save();
};

// Create a model
const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
