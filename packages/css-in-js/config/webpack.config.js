const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const mode = 'production';

const config = {
  mode
};

module.exports = merge(commonConfig, config);