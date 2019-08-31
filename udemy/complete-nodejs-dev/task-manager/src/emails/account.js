const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.info("apikey: ", process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kayla@kaylaaltepeter.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kayla@kaylaaltepeter.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. We would like to see you again!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
