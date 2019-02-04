const fs = require('fs');
const mjml2html = require('mjml');

const { loadTemplate } = require('./helpers');

class MJMLTranspiler {
  constructor() {
    this.options = {
      minify: true,
    };
  }

  transpile(path, callback) {
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        callback(err, null, 'ERROR: Cannot find template file');
        return;
      }
      loadTemplate(path, (error, mjml) => {
        if (error) {
          callback(error, null, 'ERROR: Cannot load template file');
        }
        const htmlOutput = mjml2html(mjml, this.options);
        callback(null, htmlOutput.html, null);
      });
    });
  }
}

module.exports = MJMLTranspiler;
