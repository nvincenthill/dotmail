const transporter = require('./transporter');
const { sendError, injectVariablesIntoTemplate } = require('./helpers');

const MJMLTranspiler = require('./MJMLTranspiler');
const EmailSender = require('./EmailSender');
const EmailCreator = require('./EmailCreator');

module.exports = {
  sendMail: (req, res) => {
    const { template, recipients } = req.body;
    const transpiler = new MJMLTranspiler();
    const emailCreator = new EmailCreator(process.env.EMAIL);
    const emailSender = new EmailSender(transporter);

    transpiler.transpile(`data/${template}.mjml`, (error, html) => {
      if (error) {
        sendError(error, res, 'Failed to transpile MJML');
      }

      const transmissions = [];

      for (let i = 0; i < recipients.length; i += 1) {
        const injections = {
          name: recipients[i].preferred,
          city: 'Oakland, CA',
          kids: [{ name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' }],
        };
        const mail = emailCreator.create(
          recipients[i].email,
          template.subjectLine,
          injectVariablesIntoTemplate(html, injections),
          template.message,
        );
        const transmission = emailSender.send(mail);
        transmissions.push(transmission);
      }

      Promise.all(transmissions)
        .then(() => {
          res.json({
            message: 'Successfully sent email(s)!',
          });
        })
        .catch((err) => {
          sendError(err, res, 'Failed to send email(s)');
        });
    });
  },
};
