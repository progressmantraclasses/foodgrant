const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

// Create a new Business entry
router.post("/", async (req, res) => {
  try {
    const newBusiness = await Business.create(req.body);
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific Business by ID
router.get("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Business details
router.put("/:id", async (req, res) => {
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Business entry
router.delete("/:id", async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ message: "Business deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
