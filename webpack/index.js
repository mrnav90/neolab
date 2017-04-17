'use strict';

import webpackDevConfig from './dev.config';
import webpackProductionConfig from './production.config';
import Dotenv from 'dotenv';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const MODULE_EXPORT = DEVELOPMENT ? webpackDevConfig.module : webpackProductionConfig.module;
const PLUGIN_EXPORT = DEVELOPMENT ? webpackDevConfig.plugins : webpackProductionConfig.plugins;
const OUTPUT_EXPORT = DEVELOPMENT ? webpackDevConfig.output : webpackProductionConfig.output;

let webpack = {
  entry: './src/index.js',
  output: OUTPUT_EXPORT,
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  stats: { children: false },
  module: MODULE_EXPORT,
  plugins: PLUGIN_EXPORT
};

if (!DEVELOPMENT) {
  webpack.devtool = 'source-map';
}

module.exports = webpack;
