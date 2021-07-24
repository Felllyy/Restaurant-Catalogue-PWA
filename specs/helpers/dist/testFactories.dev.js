"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLikeButtonPresenterWithRestaurant = void 0;

var _likeButtonPresenter = _interopRequireDefault(require("../../src/scripts/utils/like-button-presenter"));

var _favoriteRestaurantIdb = _interopRequireDefault(require("../../src/scripts/data/favorite-restaurant-idb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/prefer-default-export */
var createLikeButtonPresenterWithRestaurant = function createLikeButtonPresenterWithRestaurant(restaurant) {
  return regeneratorRuntime.async(function createLikeButtonPresenterWithRestaurant$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_likeButtonPresenter["default"].init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: _favoriteRestaurantIdb["default"],
            restaurant: restaurant
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createLikeButtonPresenterWithRestaurant = createLikeButtonPresenterWithRestaurant;