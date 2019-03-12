const mjml2html = require('mjml');

class MJMLTranspiler {
  constructor() {
    this.options = {
      minify: true,
    };
  }

  transpile(mjml) {
    const htmlOutput = mjml2html(mjml, this.options);
    return htmlOutput.html;
  }
}

module.exports = MJMLTranspiler;
