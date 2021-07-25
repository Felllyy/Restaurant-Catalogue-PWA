"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _therestaurantdbSource = _interopRequireDefault(require("../../data/therestaurantdb-source"));

var _templateCreator = _interopRequireDefault(require("../templates/template-creator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n    <div class=\"jumbotron\">\n        <div class=\"bluring\"></div>\n        <picture>\n          <source type=\"image/webp\" media=\"(max-width: 600px)\" srcset=\"./images/hero-image_2.webp\">\n          <source type=\"image/jpeg\" media=\"(max-width: 600px)\" srcset=\"./images/hero-image_2.jpg\">\n          <img class=\"lazyload\"\n            data-src='./images/hero-image_2.jpg' \n            alt=\"Gambar jumbotron\"\n            width=\"1350px\"\n            height=\"900px\">\n          </img>\n        </picture>\n        <div class=\"tekstron\">\n            <h1 tabindex=\"0\">Hayu ah urang taruang</h1>\n            <p tabindex=\"0\">Mangga dieksplor hela restona</p>\n          <a href=\"#resto-blok\" class=\"cari\">Explore</a>\n        </div>\n    </div>\n    <div>\n      <p class=\"headline restoblok\" id=\"resto-blok\" tabindex=\"0\">Explore Restaurant</p>\n      <span class=\"section-separator\"></span>\n    </div>\n    <div class=\"item\">\n    <div class=\"grid-container explore\" id=\"posts\"></div>\n    </div>\n\n    ");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var restaurant, restaurantContainer;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_therestaurantdbSource["default"].homeRestaurants());

          case 2:
            restaurant = _context2.sent;
            restaurantContainer = document.querySelector('#posts');
            restaurant.forEach(function (restaurants) {
              restaurantContainer.innerHTML += _templateCreator["default"].createRestaurantsItemTemplate(restaurants);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = Home;
exports["default"] = _default;