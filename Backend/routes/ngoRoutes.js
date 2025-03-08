const express = require("express");
const Ngo = require("../models/Ngo");

const router = express.Router();

// Create NGO
router.post("/", async (req, res) => {
  try {
    const newNgo = new Ngo(req.body);
    await newNgo.save();
    res.status(201).json({ message: "NGO Registered Successfully!", ngo: newNgo });
  } catch (error) {
    res.status(500).json({ error: "Error registering NGO" });
  }
});

// Fetch NGOs
router.get("/", async (req, res) => {
  const ngos = await Ngo.find();
  res.json(ngos);
});

// Delete NGO
router.delete("/:id", async (req, res) => {
  await Ngo.findByIdAndDelete(req.params.id);
  res.json({ message: "NGO Deleted Successfully!" });
});

module.exports = router;
