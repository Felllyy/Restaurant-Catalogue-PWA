(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var template = /*#__PURE__*/function () {
  function template() {
    _classCallCheck(this, template);
  }

  _createClass(template, null, [{
    key: "createRestaurantsDetailTemplate",
    value: function createRestaurantsDetailTemplate(restaurant) {
      return "\n    <div class=\"grid-container-detail\">\n        <div class=\"titleDetail\" id=\"titleDetail\">\n          <h2 class=\"restaurant__name headline headdetail\">".concat(restaurant.name, "</h2>\n          <span class=\"section-separator headSeparator\"></span>\n          <div class=\"categories\">\n            <p>Kategori: </p>\n            <div id=categori></div>\n          </div>\n        </div>\n        <div class=\"headline rating\">\n          <h4>Rating ").concat(restaurant.rating, "</h4>\n          <div class=\"stars-outer\">\n            <div class=\"stars-inner\"></div>\n          </div>\n        </div>\n        \n        <div class=\"itemdetail2\">\n          <img class=\"lazyload poster\" data-src=\"").concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_IMAGE_URL + restaurant.pictureId, "\" alt=\"").concat(restaurant.name, "\" />\n        </div>\n\n        <div class=\"itemdetail3\">\n          <h3>Ringkasan</h3>\n          <p>").concat(restaurant.description, "</p><br>\n          <h4>Menu</h4>\n          <div class=\"menu\">\n            <div class=\"food\">\n              <h5>Makanan :</h5>\n              <div id=\"food\"></div>\n            </div>\n            <div class=\"drink\">\n              <h5>Minuman :</h5>\n              <div id=\"drink\"></div>\n            </div>\n          </div>\n          <h4>Alamat</h4>\n          <p class=\"almt\">").concat(restaurant.address, ", ").concat(restaurant.city, "</p>\n        </div>\n    </div>\n    <div class=\"section-title\">\n      <h2>Reviews</h2>\n      <span class=\"section-separator\"></span>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      <button id=\"btn\" class=\"tombol\" aria-label=\"Klik tambah ulasan\"><i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i>\n    </button>\n    ");
    }
  }, {
    key: "createRestaurantsReviewTemplate",
    value: function createRestaurantsReviewTemplate(restaurant) {
      return "\n        <div class=\"testi-item\">\n            <div class=\"testi-avatar\">\n            <picture>\n              <source type=\"image/webp\" media=\"(max-width: 600px)\" srcset=\"./images/user.webp\">\n              <source type=\"image/jpeg\" media=\"(max-width: 600px)\" srcset=\"./images/user.jpg\">\n              <img class=\"lazyload\"\n                data-src='./images/user.jpg' \n                alt=\"Gambar pengguna\">\n              </img>\n            </picture>\n            </div>\n            <div class=\"testimonials-text-before\"><i class=\"fa fa-quote-right\"></i></div>\n            <div class=\"testimonials-text\">\n                <p>".concat(restaurant.review, "</p>\n                <div class=\"testimonials-avatar\">\n                    <h3>").concat(restaurant.name, "</h3>\n                    <h4>").concat(restaurant.date, "</h4>\n                </div>\n            </div>\n            <div class=\"testimonials-text-after\"><i class=\"fa fa-quote-left\"></i></div> \n    ");
    }
  }, {
    key: "createRestaurantsItemTemplate",
    value: function createRestaurantsItemTemplate(restaurants) {
      return "\n    <div class=\"resto-item\">\n              <div class=\"foto-blok\">\n                <img class=\"lazyload foto\" data-src=\"".concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_IMAGE_URL + restaurants.pictureId, "\" alt=\"").concat(restaurants.name || '-', "\" />\n                <div class=\"kota\">\n                    <span>").concat(restaurants.city || '-', "</span>\n                </div>\n                </a>\n              </div>\n              <div class=\"deskripsi\">\n                <p class=\"rate\" tabindex=\"0\"    >\n                  Rating <span>").concat(restaurants.rating || '-', "</span>\n                </p>\n                <div id=\"detailContent\" class=\"restaurant__name\"><a class=\"name\" href=\"#/detail/").concat(restaurants.id, "\" tabindex=\"0\">").concat(restaurants.name || '-', "</a></div>\n                <p class=\"desc\">").concat(restaurants.description || '-', "</p>\n              </div>\n            </div>\n      ");
    }
  }, {
    key: "createLikeRestaurantButtonTemplate",
    value: function createLikeRestaurantButtonTemplate() {
      return "\n      <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n        <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n      </button>\n    ";
    }
  }, {
    key: "createUnlikeRestaurantButtonTemplate",
    value: function createUnlikeRestaurantButtonTemplate() {
      return "\n      <button aria-label=\"unlike this restaurant\" id=\"likeButton\" class=\"like\">\n        <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n      </button>\n    ";
    }
  }]);

  return template;
}();

