const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", async (req, res) => {
  const { image, name, description } = req.body;
  const newProject = new Project({ image, name, description });
  await newProject.save();
  res.status(201).json({ message: "Project created" });
});

module.exports = router;
