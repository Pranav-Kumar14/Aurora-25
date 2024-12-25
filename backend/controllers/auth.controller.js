const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { generateToken } = require("../utils/jwtUtils");
const { ApiError } = require("../utils/ApiError");
const {ApiResponse} = require("../utils/ApiResponse")
const e = require("express");

const registerUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  if ((fullName, username === "" || email === "" || password === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new ApiError(409, "Username or Email already exists");
  }
  let newUser
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = await User.create({
      username: username.toLowerCase(),
      fullName,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    throw new ApiError(500, "Error creating user");
  }

  const createdUser = await User.findById(newUser._id).select(
    "-password"
  );

  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User successfully registered"));
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    throw new ApiError(400, "All fields are required");
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(user._id);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

const changeCurrentPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body

  const user = await User.findById(req.user?._id)
  if (!user) {
    throw new ApiError(404, "User not found")
  }
  const isPasswordCorrect = await user.isPassword(oldPassword)

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Password Incorrect")
  }
  user.passowrd = await bcrypt.hash(newPassword, 10);
  await user.save()

  return res
    .status(200)
    .json(
      new ApiResponse(200, {}, "Password Changed Successfully")
    )
}

module.exports = { registerUser, loginUser , changeCurrentPassword};
