const { sendError, injectVariablesIntoTemplate } = require('./helpers');
const MJMLTranspiler = require('./MJMLTranspiler');

module.exports = {
  previewEmail: (req, res) => {
    const { form, recipients, currentUser } = req.body;
    const transpiler = new MJMLTranspiler();

    if (!recipients || !currentUser.email) {
      sendError(true, res, 'ERROR: Invalid sender or recipient(s)!');
      return;
    }

    const html = transpiler.transpile(form.mjml);

    const variablesToInject = {
      ...recipients[0],
      subjectLine: form.subjectLine,
      senderName: currentUser.name,
      senderEmail: currentUser.email,
    };
    form.injections.forEach((injection) => {
      variablesToInject[injection.name] = injection.data;
    });
    const injectedHTML = injectVariablesIntoTemplate(html, variablesToInject);
    res.json({
      html: injectedHTML,
    });
  },
};
