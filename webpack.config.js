const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // publicPath: '/js',
    // contentBasePublicPath: './js',
    writeToDisk: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      title: 'Fractals',
      filename: '../index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
    ]
  }
};