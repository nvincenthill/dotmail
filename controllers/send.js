const transporter = require('./transporter');
const {
  createMJML, sendError, transpileMJML, injectVariablesIntoTemplate,
} = require('./helpers');

module.exports = {
  post: (req, res) => {
    const {
      name, email, subject, message,
    } = req.body;
    createMJML((err) => {
      if (err) {
        sendError(err, res, 'Failed to create MJML');
      }
      transpileMJML('data/template.mjml', (error, html) => {
        if (error) {
          sendError(error, res, 'Failed to transpile MJML');
        }

        const variables = {
          name,
          city: 'Oakland, CA',
          kids: [{ name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' }],
        };

        const mail = {
          from: process.env.EMAIL,
          to: email,
          subject,
          html: injectVariablesIntoTemplate(html, variables),
          text: message,
        };

        transporter.sendMail(mail, (transportError, data) => {
          if (transportError) {
            sendError(transportError, res, 'Failed to send email', data);
          } else {
            res.json({
              message: 'Successfully sent email!',
            });
          }
        });
      });
    });
  },
};
