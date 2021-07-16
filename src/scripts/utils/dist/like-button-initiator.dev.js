/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _favoriteRestaurantIdb = _interopRequireDefault(require('../data/favorite-restaurant-idb'));

const _templateCreator = require('../views/templates/template-creator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LikeButtonInitiator = {
  init: function init(_ref) {
    let likeButtonContainer; let
      restaurant;
    return regeneratorRuntime.async(function init$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likeButtonContainer = _ref.likeButtonContainer, restaurant = _ref.restaurant;
            this._likeButtonContainer = likeButtonContainer;
            this._restaurant = restaurant;
            _context.next = 5;
            return regeneratorRuntime.awrap(this._renderButton());

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, null, this);
  },
  _renderButton: function _renderButton() {
    let id;
    return regeneratorRuntime.async(function _renderButton$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = this._restaurant.id;
            _context2.next = 3;
            return regeneratorRuntime.awrap(this._isMovieExist(id));

          case 3:
            if (!_context2.sent) {
              _context2.next = 7;
              break;
            }

            this._renderLiked();

            _context2.next = 8;
            break;

          case 7:
            this._renderLike();

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, null, this);
  },
  _isMovieExist: function _isMovieExist(id) {
    let restaurant;
    return regeneratorRuntime.async((_context3) => {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb.default.getMovie(id));

          case 2:
            restaurant = _context3.sent;
            return _context3.abrupt('return', !!restaurant);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    });
  },
  _renderLike: function _renderLike() {
    const _this = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createLikeButtonTemplate)();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => regeneratorRuntime.async((_context4) => {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb.default.putMovie(_this._restaurant));

          case 2:
            _this._renderButton();

          case 3:
          case 'end':
            return _context4.stop();
        }
      }
    }));
  },
  _renderLiked: function _renderLiked() {
    const _this2 = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createLikedButtonTemplate)();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => regeneratorRuntime.async((_context5) => {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb.default.deleteMovie(_this2._restaurant.id));

          case 2:
            _this2._renderButton();

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }));
  },
};
const _default = LikeButtonInitiator;
exports.default = _default;
