"use strict";

var _favoriteRestaurantShowPresenter = _interopRequireDefault(require("../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter"));

var _favoriteRestaurantIdb = _interopRequireDefault(require("../src/scripts/data/favorite-restaurant-idb"));

var _favoriteRestaurantSearchView = _interopRequireDefault(require("../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-new */

/* eslint-disable import/no-unresolved */

/* eslint-disable import/extensions */
describe('Showing all favorite restaurant', function () {
  var view;

  var renderTemplate = function renderTemplate() {
    view = new _favoriteRestaurantSearchView["default"]();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(function () {
    renderTemplate();
  });
  describe('When no restaurant have been liked', function () {
    it('should ask for the favorite restaurant', function () {
      var favoriteRestaurants = spyOnAllFunctions(_favoriteRestaurantIdb["default"]);
      new _favoriteRestaurantShowPresenter["default"]({
        view: view,
        favoriteRestaurants: favoriteRestaurants
      });
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
    it('should show the information that no restaurant have been liked', function (done) {
      document.getElementById('restaurants').addEventListener('restaurants:updated', function () {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
        done();
      });
      var favoriteRestaurants = spyOnAllFunctions(_favoriteRestaurantIdb["default"]);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);
      new _favoriteRestaurantShowPresenter["default"]({
        view: view,
        favoriteRestaurants: favoriteRestaurants
      });
    });
  });
  describe('When favorite restaurant exist', function () {
    it('should show the restaurant', function (done) {
      document.getElementById('restaurants').addEventListener('restaurants:updated', function () {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });
      var favoriteRestaurants = spyOnAllFunctions(_favoriteRestaurantIdb["default"]);
      favoriteRestaurants.getAllRestaurants.and.returnValues([{
        id: 11,
        name: 'A',
        pictureId: '111',
        rating: '3',
        address: 'Sebuah alamat A',
        city: 'Sebuah kota A',
        description: 'Sebuah restaurant A'
      }, {
        id: 22,
        name: 'B',
        pictureId: '222',
        rating: '4',
        address: 'Sebuah alamat B',
        city: 'Sebuah kota B',
        description: 'Sebuah restaurant B'
      }]);
      new _favoriteRestaurantShowPresenter["default"]({
        view: view,
        favoriteRestaurants: favoriteRestaurants
      });
    });
  });
});