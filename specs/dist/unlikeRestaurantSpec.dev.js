"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _favoriteRestaurantIdb = _interopRequireDefault(require("../src/scripts/data/favorite-restaurant-idb"));

var TestFactories = _interopRequireWildcard(require("./helpers/testFactories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addLikeButtonContainer = function addLikeButtonContainer() {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a Restaurant', function () {
  beforeEach(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addLikeButtonContainer();
            _context.next = 3;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].putRestaurant({
              id: 1
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  afterEach(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].deleteRestaurant(1));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('should display unlike widget when the restaurant has been liked', function _callee3() {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(TestFactories.createLikeButtonPresenterWithRestaurant({
              id: 1
            }));

          case 2:
            expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  it('should not display unlike widget when the restaurant has been liked', function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(TestFactories.createLikeButtonPresenterWithRestaurant({
              id: 1
            }));

          case 2:
            expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  it('should be able to remove liked restaurant from the list', function _callee5() {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(TestFactories.createLikeButtonPresenterWithRestaurant({
              id: 1
            }));

          case 2:
            document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
            _context5.t0 = expect;
            _context5.next = 6;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].getAllRestaurants());

          case 6:
            _context5.t1 = _context5.sent;
            _context5.t2 = [];
            (0, _context5.t0)(_context5.t1).toEqual(_context5.t2);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  it('should not throw error if the unliked restaurant is not in the list', function _callee6() {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(TestFactories.createLikeButtonPresenterWithRestaurant({
              id: 1
            }));

          case 2:
            _context6.next = 4;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].deleteRestaurant(1));

          case 4:
            document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
            _context6.t0 = expect;
            _context6.next = 8;
            return regeneratorRuntime.awrap(_favoriteRestaurantIdb["default"].getAllRestaurants());

          case 8:
            _context6.t1 = _context6.sent;
            _context6.t2 = [];
            (0, _context6.t0)(_context6.t1).toEqual(_context6.t2);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
});