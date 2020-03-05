const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

let config = {
  entry: {
    main: ['./js/prestashop-ui-kit.js', './scss/application.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'prestashop-ui-kit.js'
  },
  devtool: devMode ? 'inline-source-map' : 'source-map',
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: !devMode,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './node_modules')],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{loader: MiniCssExtractPlugin.loader}, 'style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/bootstrap-prestashop-ui-kit.css'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default']
    })
  ]
};

if (!devMode) {
  Object.assign(config, {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              drop_console: true,
              sequences: true,
              conditionals: true,
              booleans: true,
              if_return: true,
              join_vars: true,
              drop_console: true
            },
            output: {
              comments: false
            }
          }
        })
      ]
    }
  });
}

module.exports = config;
