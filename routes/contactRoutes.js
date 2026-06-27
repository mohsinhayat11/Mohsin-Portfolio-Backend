const express = require("express");
const router = express.Router();
const protectAdmin = require("../middleware/authMiddleware");

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

router.post("/", createContact);
router.get("/", protectAdmin, getContacts);
router.delete("/:id", protectAdmin, deleteContact);

module.exports = router;