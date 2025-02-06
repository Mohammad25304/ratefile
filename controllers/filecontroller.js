const File = require("../models/fileSchema")
const multer = require("multer");

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  });
  
  const upload = multer({ storage });

  
// Upload File
const uploadFile = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  
    try {
      const newFile = new File({ filename: req.file.filename, path: req.file.path });
      await newFile.save();
      res.json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
      res.status(500).json({ message: "Error uploading file", error });
    }
  };
  module.exports = { upload, uploadFile };
  