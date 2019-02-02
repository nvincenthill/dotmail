class EmailSender {
  constructor(transporter) {
    this.transporter = transporter;
  }

  send(mail) {
    this.transporter.sendMail(mail);
  }
}

module.exports = EmailSender;
