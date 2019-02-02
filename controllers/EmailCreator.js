class EmailCreator {
  constructor(sender) {
    this.sender = sender;
  }

  create(recipient, subject, html, message) {
    const mail = {
      from: this.sender,
      to: recipient,
      subject,
      html,
      text: message,
    };
    return mail;
  }
}

module.exports = EmailCreator;
