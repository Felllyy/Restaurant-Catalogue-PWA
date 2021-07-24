"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itActsAsFavoriteRestaurantModel = void 0;

var itActsAsFavoriteRestaurantModel = function itActsAsFavoriteRestaurantModel(favoriteRestaurants) {
  it('should return the restaurant that has been added', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              id: 1
            });
            favoriteRestaurants.putRestaurant({
              id: 2
            });
            _context.t0 = expect;
            _context.next = 5;
            return regeneratorRuntime.awrap(favoriteRestaurants.getRestaurant(1));

          case 5:
            _context.t1 = _context.sent;
            _context.t2 = {
              id: 1
            };
            (0, _context.t0)(_context.t1).toEqual(_context.t2);
            _context.t3 = expect;
            _context.next = 11;
            return regeneratorRuntime.awrap(favoriteRestaurants.getRestaurant(2));

          case 11:
            _context.t4 = _context.sent;
            _context.t5 = {
              id: 2
            };
            (0, _context.t3)(_context.t4).toEqual(_context.t5);
            _context.t6 = expect;
            _context.next = 17;
            return regeneratorRuntime.awrap(favoriteRestaurants.getRestaurant(3));

          case 17:
            _context.t7 = _context.sent;
            _context.t8 = undefined;
            (0, _context.t6)(_context.t7).toEqual(_context.t8);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('should refuse a restaurant from being added if it does not have the correct property', function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              aProperty: 'property'
            });
            _context2.t0 = expect;
            _context2.next = 4;
            return regeneratorRuntime.awrap(favoriteRestaurants.getAllRestaurants());

          case 4:
            _context2.t1 = _context2.sent;
            _context2.t2 = [];
            (0, _context2.t0)(_context2.t1).toEqual(_context2.t2);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('can return all of the Restaurants that have been added', function _callee3() {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              id: 1
            });
            favoriteRestaurants.putRestaurant({
              id: 2
            });
            _context3.t0 = expect;
            _context3.next = 5;
            return regeneratorRuntime.awrap(favoriteRestaurants.getAllRestaurants());

          case 5:
            _context3.t1 = _context3.sent;
            _context3.t2 = [{
              id: 1
            }, {
              id: 2
            }];
            (0, _context3.t0)(_context3.t1).toEqual(_context3.t2);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  it('should remove favorite Restaurant', function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              id: 1
            });
            favoriteRestaurants.putRestaurant({
              id: 2
            });
            favoriteRestaurants.putRestaurant({
              id: 3
            });
            _context4.next = 5;
            return regeneratorRuntime.awrap(favoriteRestaurants.deleteRestaurant(1));

          case 5:
            _context4.t0 = expect;
            _context4.next = 8;
            return regeneratorRuntime.awrap(favoriteRestaurants.getAllRestaurants());

          case 8:
            _context4.t1 = _context4.sent;
            _context4.t2 = [{
              id: 2
            }, {
              id: 3
            }];
            (0, _context4.t0)(_context4.t1).toEqual(_context4.t2);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  it('should handle request to remove a Restaurant even though the Restaurant has not been added', function _callee5() {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              id: 1
            });
            favoriteRestaurants.putRestaurant({
              id: 2
            });
            favoriteRestaurants.putRestaurant({
              id: 3
            });
            _context5.next = 5;
            return regeneratorRuntime.awrap(favoriteRestaurants.deleteRestaurant(4));

          case 5:
            _context5.t0 = expect;
            _context5.next = 8;
            return regeneratorRuntime.awrap(favoriteRestaurants.getAllRestaurants());

          case 8:
            _context5.t1 = _context5.sent;
            _context5.t2 = [{
              id: 1
            }, {
              id: 2
            }, {
              id: 3
            }];
            (0, _context5.t0)(_context5.t1).toEqual(_context5.t2);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  it('should be able to search for restaurant', function _callee6() {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            favoriteRestaurants.putRestaurant({
              id: 1,
              name: 'restaurant a'
            });
            favoriteRestaurants.putRestaurant({
              id: 2,
              name: 'restaurant b'
            });
            favoriteRestaurants.putRestaurant({
              id: 3,
              name: 'restaurant abc'
            });
            favoriteRestaurants.putRestaurant({
              id: 4,
              name: 'ini mah restaurant abcd'
            });
            _context6.t0 = expect;
            _context6.next = 7;
            return regeneratorRuntime.awrap(favoriteRestaurants.searchRestaurants('restaurant a'));

          case 7:
            _context6.t1 = _context6.sent;
            _context6.t2 = [{
              id: 1,
              name: 'restaurant a'
            }, {
              id: 3,
              name: 'restaurant abc'
            }, {
              id: 4,
              name: 'ini mah restaurant abcd'
            }];
            (0, _context6.t0)(_context6.t1).toEqual(_context6.t2);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
}; // eslint-disable-next-line import/prefer-default-export


exports.itActsAsFavoriteRestaurantModel = itActsAsFavoriteRestaurantModel;