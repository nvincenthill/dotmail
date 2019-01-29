const mjml2html = require('mjml');
const fs = require('fs');

// TODO: Implement createMJML
const createMJML = (callback) => {
  console.log('Creating MJML...');
  callback();
};

const loadTemplate = (path, callback) => {
  console.log('Loading template...');
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
    console.log('Transpiling to html...');
    const htmlOutput = mjml2html(mjml, options);
    callback(null, htmlOutput.html);
  });
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
};
