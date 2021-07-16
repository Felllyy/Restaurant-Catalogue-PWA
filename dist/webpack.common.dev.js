"use strict";

/* eslint-disable import/no-extraneous-dependencies */
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var WebpackPwaManifest = require('webpack-pwa-manifest');

var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

var WorkboxPlugin = require('workbox-webpack-plugin');

var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/templates/index.html'),
    filename: 'index.html'
  }), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src/public/'),
      to: path.resolve(__dirname, 'dist/')
    }]
  }), new WebpackPwaManifest({
    name: 'Tuang Raos Apps',
    short_name: 'Raos',
    description: 'My awesome Progressive Web App!',
    start_url: '/index.html',
    background_color: '#ffffff',
    crossorigin: 'use-credentials',
    theme_color: '#a52a2a',
    icons: [{
      src: path.resolve('src/public/icons/icon.png'),
      sizes: [96, 128, 192, 256, 384, 512]
    }, {
      src: path.resolve('src/public/icons/maskable_icon.png'),
      size: '1024x1024',
      purpose: 'maskable'
    }]
  }), new ServiceWorkerWebpackPlugin({
    entry: path.resolve(__dirname, 'src/scripts/sw.js')
  }), new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  })]
};