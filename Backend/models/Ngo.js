const mongoose = require("mongoose");

const NgoSchema = new mongoose.Schema({
  ngoId: String,
  name: String,
  contactNumber: String,
  email: String,
  members: Number,
  location: String,
  mapLink: String,
  ngoImage: String, // Image URL from Cloudinary
});

module.exports = mongoose.model("Ngo", NgoSchema);
