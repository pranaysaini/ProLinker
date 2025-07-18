const seller = require('../models/sellers');

exports.getSellersByGigCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const matchingSellers = await seller.find({
      gigs: { $elemMatch: { category } }
    });

    return res.status(200).json({ sellers: matchingSellers });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};
