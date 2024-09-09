const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const express = require("express");
const router = express.Router();
const multer = require("multer");

cloudinary.config({
  cloud_name: "df7dkrqnl",
  api_key: "627924449824556",
  api_secret: "vEcDiWOSZAmKQpsF_x",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ecommerce",
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("picture"), (req, res) => {
  res.status(200).json({
    url: req.file,
  });
});

module.exports = router;
