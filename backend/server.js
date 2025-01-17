const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Cashfree } = require('cashfree-pg');
const dotenv = require("dotenv");
const userRouter = require("./routes/auth.routes");
const teamRouter = require("./routes/team.routes");
const paymentRouter = require("./routes/payment.routes")
const cashfreeRoutes = require("./routes/cashfreePayment.routes")

const app = express();

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:8080"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

// Connect to MongoDB
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err)
  );

// Routes
app.use("/user", userRouter);
app.use("/team", teamRouter);
app.use("/payment", paymentRouter);
app.use("/cashfree", cashfreeRoutes);

app.get("/api", (req, res) => {
  res.send("API is running...");
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
