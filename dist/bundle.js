/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([20,0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'restaurants',
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  HOME: "".concat(config["a" /* default */].BASE_URL, "list"),
  FAVORITE: "".concat(config["a" /* default */].BASE_URL, "list/favorite?api_key=").concat(config["a" /* default */].KEY, "&language=").concat(config["a" /* default */].DEFAULT_LANGUAGE, "&page=1"),
  DETAIL: function DETAIL(id) {
    return "".concat(config["a" /* default */].BASE_URL, "detail/").concat(id, "?api_key=").concat(config["a" /* default */].KEY);
  },
  REVIEW: "".concat(config["a" /* default */].BASE_URL, "review")
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/therestaurantdb-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var therestaurantdb_source_TheRestaurantsDbSource = /*#__PURE__*/function () {
  function TheRestaurantsDbSource() {
    _classCallCheck(this, TheRestaurantsDbSource);
  }

  _createClass(TheRestaurantsDbSource, null, [{
    key: "homeRestaurants",
    value: function () {
      var _homeRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.HOME);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function homeRestaurants() {
        return _homeRestaurants.apply(this, arguments);
      }

      return homeRestaurants;
    }()
  }, {
    key: "favoriteRestaurants",
    value: function () {
      var _favoriteRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.FAVORITE);

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function favoriteRestaurants() {
        return _favoriteRestaurants.apply(this, arguments);
      }

      return favoriteRestaurants;
    }()
  }, {
    key: "detailRestaurants",
    value: function () {
      var _detailRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(api_endpoint.DETAIL(id));

              case 2:
                response = _context3.sent;
                return _context3.abrupt("return", response.json());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function detailRestaurants(_x) {
        return _detailRestaurants.apply(this, arguments);
      }

      return detailRestaurants;
    }()
  }, {
    key: "reviewRestaurant",
    value: function () {
      var _reviewRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dataInput) {
        var reviewResponse;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(api_endpoint.REVIEW, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': config["a" /* default */].KEY
                  },
                  body: JSON.stringify(dataInput)
                });

              case 2:
                reviewResponse = _context4.sent;
                return _context4.abrupt("return", reviewResponse);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function reviewRestaurant(_x2) {
        return _reviewRestaurant.apply(this, arguments);
      }

      return reviewRestaurant;
    }()
  }]);

  return TheRestaurantsDbSource;
}();

/* harmony default export */ var therestaurantdb_source = __webpack_exports__["a"] = (therestaurantdb_source_TheRestaurantsDbSource);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-prototype-builtins */


var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (restaurant.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  searchRestaurants: function searchRestaurants(query) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.getAllRestaurants();

            case 2:
              return _context5.abrupt("return", _context5.sent.filter(function (restaurant) {
                var loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
                var jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
                var loweredCaseQuery = query.toLowerCase();
                var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
                return jammedRestaurantName.indexOf(jammedQuery) !== -1;
              }));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantIdb);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('active');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DrawerInitiator);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);



var routes = {
  '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  // default page
  '/home': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/favorite': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurants, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurants = _ref.favoriteRestaurants, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._favoriteRestaurants = favoriteRestaurants;
              _this._restaurant = restaurant;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantsExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantsExist: function _isRestaurantsExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurants.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createLikeRestaurantButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurants.putRestaurant(_this4._restaurant);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createUnlikeRestaurantButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurants.deleteRestaurant(_this5._restaurant.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


var reviewUpdate = function reviewUpdate(url, name, review) {
  var dataInput = {
    id: url.id,
    name: name,
    review: review
  };
  _data_therestaurantdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reviewRestaurant(dataInput);
  var reviewContainer = document.querySelector('#review');
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var date = new Date().toLocaleDateString('id-ID', options);
  var newReview = "\n    <div class=\"testi-item\">\n        <div class=\"testi-avatar\">\n        <picture>\n          <source type=\"image/webp\" media=\"(max-width: 600px)\" srcset=\"./images/user.webp\">\n          <source type=\"image/jpeg\" media=\"(max-width: 600px)\" srcset=\"./images/user.jpg\">\n          <img class=\"lazyload\"\n            data-src='./images/user.jpg' \n            alt=\"Gambar pengguna\">\n          </img>\n        </picture>\n        </div>\n        <div class=\"testimonials-text-before\"><i class=\"fa fa-quote-right\"></i></div>\n        <div class=\"testimonials-text\">\n            <p>".concat(review, "</p>\n            <div class=\"testimonials-avatar\">\n                <h3>").concat(name, "</h3>\n                <h4>").concat(date, "</h4>\n            </div>\n        </div>\n        <div class=\"testimonials-text-after\"><i class=\"fa fa-quote-left\"></i></div> \n    ");
  reviewContainer.innerHTML += newReview;
};

/* harmony default export */ __webpack_exports__["a"] = (reviewUpdate);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(16);

// EXTERNAL MODULE: ./src/styles/style.css
var style = __webpack_require__(17);

// EXTERNAL MODULE: ./src/styles/responsive.css
var responsive = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(19);

// EXTERNAL MODULE: ./src/scripts/views/app.js
var app = __webpack_require__(8);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js').then(function (registration) {
                console.log('SW registered: ', registration);
              })["catch"](function (registrationError) {
                console.log('SW registration failed: ', registrationError);
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// CONCATENATED MODULE: ./src/scripts/index.js







var scripts_app = new app["a" /* default */]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.mainNav'),
  content: document.querySelector('#mainContent')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
});

/***/ })
/******/ ]);