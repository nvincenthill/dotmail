const nodemailer = require('nodemailer');
const aws = require('aws-sdk');

class Transport {
  constructor(useAWSSES) {
    this.useAWSSES = useAWSSES;
  }

  create(user, pass, AWSAccessKeyId, AWSSecretKey, region) {
    let transport;

    if (!this.useAWSSES) {
      transport = {
        host: 'smtp.gmail.com',
        auth: {
          user,
          pass,
        },
      };
    } else {
      aws.config.update({
        accessKeyId: AWSAccessKeyId,
        secretAccessKey: AWSSecretKey,
        region,
      });
      transport = {
        SES: new aws.SES({
          apiVersion: '2010-12-01',
        }),
      };
    }

    return nodemailer.createTransport(transport);
  }
}

module.exports = Transport;
