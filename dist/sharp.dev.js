"use strict";

/* eslint-disable import/no-extraneous-dependencies */
var sharp = require('sharp');

var fs = require('fs');

var path = require('path');

var target = path.resolve(__dirname, 'src/public/images');
var destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach(function (image) {
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp("".concat(target, "/").concat(image)).resize(800).toFile(path.resolve(__dirname, "".concat(destination, "/").concat(image.split('.').slice(0, -1).join('.'), "-large.jpg"))); // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg

  sharp("".concat(target, "/").concat(image)).resize(480).toFile(path.resolve(__dirname, "".concat(destination, "/").concat(image.split('.').slice(0, -1).join('.'), "-small.jpg")));
});