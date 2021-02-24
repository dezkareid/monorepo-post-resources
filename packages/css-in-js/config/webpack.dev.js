const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devServer = {
    contentBase: '../dist',
    historyApiFallback: true,
    open: true,
    port: 8001,
};

const mode = 'development';

const config = {
    devServer,
    mode
};

module.exports = merge(commonConfig, config);