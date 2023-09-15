const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

//Create user
const createPerson = asyncHandler(async (req, res) => {
  try {
    const newUser = new User({ name: req.body.name });
    await newUser.save();
    res.status(201).json({
      message: "User Created",
      newUser,
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//Update User
const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Delete User
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(204).json({
      success: true,
      message: "User successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

//Get a Single User
const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

//Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

module.exports = {
  createPerson,
  deleteUser,
  updateUser,
  getAllUsers,
  getSingleUser,
};
