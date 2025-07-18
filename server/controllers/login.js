const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require("../models/users");
const Sellers = require('../models/sellers');
//const Users = require('../models/users');

exports.loginsave = async (req, res) => {

    try{
        const {userId, password} = req.body;
        const user = await User.findOne({ userId });
        const seller = await Sellers.findOne({ userId: user.userId });

        if (!seller) {
            return res.status(404).json({ message: "Seller profile not found" });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Bad Credentials" });


        const token = jwt.sign({userId: user.userId}, process.env.secret, {expiresIn: '1d'})

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'Lax',     // 🟢  allows cross-origin on top-level GET
            secure: true,       
            maxAge: 24 * 60 * 60 * 1000
        });

        console.log("Fetched User:", User);
        
        res.status(200).json({ 
            message: "Login successful", 
            number: Number(seller.number), 
            userId: user.userId 
        });
    }
    catch(err){
        console.error("Login Error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
    
}