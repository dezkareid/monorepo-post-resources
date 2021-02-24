const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const moduleConfig = {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
};

const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
];

const config = {
    module: moduleConfig,
    plugins
};

module.exports = config;