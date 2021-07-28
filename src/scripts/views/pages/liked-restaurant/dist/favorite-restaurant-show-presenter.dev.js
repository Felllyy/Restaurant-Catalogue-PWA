Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FavoriteRestaurantShowPresenter =
/* #__PURE__ */
(function () {
  function FavoriteRestaurantShowPresenter(_ref) {
    var view = _ref.view;
    var favoriteRestaurants = _ref.favoriteRestaurants;

    _classCallCheck(this, FavoriteRestaurantShowPresenter);

    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  _createClass(FavoriteRestaurantShowPresenter, [{
    key: '_showFavoriteRestaurants',
    value: function _showFavoriteRestaurants() {
      var restaurants;
      return regeneratorRuntime.async(function _showFavoriteRestaurants$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this._favoriteRestaurants.getAllRestaurants());

            case 2:
              restaurants = _context.sent;

              this._displayRestaurants(restaurants);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    },
  }, {
    key: '_displayRestaurants',
    value: function _displayRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    },
  }]);

  return FavoriteRestaurantShowPresenter;
}());

var _default = FavoriteRestaurantShowPresenter;
exports.default = _default;
