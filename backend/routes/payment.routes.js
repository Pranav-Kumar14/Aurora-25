const express = require("express")
const { verifyPayment, createOrder } = require("../controllers/payment.controllers")
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router();

router.post('/verify-payment',verifyPayment)
router.post('/create-order',authMiddleware, createOrder)

module.exports = router
