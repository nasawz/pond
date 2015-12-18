var path = require('path');
var pkg = require('./package.json')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var DEBUG = process.env.NODE_ENV !== 'production';
var util = require('util');
var entry = {
  app: ['./app.js']
};

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: entry,
  debug: DEBUG,
  target: 'web',
  devtool: DEBUG ? 'inline-source-map' : false,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: DEBUG ? "/" : "./",
    filename: "bundle.js"
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$/,
        exclude: /node_modules/,
        loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json"
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json',
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:9090'
    })
  ]
};