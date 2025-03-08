const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const ngoRoutes = require("./routes/ngoRoutes");
const businessRoutes = require("./routes/businessRoutes");
const farmerRoutes = require("./routes/farmerRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ **Correct Cloudinary Configuration**
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ **Proper Multer-Cloudinary Storage Setup**
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "foodgrant_images",
    format: async (req, file) => "png",
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

const upload = multer({ storage });

// ✅ **Image Upload API**
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File upload failed" });
  }
  res.json({ imageUrl: req.file.path });
});

// ✅ API Routes
app.use("/api/ngos", ngoRoutes);
app.use("/api/businesses", businessRoutes);
app.use("/api/farmers", farmerRoutes);

// ✅ **MongoDB Connection**
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
