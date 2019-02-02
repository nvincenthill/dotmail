const transporter = require('./transporter');
const { sendError, injectVariablesIntoTemplate } = require('./helpers');

const MJMLTranspiler = require('./MJMLTranspiler');
const EmailSender = require('./EmailSender');
const EmailCreator = require('./EmailCreator');

module.exports = {
  sendMail: (req, res) => {
    const {
      template, name, email, subject, message,
    } = req.body;

    const transpiler = new MJMLTranspiler();
    const emailCreator = new EmailCreator(process.env.EMAIL);
    const emailSender = new EmailSender(transporter);

    transpiler.transpile(`data/${template}.mjml`, (error, html) => {
      if (error) {
        sendError(error, res, 'Failed to transpile MJML');
      }

      const injections = {
        name,
        city: 'Oakland, CA',
        kids: [{ name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' }],
      };

      const mail = emailCreator.create(
        email,
        subject,
        injectVariablesIntoTemplate(html, injections),
        message,
      );

      // TODO: Decouple sending a response to POST request from sending an email via gmail SMTP
      emailSender.send(mail, res);
    });
  },
};
