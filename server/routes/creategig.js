const express = require('express')
const router = express.Router();
const {getGigsBySeller} = require('../controllers/getGigBySeller');
const {gigcontroller, updateGig, deleteGig} = require('../controllers/gigcontroller');
const { findByGig } = require('../controllers/findByGig');
const { getSellersByGigCategory } = require('../controllers/getGigsByCategory');


router.post('/',  gigcontroller);
router.get('/:number', getGigsBySeller);
router.put('/:number/:gigIndex', updateGig); 
router.delete('/:number/:gigIndex', deleteGig);
router.get('/category/:category', getSellersByGigCategory);

module.exports = router;