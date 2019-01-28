const nodemailer = require('nodemailer');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('SMTP server connection online and operational...');
  }
});

module.exports = transporter;
