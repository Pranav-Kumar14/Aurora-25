const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/auth.routes");
const teamRouter = require("./routes/team.routes");
const paymentRouter = require("./routes/payment.routes")

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:6000' }));
app.use(express.json());

// Connect to MongoDB
const PORT = process.env.PORT || 6000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err)
  );

// Routes
app.use("/user", userRouter);
app.use("/team", teamRouter);
app.use("/payment", paymentRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
