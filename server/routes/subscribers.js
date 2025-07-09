const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// Subscribe to newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;
  const newSubscriber = new Subscriber({ email });
  await newSubscriber.save();
  res.status(201).json({ message: "Subscribed successfully" });
});

// Get all subscribers (for admin)
router.get("/", async (req, res) => {
  const subscribers = await Subscriber.find();
  res.json(subscribers);
});

module.exports = router;
