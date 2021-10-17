/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

const mailOptions = {
  from: "Arc Development",
  to: config.user.email,
  subject: "Testing Node Mailer",
  text: "Test Successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
