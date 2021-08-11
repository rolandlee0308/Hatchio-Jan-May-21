/**
 * File: verification.js
 * Purpose: Verify the email accounts of users
 * Authors: Roland, Lyra
 */
const nodemailer = require("nodemailer");
const SQL_CONNECTION = require('../config').SQL_CONNECTION;

//Create SMTP Transport
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "hatchionoreply9",
    pass: "csctest0308123",
  },
});

module.exports = function (app) {
  app.get("/send", (req, res) => {
    // TODO: The code should be generated server side. This does not set the code in the DB, the two features should be in the same place.
    const { email, code, UserType } = req.query;
    console.log("send function");
    console.log(UserType);
    host = req.get("host");
    link =
      "http://" +
      req.get("host") +
      "/verify?UserType=" +
      UserType +
      "&id=" +
      code;
    mailOptions = {
      to: email,
      subject: "Please confirm your Email account",
      html:
        "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
        link +
        ">Click here to verify</a>",
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.send("error");
      } else {
        console.log("Message sent: " + response.message);
        res.send("sent");
      }
    });
  });

  app.get('/verify', function (req, res) {
    var callback = function(err, results) {
      if (err) {
        res.send('<h1>Bad Request</h1>');
      } else {
        res.send('<h1>Email has been successfully verified');
      }
    }
    switch (req.query.UserType) {
      case 'students':
        SQL_CONNECTION.query('UPDATE students SET code="Not Assigned" WHERE code=?', [req.query.id], callback);
        break;
      case 'professors':
        SQL_CONNECTION.query('UPDATE professors SET code="Not Assigned" WHERE code=?', [req.query.id], callback);
        break;
      case 'employers':
        SQL_CONNECTION.query('UPDATE employers SET code="Not Assigned" WHERE code=?', [req.query.id], callback);
        break;
      default:
        res.send('<h1>Bad Request</h1>');
        break;
    }
  });
};
