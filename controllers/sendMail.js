const { sendError, injectVariablesIntoTemplate } = require('./helpers');
const MJMLTranspiler = require('./MJMLTranspiler');
const EmailSender = require('./EmailSender');
const EmailCreator = require('./EmailCreator');
const Transport = require('./Transport');

module.exports = {
  sendMail: (req, res) => {
    const { form, recipients, currentUser } = req.body;
    const transpiler = new MJMLTranspiler();
    const emailCreator = new EmailCreator(currentUser.email);
    const transport = new Transport(currentUser.useAWSSES);
    const transporter = transport.create(
      null,
      null,
      currentUser.AWSAccessKeyId,
      currentUser.AWSSecretKey,
      'us-east-1',
    );
    const emailSender = new EmailSender(transporter);

    if (!recipients || !currentUser.email) {
      sendError(true, res, 'ERROR: Invalid sender or recipient(s)!');
      return;
    }

    // TODO - Implement programmatic MJML generation

    const html = transpiler.transpile(form.mjml);
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
        'The responsive HTML content of this email could not be viewed - please check your browser settings or contact the sender. Thanks!',
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
  },
};
