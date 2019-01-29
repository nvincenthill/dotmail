const Handlebars = require('handlebars');
const transporter = require('./transporter');
const { createMJML, sendError, transpileMJML } = require('./helpers');

module.exports = {
  post: (req, res) => {
    const {
      name, email, subject, message,
    } = req.body;
    createMJML((err) => {
      if (err) {
        sendError(err, res, 'Failed to create MJML');
      }
      transpileMJML((err, html) => {
        if (err) {
          sendError(err, res, 'Failed to transpile MJML');
        }

        // Use Handlebars.js to inject template email HTML
        const template = Handlebars.compile(html);

        const data = {
          name,
          city: 'Oakland, CA',
          kids: [{ name: 'Jimmy', age: '12' }, { name: 'Sally', age: '4' }],
        };

        const hydrated = template(data);

        console.log('Sending email...');

        const mail = {
          from: process.env.EMAIL,
          to: email,
          subject,
          html: hydrated,
          text: message,
        };

        transporter.sendMail(mail, (err, data) => {
          if (err) {
            console.log(err);
            sendError(err, res, 'Failed to send email', data);
          } else {
            console.log('Successfully sent email!');
            res.json({
              message: 'Successfully sent email!',
            });
          }
        });
      });
    });
  },
};
