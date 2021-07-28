Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _config = _interopRequireDefault(require('../globals/config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CacheHelper = {
  cachingAppShell: function cachingAppShell(requests) {
    let cache;
    return regeneratorRuntime.async(function cachingAppShell$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(this._openCache());

          case 2:
            cache = _context.sent;
            cache.addAll(requests);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, null, this);
  },
  deleteOldCache: function deleteOldCache() {
    let cacheNames;
    return regeneratorRuntime.async((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(caches.keys());

          case 2:
            cacheNames = _context2.sent;
            cacheNames.filter((name) => name !== _config.default.CACHE_NAME).map((filteredName) => caches.delete(filteredName));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    });
  },
  revalidateCache: function revalidateCache(request) {
    let response;
    return regeneratorRuntime.async(function revalidateCache$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(caches.match(request));

          case 2:
            response = _context3.sent;

            if (!response) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', response);

          case 5:
            return _context3.abrupt('return', this._fetchRequest(request));

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, null, this);
  },
  _openCache: function _openCache() {
    return regeneratorRuntime.async((_context4) => {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', caches.open(_config.default.CACHE_NAME));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    });
  },
  _fetchRequest: function _fetchRequest(request) {
    let response;
    return regeneratorRuntime.async(function _fetchRequest$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(fetch(request));

          case 2:
            response = _context5.sent;

            if (!(!response || response.status !== 200)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return', response);

          case 5:
            _context5.next = 7;
            return regeneratorRuntime.awrap(this._addCache(request));

          case 7:
            return _context5.abrupt('return', response);

          case 8:
          case 'end':
            return _context5.stop();
        }
      }
    }, null, this);
  },
  _addCache: function _addCache(request) {
    let cache;
    return regeneratorRuntime.async(function _addCache$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(this._openCache());

          case 2:
            cache = _context6.sent;
            cache.add(request);

          case 4:
          case 'end':
            return _context6.stop();
        }
      }
    }, null, this);
  },
};
const _default = CacheHelper;
exports.default = _default;
