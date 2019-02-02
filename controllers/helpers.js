const Handlebars = require('handlebars');
const fs = require('fs');

const loadTemplate = (path, callback) => {
  fs.readFile(path, 'utf8', (err, template) => {
    if (err) {
      callback(err, null);
    }
    callback(null, template);
  });
};

const injectVariablesIntoTemplate = (html, variables) => {
  const template = Handlebars.compile(html);
  return template(variables);
};

const sendError = (err, res, message, data) => {
  res.json({
    message,
    err,
    data,
  });
};

module.exports = {
  sendError,
  injectVariablesIntoTemplate,
  loadTemplate,
};
