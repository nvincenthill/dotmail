const { exec } = require('child_process');
// const fs = require('fs');

// TODO: Implement createMJML
const createMJML = (callback) => {
  console.log('creating mjml...');
  callback();
};

// const loadHTML = (callback) => {
//   console.log('loadHTML');
//   fs.readFile('./data/template.html', (err, html) => {
//     if (err) {
//       callback(err, null);
//     }
//     callback(null, html);
//   });
// };

const transpileMJML = (callback) => {
  console.log('transpiling MJML...');
  exec('mjml data/template.mjml -o data/template.html --config.minify', (err) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null);
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
