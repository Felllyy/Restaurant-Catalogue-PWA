"use strict";

var _favoriteRestaurantContract = require("./contract/favoriteRestaurantContract");

var _favoriteRestaurantIdb = _interopRequireDefault(require("../src/scripts/data/favorite-restaurant-idb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Favorite Restaurants Idb Contract Test Implementation', function () {
  afterEach(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].getAllRestaurants());

          case 2:
            _context2.t0 = function _callee(restaurants) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].deleteRestaurant(restaurants.id));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            };

            _context2.sent.forEach(_context2.t0);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  (0, _favoriteRestaurantContract.itActsAsFavoriteRestaurantModel)(_favoriteRestaurantIdb["default"]);
});