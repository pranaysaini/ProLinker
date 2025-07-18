const express = require('express')
const router = express.Router();
const sellers = require('../models/sellers')
const { saveSellerData } = require('../controllers/profile');
const { loginsave } = require('../controllers/login');

router.post('/',  loginsave);

module.exports = router; 