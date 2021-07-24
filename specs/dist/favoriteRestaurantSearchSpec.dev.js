"use strict";

var _favoriteRestaurantSearchPresenter = _interopRequireDefault(require("../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter"));

var _favoriteRestaurantIdb = _interopRequireDefault(require("../src/scripts/data/favorite-restaurant-idb"));

var _favoriteRestaurantSearchView = _interopRequireDefault(require("../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/extensions */
describe('Searching restaurants', function () {
  beforeEach(function () {
    var presenter;
    var favoriteRestaurants;
    var view;

    var searchRestaurants = function searchRestaurants(query) {
      var queryElement = document.getElementById('query');
      queryElement.value = query;
      queryElement.dispatchEvent(new Event('change'));
    };

    var setRestaurantSearchContainer = function setRestaurantSearchContainer() {
      view = new _favoriteRestaurantSearchView["default"]();
      document.body.innerHTML = view.getTemplate();
    };

    var constructPresenter = function constructPresenter() {
      favoriteRestaurants = spyOn(_favoriteRestaurantIdb["default"]);
      presenter = new _favoriteRestaurantSearchPresenter["default"]({
        favoriteRestaurants: favoriteRestaurants,
        view: view
      });
    };

    beforeEach(function () {
      setRestaurantSearchContainer();
      constructPresenter();
    });
    describe('When query is not empty', function () {
      it('should be able to capture the query typed by the user', function () {
        searchRestaurants('restoran a');
        expect(presenter.latestQuery).toEqual('restaurant a');
      });
      it('should ask the model to search for restaurants', function () {
        searchRestaurants('restoran a');
        expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restoran a');
      });
      it('should show the found restaurants', function () {
        presenter._showFoundRestaurants([{
          id: 1
        }]);

        expect(document.querySelectorAll('.resto-item').length).toEqual(1);

        presenter._showFoundRestaurants([{
          id: 1,
          name: 'Satu'
        }, {
          id: 2,
          name: 'Dua'
        }]);

        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
      });
      it('should show the name of the found restaurants', function () {
        presenter._showFoundRestaurants([{
          id: 1,
          name: 'Satu'
        }]);

        expect(document.querySelectorAll('.restaurant__name').item(0).textContent).toEqual('Satu');
      });
      it('should show - when the restaurant returned does not contain a name', function (done) {
        document.getElementById('restaurants').addEventListener('restaurants:updated', function () {
          var restaurantNames = document.querySelectorAll('.restaurant__name');
          expect(restaurantNames.item(0).textContent).toEqual('-');
          done();
        });
        favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([{
          id: 444
        }]);
        searchRestaurants('restaurant a');
      });
    });
    describe('When query is empty', function () {
      it('should capture the query as empty', function () {
        searchRestaurants(' ');
        expect(presenter.latestQuery.length).toEqual(0);
        searchRestaurants('    ');
        expect(presenter.latestQuery.length).toEqual(0);
        searchRestaurants('');
        expect(presenter.latestQuery.length).toEqual(0);
        searchRestaurants('\t');
        expect(presenter.latestQuery.length).toEqual(0);
      });
      it('should show all favorite restaurants', function () {
        searchRestaurants('    ');
        expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
      });
    });
    describe('When no favorite restaurants could be found', function () {
      it('should show the empty message', function (done) {
        document.getElementById('restaurants').addEventListener('restaurants:updated', function () {
          expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
          done();
        });
        favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);
        searchRestaurants('restaurant a');
      });
      it('should not show any restaurant', function (done) {
        document.getElementById('restaurants').addEventListener('restaurants:updated', function () {
          expect(document.querySelectorAll('.resto-item').length).toEqual(0);
          done();
        });
        favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);
        searchRestaurants('restaurant a');
      });
    });
  });
});