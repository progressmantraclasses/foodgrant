const express = require("express");
const router = express.Router();
const Ngo = require("../models/Ngo");

// Create
router.post("/", async (req, res) => {
  try {
    const newNgo = await Ngo.create(req.body);
    res.status(201).json(newNgo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read (Fetch all NGOs)
router.get("/", async (req, res) => {
  try {
    const ngos = await Ngo.find();
    res.json(ngos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedNgo = await Ngo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNgo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Ngo.findByIdAndDelete(req.params.id);
    res.json({ message: "NGO deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
