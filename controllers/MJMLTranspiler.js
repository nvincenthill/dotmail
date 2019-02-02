const mjml2html = require('mjml');
const { loadTemplate } = require('./helpers');

class MJMLTranspiler {
  constructor() {
    this.options = {
      minify: true,
    };
  }

  transpile(path, callback) {
    loadTemplate(path, (err, mjml) => {
      const htmlOutput = mjml2html(mjml, this.options);
      callback(null, htmlOutput.html);
    });
  }
}

export default MJMLTranspiler;
