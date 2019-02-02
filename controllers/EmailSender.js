const { sendError } = require('./helpers');

class EmailSender {
  constructor(transporter) {
    this.transporter = transporter;
  }

  send(mail, res) {
    this.transporter
      .sendMail(mail)
      .then((data) => {
        res.json({
          message: 'Successfully sent email!',
          data,
        });
      })
      .catch((error) => {
        sendError(error, res, 'Failed to send email');
      });
  }
}

module.exports = EmailSender;
