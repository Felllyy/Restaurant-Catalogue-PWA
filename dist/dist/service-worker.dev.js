"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

if (!self.define) {
  var e = function e(_e) {
    _e !== 'require' && (_e += '.js');
    var c = Promise.resolve();
    return d[_e] || (c = new Promise(function _callee(c) {
      var _d;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if ('document' in self) {
                _d = document.createElement('script');
                _d.src = _e, document.head.appendChild(_d), _d.onload = c;
              } else importScripts(_e), c();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    })), c.then(function () {
      if (!d[_e]) throw new Error("Module ".concat(_e, " didn\u2019t register its module"));
      return d[_e];
    });
  };

  var c = function c(_c, d) {
    Promise.all(_c.map(e)).then(function (e) {
      return d(e.length === 1 ? e[0] : e);
    });
  };

  var d = {
    require: Promise.resolve(c)
  };

  self.define = function (c, r, i) {
    d[c] || (d[c] = Promise.resolve().then(function () {
      var d = {};
      var n = {
        uri: location.origin + c.slice(1)
      };
      return Promise.all(r.map(function (c) {
        switch (c) {
          case 'exports':
            return d;

          case 'module':
            return n;

          default:
            return e(c);
        }
      })).then(function (e) {
        var c = i.apply(void 0, _toConsumableArray(e));
        return d["default"] || (d["default"] = c), d;
      });
    }));
  };
}

define('./service-worker.js', ['./workbox-15dd0bab'], function (e) {
  self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: 'bundle.js',
    revision: 'b208f617ad2921bc55544c04f883381f'
  }, {
    url: 'favicon.png',
    revision: '96c5202a7f56459329a3c2c24fdbc0cb'
  }, {
    url: 'hero-image_2.jpg',
    revision: '49f78cae81de4f48caf1c2fe0271c828'
  }, {
    url: 'icon_128x128.fdd8d6a4ba4623f51a929b7c2a1670d2.jpeg',
    revision: 'fdd8d6a4ba4623f51a929b7c2a1670d2'
  }, {
    url: 'icon_192x192.9d475ad45d1ede8614185507a1648230.jpeg',
    revision: '9d475ad45d1ede8614185507a1648230'
  }, {
    url: 'icon_256x256.a4814d360a813cd7c4b07cc7e045adb6.jpeg',
    revision: 'a4814d360a813cd7c4b07cc7e045adb6'
  }, {
    url: 'icon_384x384.635e31c3229e2cbbe7b7002c7cbadb55.jpeg',
    revision: '635e31c3229e2cbbe7b7002c7cbadb55'
  }, {
    url: 'icon_512x512.fdaed8d18eb63ab2a112dcff52c1cd0a.jpeg',
    revision: 'fdaed8d18eb63ab2a112dcff52c1cd0a'
  }, {
    url: 'icon_96x96.e824155fdecec1a5cc17498df080bca0.jpeg',
    revision: 'e824155fdecec1a5cc17498df080bca0'
  }, {
    url: 'icons/icon.JPG',
    revision: '1d559011211b2884ce3ffe1694b5d630'
  }, {
    url: 'index.html',
    revision: '2544025a4e932f99142fbf946d4dd39c'
  }, {
    url: 'manifest.487797fc72b56a31f12f9622921db137.json',
    revision: '487797fc72b56a31f12f9622921db137'
  }, {
    url: 'sw.js',
    revision: '1034716b47e0dfd1369692d7cee80d9d'
  }, {
    url: 'user.jpg',
    revision: '48d5ddddc34d4853510c277b06b2916e'
  }], {});
});