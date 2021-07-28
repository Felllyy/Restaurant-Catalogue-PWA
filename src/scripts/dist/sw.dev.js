require('regenerator-runtime');

const _cacheHelper = _interopRequireDefault(require('./utils/cache-helper'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance'); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

const assets = global.serviceWorkerOption.assets;
self.addEventListener('install', (event) => {
  event.waitUntil(_cacheHelper.default.cachingAppShell([].concat(_toConsumableArray(assets), ['./'])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(_cacheHelper.default.deleteOldCache());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(_cacheHelper.default.revalidateCache(event.request));
});
