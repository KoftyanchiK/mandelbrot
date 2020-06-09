const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  mode: 'development',
  entry: './test/complex.test.js',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './tests',
  //   // publicPath: '/js',
  //   // contentBasePublicPath: './js',
  //   writeToDisk: true,
  //   hot: true,
  // },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },
  plugins: [
    // new CleanWebpackPlugin()
  ],
  output: {
    filename: 'main.test.js',
    path: path.resolve(__dirname, 'tests'),
  }
};