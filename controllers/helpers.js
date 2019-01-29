const mjml2html = require('mjml');
const Handlebars = require('handlebars');
const fs = require('fs');

// TODO: Implement createMJML to dynamically create template
const createMJML = (callback) => {
  callback();
};

const loadTemplate = (path, callback) => {
  fs.readFile(path, 'utf8', (err, template) => {
    if (err) {
      callback(err, null);
    }
    callback(null, template);
  });
};

const transpileMJML = (callback) => {
  const options = {
    minify: true,
  };
  loadTemplate('data/template.mjml', (err, mjml) => {
    const htmlOutput = mjml2html(mjml, options);
    callback(null, htmlOutput.html);
  });
};

// Use Handlebars.js to inject template email HTML
const injectVariablesIntoTemplate = (html, data) => {
  const template = Handlebars.compile(html);
  return template(data);
};

const sendError = (err, res, message, data) => {
  res.json({
    message,
    err,
    data,
  });
};

module.exports = {
  createMJML,
  sendError,
  transpileMJML,
  injectVariablesIntoTemplate,
};
