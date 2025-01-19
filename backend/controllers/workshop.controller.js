const Workshop = require('../models/workshop.models');

// PATCH request to add users by workshop IDs
exports.addUsersByWorkshopIds = async (req, res) => {
    try {
        const { workshopIds } = req.body;

        // Validate that workshopIds is provided and is an array
        if (!Array.isArray(workshopIds)) {
            return res.status(400).json({ message: "workshopIds must be an array of integers." });
        }

        // Find the single object in the database (assuming there's only one)
        const workshop = await Workshop.findOne();
        if (!workshop) {
            return res.status(404).json({ message: "Workshop object not found." });
        }

        // Map workshop IDs to field names
        const idToFieldMap = {
            1: 'workshop1',
            2: 'workshop2',
            3: 'workshop3',
            4: 'workshop4',
            5: 'workshop5',
            6: 'workshop6',
            7: 'workshop7',
            8: 'workshop8',
            9: 'workshop9',
            10: 'workshop10',
            11: 'workshop11',
            12: 'speaker1',
            13: 'speaker2',
            14: 'ctf',
        };

        // Iterate over the provided workshop IDs and increment the corresponding fields
        workshopIds.forEach(id => {
            const fieldName = idToFieldMap[id];
            if (fieldName && workshop[fieldName] !== undefined) {
                workshop[fieldName] += 1;
            }
        });

        // Save the updated object
        await workshop.save();
        res.status(200).json({ message: "Users added successfully.", workshop });
    } catch (error) {
        res.status(500).json({ message: "An error occurred.", error });
    }
};

exports.substractUsersByWorkshopIds = async (req, res) => {
    try {
        const { workshopIds } = req.body;
        if (!Array.isArray(workshopIds)) {
            return res.status(400).json({ message: "workshopIds must be an array of integers." });
        }

        const workshop = await Workshop.findOne();
        if (!workshop) {
            return res.status(404).json({ message: "Workshop object not found." });
        }

        const idToFieldMap = {
            1: 'workshop1',
            2: 'workshop2',
            3: 'workshop3',
            4: 'workshop4',
            5: 'workshop5',
            6: 'workshop6',
            7: 'workshop7',
            8: 'workshop8',
            9: 'workshop9',
            10: 'workshop10',
            11: 'workshop11',
            12: 'speaker1',
            13: 'speaker2',
            14: 'ctf',
        };

        workshopIds.forEach(id => {
            const fieldName = idToFieldMap[id];
            if (fieldName && workshop[fieldName] !== undefined) {
                workshop[fieldName] -= 1;
            }
        });

        await workshop.save();
        res.status(200).json({ message: "Users removed successfully.", workshop });
    } catch (error) {
        res.status(500).json({ message: "An error occurred.", error });
    }
};
