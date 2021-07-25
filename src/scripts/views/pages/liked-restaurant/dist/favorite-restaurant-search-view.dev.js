"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _templateCreator = _interopRequireDefault(require("../../templates/template-creator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FavoriteRestaurantSearchView =
/*#__PURE__*/
function () {
  function FavoriteRestaurantSearchView() {
    _classCallCheck(this, FavoriteRestaurantSearchView);
  }

  _createClass(FavoriteRestaurantSearchView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n       <div class=\"content\">\n       <h2 class=\"content__heading\" >Favorite Restaurants</h2>\n       <input id=\"query\" class=\"caribox\" type=\"text\" placeholder=\"Cari restoran\">\n           <div id=\"restaurants\" class=\"restaurants favorite\"></div>\n       </div>\n       ";
    }
  }, {
    key: "runWhenUserIsSearching",
    value: function runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', function (event) {
        callback(event.target.value);
      });
    }
  }, {
    key: "showRestaurants",
    value: function showRestaurants(restaurants) {
      this.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "showFavoriteRestaurants",
    value: function showFavoriteRestaurants() {
      var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var html;

      if (restaurants.length) {
        html = restaurants.reduce(function (carry, restaurant) {
          return carry.concat(_templateCreator["default"].createRestaurantsItemTemplate(restaurant));
        }, '');
      } else {
        html = this._getEmptyRestaurantTemplate();
      }

      document.getElementById('restaurants').innerHTML = html;
      document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }
  }, {
    key: "_getEmptyRestaurantTemplate",
    value: function _getEmptyRestaurantTemplate() {
      return '<div class="resto-item__not__found restaurants__not__found">Tidak ada restoran untuk ditampilkan</div>';
    }
  }]);

  return FavoriteRestaurantSearchView;
}();

var _default = FavoriteRestaurantSearchView;
exports["default"] = _default;