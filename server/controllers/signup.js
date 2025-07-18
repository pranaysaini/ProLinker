const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../models/users")
const seller = require("../models/sellers")
const jwt = require('jsonwebtoken');

exports.signUpSave = async (req, res) => {
    const {userId, email, password} = req.body;

        try {
        const userExist = await User.findOne({ userId });
        if (userExist) {
            return res.status(400).json({ message: "User ID already exists. Please choose another one." });
        }

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({ message: "Email already registered. Please use a different email." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userId, email, password: hashedPassword });

        await newUser.save();

        const token = jwt.sign({userId: newUser.userId}, process.env.secret, {expiresIn: '1d'})

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'Lax',     // allows cross-origin on top-level GET
            secure: true,       //  false for localhost, true for production with HTTPS
            maxAge: 24 * 60 * 60 * 1000
        });

        

        res.status(201).json({ 
            message: "Signup successful", 
            userId: newUser.userId
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}
    