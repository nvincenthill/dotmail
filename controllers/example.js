const fs = require('fs');
const db = require('../models');

module.exports = {
  get: (req, res) => {
    console.log('getting data');
    fs.readFile('./data/data.txt', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
      res.send(data);
    });
  },
};
