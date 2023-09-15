const express = require("express");
const {
  createPerson,
  getAllUsers,
  deleteUser,
  updateUser,
  getSingleUser,
} = require("../controllers/userControler.js");
const router = express.Router();

router.post("/", createPerson);
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
