const transporter = require('./transporter');
const { sendError, injectVariablesIntoTemplate } = require('./helpers');

const MJMLTranspiler = require('./MJMLTranspiler');
const EmailSender = require('./EmailSender');
const EmailCreator = require('./EmailCreator');

module.exports = {
  sendMail: (req, res) => {
    const { form, recipients, currentUser } = req.body;
    const transpiler = new MJMLTranspiler();
    const emailCreator = new EmailCreator(process.env.EMAIL);
    const emailSender = new EmailSender(transporter);

    transpiler.transpile(`data/${form.templateName}.mjml`, (error, html, descriptionOfError) => {
      if (error) {
        sendError(error, res, descriptionOfError);
        return;
      }

      const transmissions = [];

      for (let i = 0; i < recipients.length; i += 1) {
        const injections = {
          ...recipients[i],
          ...form,
          senderName: currentUser.name,
          senderEmail: currentUser.email,
        };
        const mail = emailCreator.create(
          recipients[i].email,
          form.subjectLine,
          injectVariablesIntoTemplate(html, injections),
          form.message,
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
