const express = require('express');
const router = express.Router();
const User = require('../models/userschema');
const { hashpassword, comparePassword } = require("../helpers/auth")
const jwt = require('jsonwebtoken');



//Login Endpoint
const Login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        // check if user exist
        const user = await User.findOne({ personalMail : email });
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }
        //check if password match
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ name: user.name, id:user._id,  email: user.email, password:user.password }, process.env.JWT_SECRET, {}, (err, token) => {
                res.cookie('token', token).json(user)
            })
        } if (!match)
            res.json({
                error: 'incorrect password'
            })
    } catch (error) {
        console.log(error);
    }
}
const getprofile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}
module.exports = {

    Login,
}