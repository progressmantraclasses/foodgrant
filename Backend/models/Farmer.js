const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  location: String,
  quantity: Number,
  price: Number,
  itemImage: String,
  itemName: String,
  mapLink: String,
});

module.exports = mongoose.model("Farmer", farmerSchema);
