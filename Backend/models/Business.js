const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  foodName: String,
  foodImage: String,
  price: Number,
  location: String,
  mapLink: String,
});

module.exports = mongoose.model("Business", businessSchema);