/* harmony default export */ __webpack_exports__["a"] = (template);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Home = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <div class=\"jumbotron\">\n        <div class=\"bluring\"></div>\n        <picture>\n          <source type=\"image/webp\" media=\"(max-width: 600px)\" srcset=\"./images/hero-image_2.webp\">\n          <source type=\"image/jpeg\" media=\"(max-width: 600px)\" srcset=\"./images/hero-image_2.jpg\">\n          <img class=\"lazyload\"\n            data-src='./images/hero-image_2.jpg' \n            alt=\"Gambar jumbotron\"\n            width=\"1350px\"\n            height=\"900px\">\n          </img>\n        </picture>\n        <div class=\"tekstron\">\n            <h1 tabindex=\"0\">Hayu ah urang taruang</h1>\n            <p tabindex=\"0\">Mangga dieksplor hela restona</p>\n          <a href=\"#resto-blok\" class=\"cari\">Explore</a>\n        </div>\n    </div>\n    <div>\n      <p class=\"headline restoblok\" id=\"resto-blok\" tabindex=\"0\">Explore Restaurant</p>\n      <span class=\"section-separator\"></span>\n    </div>\n    <div class=\"item\">\n    <div class=\"grid-container explore\" id=\"posts\"></div>\n    </div>\n\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurant, restaurantContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].homeRestaurants();

            case 2:
              restaurant = _context2.sent;
              restaurantContainer = document.querySelector('#posts');
              restaurant.forEach(function (restaurants) {
                restaurantContainer.innerHTML += _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].createRestaurantsItemTemplate(restaurants);
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;

    _classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].init({
        button: this._button,
        drawer: this._drawer,
        content: this._content
      }); // kita bisa menginisiasikan komponen lain bila ada
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].parseActiveUrlWithCombiner();
                page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"][url];
                _context.next = 4;
                return page.render();

              case 4:
                this._content.innerHTML = _context.sent;
                _context.next = 7;
                return page.afterRender();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _utils_review_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _data_favorite_restaurant_idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */






