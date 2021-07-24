"use strict";

var _favoriteRestaurantContract = require("./contract/favoriteRestaurantContract");

/* eslint-disable no-return-assign */

/* eslint-disable no-prototype-builtins */
var favoriteRestaurants = [];
var FavoriteRestaurantArray = {
  getRestaurant: function getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find(function (restaurant) {
      return restaurant.id === id;
    });
  },
  getAllRestaurants: function getAllRestaurants() {
    return favoriteRestaurants;
  },
  putRestaurant: function putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },
  deleteRestaurant: function deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter(function (restaurant) {
      return restaurant.id !== id;
    });
  },
  searchRestaurants: function searchRestaurants(query) {
    return this.getAllRestaurants().filter(function (restaurant) {
      var loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      var jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
      var loweredCaseQuery = query.toLowerCase();
      var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  }
};
describe('Favorite Restaurant Array Contract Test Implementation', function () {
  afterEach(function () {
    return favoriteRestaurants = [];
  });
  (0, _favoriteRestaurantContract.itActsAsFavoriteRestaurantModel)(FavoriteRestaurantArray);
});