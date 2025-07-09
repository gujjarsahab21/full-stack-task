const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Submit contact form
router.post("/", async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  const newContact = new Contact({ fullName, email, mobile, city });
  await newContact.save();
  res.status(201).json({ message: "Contact submitted" });
});

// Get all contacts (for admin)
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;
