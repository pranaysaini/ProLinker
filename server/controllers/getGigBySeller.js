const seller = require('../models/sellers');

exports.getGigsBySeller = async (req, res) => {
    try {
        const sellerDoc = await seller.findOne({ number: Number(req.params.number) });

        if (!sellerDoc) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        return res.status(200).json({ gigs: sellerDoc.gigs || [] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

