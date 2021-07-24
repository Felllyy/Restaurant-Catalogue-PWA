"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _templateCreator = require("../views/templates/template-creator");

var LikeButtonPresenter = {
  init: function init(_ref) {
    var likeButtonContainer, favoriteRestaurants, restaurant;
    return regeneratorRuntime.async(function init$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurants = _ref.favoriteRestaurants, restaurant = _ref.restaurant;
            this._likeButtonContainer = likeButtonContainer;
            this._favoriteRestaurants = favoriteRestaurants;
            this._restaurant = restaurant;
            _context.next = 6;
            return regeneratorRuntime.awrap(this._renderButton());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  _renderButton: function _renderButton() {
    var id;
    return regeneratorRuntime.async(function _renderButton$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = this._restaurant.id;
            _context2.next = 3;
            return regeneratorRuntime.awrap(this._isRestaurantsExist(id));

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
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },
  _isRestaurantsExist: function _isRestaurantsExist(id) {
    var restaurant;
    return regeneratorRuntime.async(function _isRestaurantsExist$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(this._favoriteRestaurants.getRestaurant(id));

          case 2:
            restaurant = _context3.sent;
            return _context3.abrupt("return", !!restaurant);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  },
  _renderLike: function _renderLike() {
    var _this = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createLikeRestaurantButtonTemplate)();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', function _callee() {
      return regeneratorRuntime.async(function _callee$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_this._favoriteRestaurants.putRestaurant(_this._restaurant));

            case 2:
              _this._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    });
  },
  _renderLiked: function _renderLiked() {
    var _this2 = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createUnlikeRestaurantButtonTemplate)();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_this2._favoriteRestaurants.deleteRestaurant(_this2._restaurant.id));

            case 2:
              _this2._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
  }
};
var _default = LikeButtonPresenter;
exports["default"] = _default;