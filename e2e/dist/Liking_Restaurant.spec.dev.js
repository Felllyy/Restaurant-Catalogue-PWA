"use strict";

/* eslint-disable no-await-in-loop */
var assert = require('assert');

Feature('Liking Restaurants');
Before(function (_ref) {
  var I = _ref.I;
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', function (_ref2) {
  var I = _ref2.I;
  I.seeElement('#query'); // I.seeElement('.query'); // membuat test menjadi gagal

  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});
Scenario('liking one restaurant', function _callee(_ref3) {
  var I, firstRestaurant, firstRestaurantName, likedRestaurantName;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref3.I;
          I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
          I.amOnPage('/');
          I.seeElement('.restaurant__name a');
          firstRestaurant = locate('.restaurant__name a').first();
          _context.next = 7;
          return regeneratorRuntime.awrap(I.grabTextFrom(firstRestaurant));

        case 7:
          firstRestaurantName = _context.sent;
          I.click(firstRestaurant);
          I.seeElement('#likeButton');
          I.click('#likeButton');
          I.amOnPage('/#/favorite');
          I.seeElement('.resto-item');
          _context.next = 15;
          return regeneratorRuntime.awrap(I.grabTextFrom('.restaurant__name'));

        case 15:
          likedRestaurantName = _context.sent;
          assert.strictEqual(firstRestaurantName, likedRestaurantName);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
});
Scenario('searching restaurants', function _callee3(_ref4) {
  var I, names, i, searchQuery, matchingMovies, visibleLikedMovies;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I = _ref4.I;
          I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
          I.amOnPage('/');
          I.seeElement('.restaurant__name a');
          names = [];
          i = 1;

        case 6:
          if (!(i <= 3)) {
            _context3.next = 19;
            break;
          }

          I.click(locate('.restaurant__name a').at(i));
          I.seeElement('#likeButton');
          I.click('#likeButton');
          _context3.t0 = names;
          _context3.next = 13;
          return regeneratorRuntime.awrap(I.grabTextFrom('.restaurant__name'));

        case 13:
          _context3.t1 = _context3.sent;

          _context3.t0.push.call(_context3.t0, _context3.t1);

          I.amOnPage('/');

        case 16:
          i++;
          _context3.next = 6;
          break;

        case 19:
          I.amOnPage('/#/favorite');
          I.seeElement('#query');
          searchQuery = names[1].substring(1, 3);
          matchingMovies = names.filter(function (name) {
            return name.indexOf(searchQuery) !== -1;
          });
          I.fillField('#query', searchQuery);
          I.pressKey('Enter');
          _context3.next = 27;
          return regeneratorRuntime.awrap(I.grabNumberOfVisibleElements('.resto-item'));

        case 27:
          visibleLikedMovies = _context3.sent;
          assert.strictEqual(matchingMovies.length, visibleLikedMovies);
          matchingMovies.forEach(function _callee2(name, index) {
            var visibleName;
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(I.grabTextFrom(locate('.restaurant__name').at(index + 1)));

                  case 2:
                    visibleName = _context2.sent;
                    assert.strictEqual(name, visibleName);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });

        case 30:
        case "end":
          return _context3.stop();
      }
    }
  });
});