const transporter = require('./transporter');
const template = require('./template.js');

module.exports = {
  post: (req, res) => {
    const { name, email, message } = req.body;
    // const content = `name: ${name} \n email: ${email} \n message: ${message} `;

    const mail = {
      from: name,
      to: process.env.RECEIVER,
      subject: 'Our special dinner is coming up soon...',
      html: template,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          message: 'Failed to send email',
          error: err,
          data,
        });
      } else {
        res.json({
          message: 'Successfully sent email',
        });
      }
    });
  },
};
