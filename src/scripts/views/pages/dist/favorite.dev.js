/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _favoriteRestaurantIdb = _interopRequireDefault(require('../../data/favorite-restaurant-idb'));

const _templateCreator = require('../templates/template-creator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Favorite = {
  render: function render() {
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', '\n    <div>\n      <p class="headline restoblok headFav" tabindex="0">Favorite Restaurant</p>\n      <span class="section-separator"></span>\n    </div>\n    <div class="item">\n    <div class="explore" id="favorite"></div>\n    </div>\n    ');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    let restaurantFavorite; let
      restaurantContainer;
    return regeneratorRuntime.async((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb.default.getAllMovies());

          case 2:
            restaurantFavorite = _context2.sent;
            restaurantContainer = document.querySelector('#favorite');
            restaurantFavorite.forEach((restaurants) => {
              restaurantContainer.innerHTML += (0, _templateCreator.createRestaurantsItemTemplate)(restaurants);
            }); // grid favorite

            if (restaurantFavorite.length <= 2) {
              restaurantContainer.classList.add('grid-container-favorite');
            } else {
              restaurantContainer.classList.add('grid-container');
            } // Fungsi ini akan dipanggil setelah render()

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    });
  },
};
const _default = Favorite;
exports.default = _default;
