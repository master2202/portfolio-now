//  Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps

require("dotenv").config();
const nodemailer = require("nodemailer");

exports.nodemail = async (req, res, next) => {
  try {
    const message = await {
      client: req.body.client,
      email: req.body.email,
      subject: req.body.subject,
      text: req.body.message
    };

    // Step 1
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Step 2
    let mailOptions = {
      from: message.client,
      to: process.env.EMAIL,
      subject: "Portfolio contact from: " + message.client,
      text: message.text,
      html:
        "Message from: " +
        message.client +
        "<br></br> Email: " +
        message.email +
        "<br></br> Message: " +
        message.text
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("<<RESPONSE:1>>");
        return res.status(500).json({ error: err });
      }
      console.log("<<RESPONSE:2>>");
      return res.status(200).json({ client: message.client });
    });
  } catch (error) {
    console.log("<<RESPONSE:3>>"), res.status(500).json({ error: error });
  }
};
