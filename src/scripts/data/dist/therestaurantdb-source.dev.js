/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _apiEndpoint = _interopRequireDefault(require('../globals/api-endpoint'));

const _config = _interopRequireDefault(require('../globals/config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

const TheRestaurantsDbSource =
/* #__PURE__ */
(function () {
  function TheRestaurantsDbSource() {
    _classCallCheck(this, TheRestaurantsDbSource);
  }

  _createClass(TheRestaurantsDbSource, null, [{
    key: 'homeRestaurants',
    value: function homeRestaurants() {
      let response; let
        responseJson;
      return regeneratorRuntime.async((_context) => {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint.default.HOME));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              responseJson = _context.sent;
              return _context.abrupt('return', responseJson.restaurants);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      });
    },
  }, {
    key: 'favoriteRestaurants',
    value: function favoriteRestaurants() {
      let response; let
        responseJson;
      return regeneratorRuntime.async((_context2) => {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint.default.FAVORITE));

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              responseJson = _context2.sent;
              return _context2.abrupt('return', responseJson.restaurants);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      });
    },
  }, {
    key: 'detailRestaurants',
    value: function detailRestaurants(id) {
      let response;
      return regeneratorRuntime.async((_context3) => {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint.default.DETAIL(id)));

            case 2:
              response = _context3.sent;
              return _context3.abrupt('return', response.json());

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      });
    },
  }, {
    key: 'reviewRestaurant',
    value: function reviewRestaurant(dataInput) {
      let reviewResponse;
      return regeneratorRuntime.async((_context4) => {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(fetch(_apiEndpoint.default.REVIEW, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Auth-Token': _config.default.KEY,
                },
                body: JSON.stringify(dataInput),
              }));

            case 2:
              reviewResponse = _context4.sent;
              return _context4.abrupt('return', reviewResponse);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      });
    },
  }]);

  return TheRestaurantsDbSource;
}());

const _default = TheRestaurantsDbSource;
exports.default = _default;
