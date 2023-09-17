const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    //Creating a transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    //Sending mail
    let info = await transporter.sendMail({
      from: "Carbon FootPrint Calculator",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (err) {
    console.log("Error while sending mail!");
    console.log(err.message);
  }
};
module.exports = mailSender;
