const { createRazorPayinstance } = require ("../utils/razorpay.config.js");
const {crypto} = require ("crypto");

const razorpayInstance = createRazorPayinstance();

const createOrder = async (req, res) => {
    const { courseId, amount } = req.body;

    // Create order options
    const options = {
        amount: amount * 100, // Amount in paise (smallest currency unit)
        currency: "INR",
        receipt: `receipt_order_${courseId}`, // Unique receipt ID
    };

    try {
        const order = await razorpayInstance.orders.create(options);
        return res.status(200).json({
            success: true,
            order,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message,
        });
    }
};

const verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;
    const secret = process.env.KEY_SECRET; // Ensure this is set in your environment variables

    // Create HMAC object
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(order_id + "|" + payment_id);

    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === signature) {
        return res.status(200).json({
            success: true,
            message: "Payment verified",
        });
    } else {
        return res.status(400).json({
            success: false,
            message: "Payment is not verified",
        });
    }
};

module.exports = { createOrder, verifyPayment };
