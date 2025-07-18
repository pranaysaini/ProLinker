const express = require('express')
const router = express.Router();
const sellers = require('../models/sellers')
const { saveSellerData } = require('../controllers/profile');
const multer = require('multer');
const path = require("path");
const authenticateUser = require('../middlewares/auth');
const {getSellerDashboard}  = require('../controllers/profileController');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/portfolios'); 
  },
  
  filename: function (req, file, cb) {
    const contactNumber = req.body.contactNumber || 'unknown'; // fallback in case it's missing
    const ext = path.extname(file.originalname); // get file extension like .pdf
    cb(null, `portfolio-${contactNumber}${ext}`);
  }
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 }});

router.post('/', upload.single('pdf'),  saveSellerData);
router.get('/dashboard/:userId', authenticateUser, getSellerDashboard);

module.exports = router;