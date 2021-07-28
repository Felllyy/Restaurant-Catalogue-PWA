Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */
var FavoriteRestaurantSearchPresenter =
/* #__PURE__ */
(function () {
  function FavoriteRestaurantSearchPresenter(_ref) {
    var favoriteRestaurants = _ref.favoriteRestaurants;
    var view = _ref.view;

    _classCallCheck(this, FavoriteRestaurantSearchPresenter);

    this._view = view;

    this._listenToSearchRequestByUser();

    this._favoriteRestaurants = favoriteRestaurants;
  }

  _createClass(FavoriteRestaurantSearchPresenter, [{
    key: '_listenToSearchRequestByUser',
    value: function _listenToSearchRequestByUser() {
      var _this = this;

      this._view.runWhenUserIsSearching((latestQuery) => {
        _this._searchRestaurants(latestQuery);
      });
    },
  }, {
    key: '_searchRestaurants',
    value: function _searchRestaurants(latestQuery) {
      var foundRestaurants;
      return regeneratorRuntime.async(function _searchRestaurants$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this._latestQuery = latestQuery.trim();

              if (!(this.latestQuery.length > 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(this._favoriteRestaurants.searchRestaurants(this.latestQuery));

            case 4:
              foundRestaurants = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return regeneratorRuntime.awrap(this._favoriteRestaurants.getAllRestaurants());

            case 9:
              foundRestaurants = _context.sent;

            case 10:
              this._showFoundRestaurants(foundRestaurants);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    },
  }, {
    key: '_showFoundRestaurants',
    value: function _showFoundRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    },
  }, {
    key: 'latestQuery',
    get: function get() {
      return this._latestQuery;
    },
  }]);

  return FavoriteRestaurantSearchPresenter;
}());

var _default = FavoriteRestaurantSearchPresenter;
exports.default = _default;
