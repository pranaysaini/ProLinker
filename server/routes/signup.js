const express = require('express')
const router = express.Router();
const sellers = require('../models/sellers')
const { signUpSave } = require('../controllers/signup');

router.post('/',  signUpSave);

module.exports = router; 