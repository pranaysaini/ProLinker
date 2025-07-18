const axios = require('axios');
const seller = require('../models/sellers');

exports.gigcontroller = async(req, res) => {

    try{
        const {number, category, price, description} = req.body;

        const sellerDoc = await seller.findOne({number: Number(number),});
        if(!sellerDoc) return res.status(404).json({message: 'Seller Not Found'});

        sellerDoc.gigs = sellerDoc.gigs || [];
        sellerDoc.gigs.push({category, price, description});

        await sellerDoc.save();

        return res.status(201).json({message: 'Gig Created Successfully'});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }    
}


exports.updateGig = async (req, res) => {
  const { number, gigIndex } = req.params;
  const { category, price, description } = req.body;

  try {
    const sellerDoc = await seller.findOne({ number: Number(number) });

    if (!sellerDoc || !sellerDoc.gigs[gigIndex]) {
      return res.status(404).json({ message: 'Gig not found' });
    }

    sellerDoc.gigs[gigIndex] = { category, price, description };
    await sellerDoc.save();

    return res.json({ message: 'Gig updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteGig = async (req, res) => {
  const { number, gigIndex } = req.params;

  try {
    const sellerDoc = await seller.findOne({ number: Number(number) });

    if (!sellerDoc || !sellerDoc.gigs[gigIndex]) {
      return res.status(404).json({ message: 'Gig not found' });
    }

    sellerDoc.gigs.splice(gigIndex, 1);
    await sellerDoc.save();

    return res.json({ message: 'Gig deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};