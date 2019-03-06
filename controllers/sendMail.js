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

    if (!recipients || !currentUser.email) {
      sendError(true, res, 'ERROR: Invalid sender or recipient(s)!');
      return;
    }

    // TODO - Implement programmatic MJML generation

    transpiler.transpile(`data/${form.id}.mjml`, (error, html, descriptionOfError) => {
      if (error) {
        sendError(error, res, descriptionOfError);
        return;
      }

      const transmissions = [];

      for (let i = 0; i < recipients.length; i += 1) {
        const variablesToInject = {
          ...recipients[i],
          subjectLine: form.subjectLine,
          senderName: currentUser.name,
          senderEmail: currentUser.email,
        };
        form.injections.forEach((injection) => {
          variablesToInject[injection.name] = injection.data;
        });
        const mail = emailCreator.create(
          recipients[i].email,
          form.subjectLine,
          injectVariablesIntoTemplate(html, variablesToInject),
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
