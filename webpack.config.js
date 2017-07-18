const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
  entry: {
    main: [
      './js/prestashop-ui-kit.js',
      './scss/application.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './releases/develop/js'),
    filename: 'prestashop-ui-kit.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$'
      },
      {
        test: require.resolve('tether'),
        loader: 'expose-loader?tether!expose-loader?Tether'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false,
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [ path.resolve(__dirname, './node_modules') ]
              }
            }
          ]
        })
      },
      {
        test : /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.join('..', 'css', 'bootstrap-prestashop-ui-kit.css')),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      "window.Tether": 'tether',
    })
  ]
};

config.plugins.push(
  // new webpack.optimize.UglifyJsPlugin({
  //   sourceMap: false,
  //   compress: {
  //     sequences: true,
  //     conditionals: true,
  //     booleans: true,
  //     if_return: true,
  //     join_vars: true,
  //     drop_console: true
  //   },
  //   output: {
  //     comments: false
  //   },
  //   minimize: true
  // })
);

module.exports = config;
