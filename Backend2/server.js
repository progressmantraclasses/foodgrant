require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define Schema
const contactSchema = new mongoose.Schema({
  fullName: String,
  profession: String,
  subject: String,
  message: String,
  phone: String,
  email: String,
  submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route to handle form submission
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error });
  }
});

// API Route to fetch filtered messages for admin dashboard
app.get("/api/contact", async (req, res) => {
  try {
    const { searchQuery, startDate, endDate } = req.query;
    let filter = {};
    
    if (searchQuery) {
      const regex = new RegExp(searchQuery, "i");
      filter.$or = [{ subject: regex }, { profession: regex }];
    }
    
    if (startDate && endDate) {
      filter.submittedAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    const messages = await Contact.find(filter);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
});

// API Route to delete a message
app.delete("/api/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting message", error });
  }
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