var Detail = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <div id=\"detailItem\" class=\"detailblok\"></div>\n    <div id=\"likeButtonContainer\"></div>\n\n    <div id=\"mdl\" class=\"modal\">\n      <form class=\"modal-content\">\n        <h2 class=\"headline\">Tambah Ulasan</h2>\n        <span class=\"close\">&times;</span>\n        <label for=\"inName\">Nama</label>\n        <input name=\"inName\" type=\"text\" class=\"namaReviewer\" id=\"inName\" placeholder=\"Masukkan nama\">\n        <label for=\"inReview\">Ulasan</label>\n        <textarea name=\"inReview\" class=\"isiReview\" id=\"inReview\" placeholder=\"Tambahkan review\"></textarea>\n        <button type=\"submit\" class=\"btnSubmit\">Kirim</button>\n      </form>\n    </div>\n    <div id=\"review\" class=\"reviewblok\"></div>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurantDetail, detailContainer, categoriContainer, foodContainer, drinkContainer, ratings, starTotal, starPercentage, reviewContainer, modal, btn, span, btnSubmit, nameIn, reviewIn;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Fungsi ini akan dipanggil setelah render()
              url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].detailRestaurants(url.id);

            case 3:
              restaurantDetail = _context2.sent;
              detailContainer = document.querySelector('#detailItem');
              detailContainer.innerHTML = _templates_template_creator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].createRestaurantsDetailTemplate(restaurantDetail.restaurant);
              categoriContainer = document.querySelector('#categori');
              restaurantDetail.restaurant.categories.forEach(function (restaurant) {
                categoriContainer.innerHTML += "<p>".concat(restaurant.name, "</p>");
              });
              foodContainer = document.querySelector('#food');
              restaurantDetail.restaurant.menus.foods.forEach(function (restaurant) {
                foodContainer.innerHTML += "<p>- ".concat(restaurant.name, "</p>");
              });
              drinkContainer = document.querySelector('#drink');
              restaurantDetail.restaurant.menus.drinks.forEach(function (restaurant) {
                drinkContainer.innerHTML += "<p>- ".concat(restaurant.name, "</p>");
              }); // rating

              ratings = restaurantDetail.restaurant.rating;
              starTotal = 5; // eslint-disable-next-line prefer-template

              starPercentage = ratings / starTotal * 100 + '%';
              document.querySelector('.rating .stars-inner').style.width = starPercentage; // reviews

              reviewContainer = document.querySelector('#review');
              restaurantDetail.restaurant.customerReviews.forEach(function (restaurant) {
                reviewContainer.innerHTML += _templates_template_creator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].createRestaurantsReviewTemplate(restaurant);
              }); // css grid review

              if (restaurantDetail.restaurant.customerReviews.length == 1) {
                reviewContainer.classList.add('grid-container-satu');
              } else if (restaurantDetail.restaurant.customerReviews.length == 2) {
                reviewContainer.classList.add('grid-container-dua');
              } else {
                reviewContainer.classList.add('grid-container-review');
              } // add review


              modal = document.getElementById('mdl');
              btn = document.getElementById('btn');
              span = document.getElementsByClassName('close')[0];

              btn.onclick = function () {
                modal.style.display = 'block';
              };

              span.onclick = function () {
                modal.style.display = 'none';
              };

              window.onclick = function (event) {
                if (event.target === modal) {
                  modal.style.display = 'none';
                }
              }; // review


              btnSubmit = document.querySelector('.btnSubmit');
              nameIn = document.querySelector('#inName');
              reviewIn = document.querySelector('#inReview');
              btnSubmit.addEventListener('click', function (e) {
                e.preventDefault();

                if (nameIn.value === '' || reviewIn.value === '') {
                  // eslint-disable-next-line no-alert
                  alert('Isi nama dan ulasan!');
                  nameIn.value = '';
                  reviewIn.value = '';
                } else {
                  Object(_utils_review_update__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(url, nameIn.value, reviewIn.value);
                  nameIn.value = '';
                  reviewIn.value = '';
                  modal.style.display = 'none';
                }
              }); // likebutton

              _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurants: _data_favorite_restaurant_idb__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
                restaurant: {
                  id: restaurantDetail.restaurant.id,
                  name: restaurantDetail.restaurant.name,
                  pictureId: restaurantDetail.restaurant.pictureId,
                  rating: restaurantDetail.restaurant.rating,
                  address: restaurantDetail.restaurant.address,
                  city: restaurantDetail.restaurant.city,
                  description: restaurantDetail.restaurant.description
                }
              });

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/data/favorite-restaurant-idb.js
var favorite_restaurant_idb = __webpack_require__(3);

// EXTERNAL MODULE: ./src/scripts/views/templates/template-creator.js
var template_creator = __webpack_require__(1);

// CONCATENATED MODULE: ./src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var favorite_restaurant_search_view_FavoriteRestaurantSearchView = /*#__PURE__*/function () {
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
          return carry.concat(template_creator["a" /* default */].createRestaurantsItemTemplate(restaurant));
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

/* harmony default export */ var favorite_restaurant_search_view = (favorite_restaurant_search_view_FavoriteRestaurantSearchView);
// CONCATENATED MODULE: ./src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function favorite_restaurant_show_presenter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_show_presenter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_show_presenter_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_show_presenter_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_show_presenter_defineProperties(Constructor, staticProps); return Constructor; }

var FavoriteRestaurantShowPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantShowPresenter(_ref) {
    var view = _ref.view,
        favoriteRestaurants = _ref.favoriteRestaurants;

    favorite_restaurant_show_presenter_classCallCheck(this, FavoriteRestaurantShowPresenter);

    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  favorite_restaurant_show_presenter_createClass(FavoriteRestaurantShowPresenter, [{
    key: "_showFavoriteRestaurants",
    value: function () {
      var _showFavoriteRestaurants2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var restaurants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._favoriteRestaurants.getAllRestaurants();

              case 2:
                restaurants = _context.sent;

                this._displayRestaurants(restaurants);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _showFavoriteRestaurants() {
        return _showFavoriteRestaurants2.apply(this, arguments);
      }

      return _showFavoriteRestaurants;
    }()
  }, {
    key: "_displayRestaurants",
    value: function _displayRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }]);

  return FavoriteRestaurantShowPresenter;
}();

/* harmony default export */ var favorite_restaurant_show_presenter = (FavoriteRestaurantShowPresenter);
// CONCATENATED MODULE: ./src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter.js
function favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_restaurant_search_presenter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function favorite_restaurant_search_presenter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_search_presenter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_search_presenter_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_search_presenter_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_search_presenter_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */
var FavoriteRestaurantSearchPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchPresenter(_ref) {
    var favoriteRestaurants = _ref.favoriteRestaurants,
        view = _ref.view;

    favorite_restaurant_search_presenter_classCallCheck(this, FavoriteRestaurantSearchPresenter);

    this._view = view;

    this._listenToSearchRequestByUser();

    this._favoriteRestaurants = favoriteRestaurants;
  }

  favorite_restaurant_search_presenter_createClass(FavoriteRestaurantSearchPresenter, [{
    key: "_listenToSearchRequestByUser",
    value: function _listenToSearchRequestByUser() {
      var _this = this;

      this._view.runWhenUserIsSearching(function (latestQuery) {
        _this._searchRestaurants(latestQuery);
      });
    }
  }, {
    key: "_searchRestaurants",
    value: function () {
      var _searchRestaurants2 = favorite_restaurant_search_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latestQuery) {
        var foundRestaurants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._latestQuery = latestQuery.trim();

                if (!(this.latestQuery.length > 0)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this._favoriteRestaurants.searchRestaurants(this.latestQuery);

              case 4:
                foundRestaurants = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this._favoriteRestaurants.getAllRestaurants();

              case 9:
                foundRestaurants = _context.sent;

              case 10:
                this._showFoundRestaurants(foundRestaurants);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _searchRestaurants(_x) {
        return _searchRestaurants2.apply(this, arguments);
      }

      return _searchRestaurants;
    }()
  }, {
    key: "_showFoundRestaurants",
    value: function _showFoundRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "latestQuery",
    get: function get() {
      return this._latestQuery;
    }
  }]);

  return FavoriteRestaurantSearchPresenter;
}();

/* harmony default export */ var favorite_restaurant_search_presenter = (FavoriteRestaurantSearchPresenter);
// CONCATENATED MODULE: ./src/scripts/views/pages/favorite.js
function favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-new */




var view = new favorite_restaurant_search_view();
var Favorite = {
  render: function render() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", view.getTemplate());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var favoriteRestaurants, restaurantContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              new favorite_restaurant_show_presenter({
                view: view,
                favoriteRestaurants: favorite_restaurant_idb["a" /* default */]
              });
              new favorite_restaurant_search_presenter({
                view: view,
                favoriteRestaurants: favorite_restaurant_idb["a" /* default */]
              });
              _context2.next = 4;
              return favorite_restaurant_idb["a" /* default */].getAllRestaurants();

            case 4:
              favoriteRestaurants = _context2.sent;
              restaurantContainer = document.querySelector('.favorite'); // grid favorite

              if (favoriteRestaurants.length <= 2) {
                restaurantContainer.classList.add('grid-container-favorite');
              } else {
                restaurantContainer.classList.add('grid-container');
              } // Fungsi ini akan dipanggil setelah render()


            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var favorite = __webpack_exports__["a"] = (Favorite);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })
]]);