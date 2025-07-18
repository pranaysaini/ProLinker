const seller = require('../models/sellers');

exports.findByGig = async (req, res) => {
    try{
        const category = decodeURIComponent(req.params.category);

        const matchingSellers = await seller.find({
        gigs: { $elemMatch: { category } }
        });

         res.json({ sellers: matchingSellers });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }

} 