const axios = require('axios');
const seller = require('../models/sellers');

exports.saveSellerData = async (req, res) => {

    console.log(" Reached backend route"); 
    
    const {profileName, profileEmail, contactNumber, websiteLink, userId} = req.body;
    const pdfPath = req.file?.path;
    

    try{
        const newSellerProfile = new seller({ userId, name: profileName, email: profileEmail, number: Number(contactNumber), website: websiteLink, pdf: pdfPath});
        
        
        if (!profileName || !profileEmail || !contactNumber || !userId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "PDF file is required" });
        }
        
        await newSellerProfile.save();

        console.log(" req.body:", req.body);
        console.log("req.file:", req.file);

        console.log("Profile saved:", newSellerProfile);

        return res.status(200).json({ 
            message: "Profile created successfully",
            seller: {
                userId,
                name: profileName,
                email: profileEmail,
                number: Number(contactNumber),
                website: websiteLink,
                pdf: pdfPath
            }
        });
    }
    catch(err){

        console.error("Detailed error:", err);
        
        if (err.name === 'ValidationError') {
            return res.status(400).json({ 
                message: "Validation error",
                errors: err.errors 
            });
        }
        res.status(500).json({ message: "Failed to create seller profile" });
    }
}



