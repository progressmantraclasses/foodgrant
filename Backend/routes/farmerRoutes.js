const express = require("express");
const router = express.Router();
const Farmer = require("../models/Farmer");

// Create a new Farmer entry
router.post("/", async (req, res) => {
  try {
    const newFarmer = await Farmer.create(req.body);
    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Farmers
router.get("/", async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific Farmer by ID
router.get("/:id", async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.json(farmer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Farmer details
router.put("/:id", async (req, res) => {
  try {
    const updatedFarmer = await Farmer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFarmer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Farmer entry
router.delete("/:id", async (req, res) => {
  try {
    await Farmer.findByIdAndDelete(req.params.id);
    res.json({ message: "Farmer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
