require('dotenv').config()
const nodemailer = require("nodemailer");

module.exports =nodemailer.createTransport({
  service:'gmail',
  port: 465,
  auth: {
    user: process.env.GMAILUSER, // generated ethereal user
    pass: process.env.GMAILPASSWORD, // generated ethereal password
  },
  host: "smtp.gmail.com",
  });
