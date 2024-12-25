const Razorpay = require( "razorpay" )
const dotenv = require("dotenv")

dotenv.config();

// Singleton Razorpay instance
let razorpayInstance;

const createRazorPayinstance = () => {
    if (!razorpayInstance) {
        // Validate environment variables
        if (!process.env.KEY_ID || !process.env.KEY_SECRET) {
            throw new Error("Razorpay KEY_ID and KEY_SECRET are required. Please set them in your environment variables.");
        }

        // Create Razorpay instance
        razorpayInstance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });
    }
    return razorpayInstance;
};
module.exports = {createRazorPayinstance}
