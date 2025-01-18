const express = require("express")
const { verifyPayment, createOrderHandler } = require("../controllers/payment.controllers")
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router();

router.post('/verify-payment',verifyPayment)
router.post('/create-order',createOrderHandler)

module.exports = router
