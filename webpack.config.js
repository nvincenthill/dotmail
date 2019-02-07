const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((acc, el) => {
  acc[`process.env.${el}`] = JSON.stringify(env[el]);
  return acc;
}, {});

module.exports = {
  entry: ['@babel/polyfill', `${__dirname}/client/src/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new webpack.DefinePlugin(envKeys)],
};
