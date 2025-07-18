const sellers = require('../models/sellers');

exports.getSellerDashboard = async (req, res) => {
  const userId = req.params.userId

  if (!userId) {
    return res.status(400).json({ message: "No number found in query params" });
  }

  try {
    const seller = await sellers.findOne({ userId });

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json(seller);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};