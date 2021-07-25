"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _favoriteRestaurantIdb = _interopRequireDefault(require("../../data/favorite-restaurant-idb"));

var _favoriteRestaurantSearchView = _interopRequireDefault(require("./liked-restaurant/favorite-restaurant-search-view"));

var _favoriteRestaurantShowPresenter = _interopRequireDefault(require("./liked-restaurant/favorite-restaurant-show-presenter"));

var _favoriteRestaurantSearchPresenter = _interopRequireDefault(require("./liked-restaurant/favorite-restaurant-search-presenter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-new */
var view = new _favoriteRestaurantSearchView["default"]();
var Favorite = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", view.getTemplate());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var favoriteRestaurants, restaurantContainer;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            new _favoriteRestaurantShowPresenter["default"]({
              view: view,
              favoriteRestaurants: _favoriteRestaurantIdb["default"]
            });
            new _favoriteRestaurantSearchPresenter["default"]({
              view: view,
              favoriteRestaurants: _favoriteRestaurantIdb["default"]
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].getAllRestaurants());

          case 4:
            favoriteRestaurants = _context2.sent;
            restaurantContainer = document.querySelector('.favorite'); // grid favorite

            if (favoriteRestaurants.length <= 2) {
              restaurantContainer.classList.add('grid-container-favorite');
            } else {
              restaurantContainer.classList.add('grid-container');
            } // Fungsi ini akan dipanggil setelah render()


          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = Favorite;
exports["default"] = _default;