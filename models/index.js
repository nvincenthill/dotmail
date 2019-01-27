const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/exampledb';

const options = { useNewUrlParser: true };
mongoose.connect(
  dbURI,
  options,
);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If Node process ends, close Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = {};
