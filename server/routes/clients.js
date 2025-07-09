const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Get all clients
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// Add a new client
router.post("/", async  (req, res) => {
  const { image, name, description, designation } = req.body;
  const newClient = new Client({ image, name, description, designation });
  await newClient.save();
  res.status(201).json({ message: "Client added" });
});

module.exports = router;
