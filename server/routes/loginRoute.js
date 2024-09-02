const express = require("express");
const router = express.Router();
const users = require("../models/userschema");
const { Login } = require("../controllers/authController");


router.post('/login',Login )

module.exports = router;