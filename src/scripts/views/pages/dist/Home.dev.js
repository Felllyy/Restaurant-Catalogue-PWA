/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _therestaurantdbSource = _interopRequireDefault(require('../../data/therestaurantdb-source'));

const _templateCreator = require('../templates/template-creator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Home = {
  render: function render() {
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', '\n    <div class="jumbotron">\n        <div class="bluring"></div>\n        <img src="hero-image_2.jpg" width="100%" alt="Hero image">\n        <div class="tekstron">\n            <h1 tabindex="0">Hayu ah urang taruang</h1>\n            <p tabindex="0">Mangga dieksplor hela restona</p>\n          <a href="#resto-blok" class="cari">Explore</a>\n        </div>\n    </div>\n    <div>\n      <p class="headline restoblok" id="resto-blok" tabindex="0">Explore Restaurant</p>\n      <span class="section-separator"></span>\n    </div>\n    <div class="item">\n    <div class="grid-container explore" id="posts"></div>\n    </div>\n\n    ');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    let restaurant; let
      restaurantContainer;
    return regeneratorRuntime.async((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_therestaurantdbSource.default.homeRestaurants());

          case 2:
            restaurant = _context2.sent;
            restaurantContainer = document.querySelector('#posts');
            restaurant.forEach((restaurants) => {
              restaurantContainer.innerHTML += (0, _templateCreator.createRestaurantsItemTemplate)(restaurants);
            });

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    });
  },
};
const _default = Home;
exports.default = _default;
