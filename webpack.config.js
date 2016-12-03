var webpack = require('webpack');
var path = require('path');

var BUILD = path.resolve(__dirname, 'public');
var SOURCE = path.resolve(__dirname, 'src');

var config = {
  entry: SOURCE + '/remark-wel.es6.jsx',
  output: {
    path: BUILD,
    filename: 'remark-wel.js'
  },
  module : {
    loaders : [{
      test : /\.jsx?/,
      include : SOURCE,
      loader : 'babel'
    }]
  }
}

module.exports = config;
