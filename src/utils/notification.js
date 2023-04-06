const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'pallabnandi6@gmail.com',
    pass: 'ayngkexfcqzknksu'
  },
  secure: true
})

const sendMail = async (subject, body, to) => {
  const mailData = {
    from: 'movie-booking-app@pallabnandi.com',
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