const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

process.env.NODE_ENV = 'development';

const esLintOptions = {
  extensions: ['js', 'jsx'],
};

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: 'src/favicon.ico',
    }),
    new ESLintPlugin(esLintOptions),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
