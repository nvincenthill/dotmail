const mjmlUtils = require('mjml-utils');
const path = require('path');
const transporter = require('./transporter');
const { createMJML, sendError, transpileMJML } = require('./helpers');

module.exports = {
  post: (req, res) => {
    const { email, subject, message } = req.body;
    createMJML((err) => {
      if (err) {
        sendError(err, res, 'Failed to create MJML');
      }

      transpileMJML((err) => {
        if (err) {
          sendError(err, res, 'Failed to transpile MJML');
        }

        const pathToHtmlEmailTemplate = path.join(__dirname, '../data/template.html');

        mjmlUtils.sendmail.config({
          fromAddress: process.env.EMAIL,
          transport: transporter,
        });

        console.log('sending email...');

        mjmlUtils
          .sendmail({
            to: email,
            subject,
            text: message,
            template: pathToHtmlEmailTemplate,
            // The same data you would pass to #inject()
            data: { exampleVariable: 'BANANAS' },
          })
          .then(() => {
            console.log('Successfully sent email!');
            res.json({
              message: 'Successfully sent email!',
            });
          })
          .catch((error) => {
            sendError(error, res, 'Failed to send email');
          });
      });
    });
  },
};
