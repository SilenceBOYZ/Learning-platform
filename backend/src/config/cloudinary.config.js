"use strict"
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configuration
cloudinary.config({
  cloud_name: 'dv87wuqsy',
  api_key: '373435343986675',
  api_secret: process.env.API_SECRET_KEY, // Click 'View Credentials' below to copy your API secret
});


module.exports = cloudinary;





