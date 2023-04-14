if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'pallabnandi.dev@gmail.com',
    pass: process.env.pass
  },
  secure: true
})

const sendMail = async (subject, body, to) => {
  const mailData = {
    from: 'pallabnandi.dev@gmail.com',
    to: to,
    subject: subject,
    text: body
  }

  try {
    const info = await transporter.sendMail(mailData);
    console.log('Mail sent successfully', info);
  } catch (err) {
    console.log('Error while sending mail : ', err);
  }
}

module.exports = { sendMail }