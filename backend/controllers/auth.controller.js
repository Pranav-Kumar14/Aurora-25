const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { generateToken } = require("../utils/jwtUtils");
const e = require("express");

const registerUser = async (req, res) => {
  const { fullName, username, email, password, collegeid, year, branch, interest, phone } = req.body;

  if ((fullName, username === "" || email === "" || password === "" || collegeid === "" || year === "" || branch === "" || interest === "" || phone === "")) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }, { collegeid }] });
  if (existingUser) {
    return res.status(400).json({ message: "Username or email or College ID already exists" });
  }
  let newUser
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = await User.create({
      username: username.toLowerCase(),
      fullName,
      year,
      branch,
      interest,
      phone,
      email,
      collegeid,
      password: hashedPassword,
    });
  } catch (error) {
    return res.status(500).json({ message: `Error creating user ${error}` });
  }

  const createdUser = await User.findById(newUser._id).select(
    "-password"
  );

  if (!createdUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res
    .status(201)
    .json({ message: "User created successfully", user: createdUser });

};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(user);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

async function handlePasswordReset(req, res) {
  const email = req.body.email
  const newPassword = req.body.newPassword
  const confirmPassword = req.body.confirmPassword
  if (newPassword !== confirmPassword) {
    return res.status(404).json({ error: "Passwords do not match" })
  }
  try {
    // const msg = await updatePassword(email, newPassword)
    const user = await User.findOne({ email })
    if (!user) throw new Error('User not found')
    const id = user._id;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(id, { password: hashedPassword });
    console.log("password updated successfully! ")
  } catch (error) {
    return res.status(404).json({ error: error })
  }
  return res.status(200).json({ message: "Password Reset Successful" })
}

const updateWorkshops = async (req, res) => {
  const { userId, selectedWorkshops } = req.body;

  if (!userId || !Array.isArray(selectedWorkshops)) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.workshops = selectedWorkshops; // Update workshops array
    await user.save();

    return res.status(200).json({
      message: "Workshops updated successfully",
      workshops: user.workshops,
    });
  } catch (error) {
    console.error("Error updating workshops:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const upateProfile = async (req,res) => {
  try {
    const data = req.body.userId;
  const user = await User.findById(data); 
  user.workshopPaid = true;
  await user.save();

  return res.status(200).json({
    message: "Successfully paid for workshop"
  })
  } catch (error) {
    return res.status(500).json({
      message: "Error saving workshop to paid"
    })
  }
  
}


module.exports = { registerUser, loginUser, changeCurrentPassword, updateWorkshops, upateProfile};
