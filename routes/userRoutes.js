const express = require("express");
const {
  createPerson,
  getAllUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userControler.js");
const router = express.Router();

router.post("/", createPerson);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
