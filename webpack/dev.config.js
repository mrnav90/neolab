'use strict';

import Webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: 'main.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new Webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    }),
    new ExtractTextPlugin('style.css'),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: Path.join(__dirname, '../index.html'), to: Path.join(__dirname, '../dist/index.html') },
      { from: Path.join(__dirname, '../assets'), to: Path.join(__dirname, '../dist/assets') }
    ])
  ]
};
