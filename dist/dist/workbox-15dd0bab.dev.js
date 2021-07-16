"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

define("./workbox-15dd0bab.js", ["exports"], function (t) {
  "use strict";

  try {
    self["workbox:core:6.1.5"] && _();
  } catch (t) {}

  var e = function e(t) {
    var s = t;

    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }

    return e.length > 0 && (s += " :: ".concat(JSON.stringify(e))), s;
  };

  var s =
  /*#__PURE__*/
  function (_Error) {
    _inherits(s, _Error);

    function s(t, _s) {
      var _this;

      _classCallCheck(this, s);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e(t, _s))), _this.name = t, _this.details = _s;
      return _this;
    }

    return s;
  }(_wrapNativeSuper(Error));

  try {
    self["workbox:routing:6.1.5"] && _();
  } catch (t) {}

  var n = function n(t) {
    return t && "object" == _typeof(t) ? t : {
      handle: t
    };
  };

  var i =
  /*#__PURE__*/
  function () {
    function i(t, e) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";

      _classCallCheck(this, i);

      this.handler = n(e), this.match = t, this.method = s;
    }

    _createClass(i, [{
      key: "setCatchHandler",
      value: function setCatchHandler(t) {
        this.catchHandler = n(t);
      }
    }]);

    return i;
  }();

  var r =
  /*#__PURE__*/
  function (_i) {
    _inherits(r, _i);

    function r(t, e, s) {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, _getPrototypeOf(r).call(this, function (_ref) {
        var e = _ref.url;
        var s = t.exec(e.href);
        if (s && (e.origin === location.origin || 0 === s.index)) return s.slice(1);
      }, e, s));
    }

    return r;
  }(i);

  var o =
  /*#__PURE__*/
  function () {
    function o() {
      _classCallCheck(this, o);

      this.t = new Map(), this.i = new Map();
    }

    _createClass(o, [{
      key: "addFetchListener",
      value: function addFetchListener() {
        var _this2 = this;

        self.addEventListener("fetch", function (t) {
          var e = t.request,
              s = _this2.handleRequest({
            request: e,
            event: t
          });

          s && t.respondWith(s);
        });
      }
    }, {
      key: "addCacheListener",
      value: function addCacheListener() {
        var _this3 = this;

        self.addEventListener("message", function (t) {
          if (t.data && "CACHE_URLS" === t.data.type) {
            var _e = t.data.payload,
                _s2 = Promise.all(_e.urlsToCache.map(function (e) {
              "string" == typeof e && (e = [e]);

              var s = _construct(Request, _toConsumableArray(e));

              return _this3.handleRequest({
                request: s,
                event: t
              });
            }));

            t.waitUntil(_s2), t.ports && t.ports[0] && _s2.then(function () {
              return t.ports[0].postMessage(!0);
            });
          }
        });
      }
    }, {
      key: "handleRequest",
      value: function handleRequest(_ref2) {
        var _this4 = this;

        var t = _ref2.request,
            e = _ref2.event;
        var s = new URL(t.url, location.href);
        if (!s.protocol.startsWith("http")) return;

        var n = s.origin === location.origin,
            _this$findMatchingRou = this.findMatchingRoute({
          event: e,
          request: t,
          sameOrigin: n,
          url: s
        }),
            i = _this$findMatchingRou.params,
            r = _this$findMatchingRou.route;

        var o = r && r.handler;
        var a = t.method;
        if (!o && this.i.has(a) && (o = this.i.get(a)), !o) return;
        var c;

        try {
          c = o.handle({
            url: s,
            request: t,
            event: e,
            params: i
          });
        } catch (t) {
          c = Promise.reject(t);
        }

        var h = r && r.catchHandler;
        return c instanceof Promise && (this.o || h) && (c = c["catch"](function _callee(n) {
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!h) {
                    _context.next = 10;
                    break;
                  }

                  _context.prev = 1;
                  _context.next = 4;
                  return regeneratorRuntime.awrap(h.handle({
                    url: s,
                    request: t,
                    event: e,
                    params: i
                  }));

                case 4:
                  return _context.abrupt("return", _context.sent);

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                  n = _context.t0;

                case 10:
                  if (!_this4.o) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return", _this4.o.handle({
                    url: s,
                    request: t,
                    event: e
                  }));

                case 12:
                  throw n;

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, null, null, [[1, 7]]);
        })), c;
      }
    }, {
      key: "findMatchingRoute",
      value: function findMatchingRoute(_ref3) {
        var t = _ref3.url,
            e = _ref3.sameOrigin,
            s = _ref3.request,
            n = _ref3.event;
        var i = this.t.get(s.method) || [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _r = _step.value;

            var _i2 = void 0;

            var _o = _r.match({
              url: t,
              sameOrigin: e,
              request: s,
              event: n
            });

            if (_o) return _i2 = _o, (Array.isArray(_o) && 0 === _o.length || _o.constructor === Object && 0 === Object.keys(_o).length || "boolean" == typeof _o) && (_i2 = void 0), {
              route: _r,
              params: _i2
            };
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return {};
      }
    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
        this.i.set(e, n(t));
      }
    }, {
      key: "setCatchHandler",
      value: function setCatchHandler(t) {
        this.o = n(t);
      }
    }, {
      key: "registerRoute",
      value: function registerRoute(t) {
        this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t);
      }
    }, {
      key: "unregisterRoute",
      value: function unregisterRoute(t) {
        if (!this.t.has(t.method)) throw new s("unregister-route-but-not-found-with-method", {
          method: t.method
        });
        var e = this.t.get(t.method).indexOf(t);
        if (!(e > -1)) throw new s("unregister-route-route-not-registered");
        this.t.get(t.method).splice(e, 1);
      }
    }, {
      key: "routes",
      get: function get() {
        return this.t;
      }
    }]);

    return o;
  }();

  var a;

  function c() {
    return (c = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e];

        for (var n in s) {
          Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var h = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: "undefined" != typeof registration ? registration.scope : ""
  },
      u = function u(t) {
    return [h.prefix, t, h.suffix].filter(function (t) {
      return t && t.length > 0;
    }).join("-");
  },
      l = function l(t) {
    return t || u(h.precache);
  },
      f = function f(t) {
    return t || u(h.runtime);
  };

  function w(t, e) {
    var s = e();
    return t.waitUntil(s), s;
  }

  try {
    self["workbox:precaching:6.1.5"] && _();
  } catch (t) {}

  function d(t) {
    if (!t) throw new s("add-to-cache-list-unexpected-type", {
      entry: t
    });

    if ("string" == typeof t) {
      var _e2 = new URL(t, location.href);

      return {
        cacheKey: _e2.href,
        url: _e2.href
      };
    }

    var e = t.revision,
        n = t.url;
    if (!n) throw new s("add-to-cache-list-unexpected-type", {
      entry: t
    });

    if (!e) {
      var _t = new URL(n, location.href);

      return {
        cacheKey: _t.href,
        url: _t.href
      };
    }

    var i = new URL(n, location.href),
        r = new URL(n, location.href);
    return i.searchParams.set("__WB_REVISION__", e), {
      cacheKey: i.href,
      url: r.href
    };
  }

  var p = function p() {
    var _this5 = this;

    _classCallCheck(this, p);

    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = function _callee2(_ref4) {
      var t, e;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              t = _ref4.request, e = _ref4.state;
              e && (e.originalRequest = t);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    }, this.cachedResponseWillBeUsed = function _callee3(_ref5) {
      var t, e, s, _t2;

      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              t = _ref5.event, e = _ref5.state, s = _ref5.cachedResponse;

              if ("install" === t.type) {
                _t2 = e.originalRequest.url;
                s ? _this5.notUpdatedURLs.push(_t2) : _this5.updatedURLs.push(_t2);
              }

              return _context3.abrupt("return", s);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    };
  };

  var y = function y(_ref6) {
    var _this6 = this;

    var t = _ref6.precacheController;

    _classCallCheck(this, y);

    this.cacheKeyWillBeUsed = function _callee4(_ref7) {
      var t, e, s;
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              t = _ref7.request, e = _ref7.params;
              s = e && e.cacheKey || _this6.h.getCacheKeyForURL(t.url);
              return _context4.abrupt("return", s ? new Request(s) : t);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    }, this.h = t;
  };

  var g;

  function R(t, e) {
    var n, i, r, o, a;
    return regeneratorRuntime.async(function R$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            n = null;

            if (t.url) {
              n = new URL(t.url).origin;
            }

            if (!(n !== self.location.origin)) {
              _context5.next = 4;
              break;
            }

            throw new s("cross-origin-copy-response", {
              origin: n
            });

          case 4:
            i = t.clone();
            r = {
              headers: new Headers(i.headers),
              status: i.status,
              statusText: i.statusText
            };
            o = e ? e(r) : r;

            if (!function () {
              if (void 0 === g) {
                var _t3 = new Response("");

                if ("body" in _t3) try {
                  new Response(_t3.body), g = !0;
                } catch (t) {
                  g = !1;
                }
                g = !1;
              }

              return g;
            }()) {
              _context5.next = 11;
              break;
            }

            _context5.t0 = i.body;
            _context5.next = 14;
            break;

          case 11:
            _context5.next = 13;
            return regeneratorRuntime.awrap(i.blob());

          case 13:
            _context5.t0 = _context5.sent;

          case 14:
            a = _context5.t0;
            return _context5.abrupt("return", new Response(a, o));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    });
  }

  function m(t, e) {
    var s = new URL(t);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _t4 = _step2.value;
        s.searchParams["delete"](_t4);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return s.href;
  }

  var v = function v() {
    var _this7 = this;

    _classCallCheck(this, v);

    this.promise = new Promise(function (t, e) {
      _this7.resolve = t, _this7.reject = e;
    });
  };

  var q = new Set();

  try {
    self["workbox:strategies:6.1.5"] && _();
  } catch (t) {}

  function U(t) {
    return "string" == typeof t ? new Request(t) : t;
  }

  var L =
  /*#__PURE__*/
  function () {
    function L(t, e) {
      _classCallCheck(this, L);

      this.u = {}, Object.assign(this, e), this.event = e.event, this.l = t, this.p = new v(), this.g = [], this.R = _toConsumableArray(t.plugins), this.m = new Map();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.R[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _t5 = _step3.value;
          this.m.set(_t5, {});
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.event.waitUntil(this.p.promise);
    }

    _createClass(L, [{
      key: "fetch",
      value: function (_fetch) {
        function fetch(_x) {
          return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
          return _fetch.toString();
        };

        return fetch;
      }(function _callee5(t) {
        var e, n, _t6, i, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _t7, r, _t8, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _s3;

        return regeneratorRuntime.async(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                e = this.event;
                n = U(t);

                if (!("navigate" === n.mode && e instanceof FetchEvent && e.preloadResponse)) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 5;
                return regeneratorRuntime.awrap(e.preloadResponse);

              case 5:
                _t6 = _context6.sent;

                if (!_t6) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", _t6);

              case 8:
                i = this.hasCallback("fetchDidFail") ? n.clone() : null;
                _context6.prev = 9;
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context6.prev = 13;
                _iterator4 = this.iterateCallbacks("requestWillFetch")[Symbol.iterator]();

              case 15:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context6.next = 23;
                  break;
                }

                _t7 = _step4.value;
                _context6.next = 19;
                return regeneratorRuntime.awrap(_t7({
                  request: n.clone(),
                  event: e
                }));

              case 19:
                n = _context6.sent;

              case 20:
                _iteratorNormalCompletion4 = true;
                _context6.next = 15;
                break;

              case 23:
                _context6.next = 29;
                break;

              case 25:
                _context6.prev = 25;
                _context6.t0 = _context6["catch"](13);
                _didIteratorError4 = true;
                _iteratorError4 = _context6.t0;

              case 29:
                _context6.prev = 29;
                _context6.prev = 30;

                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }

              case 32:
                _context6.prev = 32;

                if (!_didIteratorError4) {
                  _context6.next = 35;
                  break;
                }

                throw _iteratorError4;

              case 35:
                return _context6.finish(32);

              case 36:
                return _context6.finish(29);

              case 37:
                _context6.next = 42;
                break;

              case 39:
                _context6.prev = 39;
                _context6.t1 = _context6["catch"](9);
                throw new s("plugin-error-request-will-fetch", {
                  thrownError: _context6.t1
                });

              case 42:
                r = n.clone();
                _context6.prev = 43;
                _context6.next = 46;
                return regeneratorRuntime.awrap(fetch(n, "navigate" === n.mode ? void 0 : this.l.fetchOptions));

              case 46:
                _t8 = _context6.sent;
                _iteratorNormalCompletion5 = true;
                _didIteratorError5 = false;
                _iteratorError5 = undefined;
                _context6.prev = 50;
                _iterator5 = this.iterateCallbacks("fetchDidSucceed")[Symbol.iterator]();

              case 52:
                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                  _context6.next = 60;
                  break;
                }

                _s3 = _step5.value;
                _context6.next = 56;
                return regeneratorRuntime.awrap(_s3({
                  event: e,
                  request: r,
                  response: _t8
                }));

              case 56:
                _t8 = _context6.sent;

              case 57:
                _iteratorNormalCompletion5 = true;
                _context6.next = 52;
                break;

              case 60:
                _context6.next = 66;
                break;

              case 62:
                _context6.prev = 62;
                _context6.t2 = _context6["catch"](50);
                _didIteratorError5 = true;
                _iteratorError5 = _context6.t2;

              case 66:
                _context6.prev = 66;
                _context6.prev = 67;

                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }

              case 69:
                _context6.prev = 69;

                if (!_didIteratorError5) {
                  _context6.next = 72;
                  break;
                }

                throw _iteratorError5;

              case 72:
                return _context6.finish(69);

              case 73:
                return _context6.finish(66);

              case 74:
                return _context6.abrupt("return", _t8);

              case 77:
                _context6.prev = 77;
                _context6.t3 = _context6["catch"](43);
                _context6.t4 = i;

                if (!_context6.t4) {
                  _context6.next = 83;
                  break;
                }

                _context6.next = 83;
                return regeneratorRuntime.awrap(this.runCallbacks("fetchDidFail", {
                  error: _context6.t3,
                  event: e,
                  originalRequest: i.clone(),
                  request: r.clone()
                }));

              case 83:
                throw _context6.t3;

              case 84:
              case "end":
                return _context6.stop();
            }
          }
        }, null, this, [[9, 39], [13, 25, 29, 37], [30,, 32, 36], [43, 77], [50, 62, 66, 74], [67,, 69, 73]]);
      })
    }, {
      key: "fetchAndCachePut",
      value: function fetchAndCachePut(t) {
        var e, s;
        return regeneratorRuntime.async(function fetchAndCachePut$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return regeneratorRuntime.awrap(this.fetch(t));

              case 2:
                e = _context7.sent;
                s = e.clone();
                return _context7.abrupt("return", (this.waitUntil(this.cachePut(t, s)), e));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "cacheMatch",
      value: function cacheMatch(t) {
        var e, s, _this$l, n, i, r, o, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _t9;

        return regeneratorRuntime.async(function cacheMatch$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                e = U(t);
                _this$l = this.l;
                n = _this$l.cacheName;
                i = _this$l.matchOptions;
                _context8.next = 6;
                return regeneratorRuntime.awrap(this.getCacheKey(e, "read"));

              case 6:
                r = _context8.sent;
                o = c({}, i, {
                  cacheName: n
                });
                _context8.next = 10;
                return regeneratorRuntime.awrap(caches.match(r, o));

              case 10:
                s = _context8.sent;
                _iteratorNormalCompletion6 = true;
                _didIteratorError6 = false;
                _iteratorError6 = undefined;
                _context8.prev = 14;
                _iterator6 = this.iterateCallbacks("cachedResponseWillBeUsed")[Symbol.iterator]();

              case 16:
                if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                  _context8.next = 27;
                  break;
                }

                _t9 = _step6.value;
                _context8.next = 20;
                return regeneratorRuntime.awrap(_t9({
                  cacheName: n,
                  matchOptions: i,
                  cachedResponse: s,
                  request: r,
                  event: this.event
                }));

              case 20:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 23;
                  break;
                }

                _context8.t0 = void 0;

              case 23:
                s = _context8.t0;

              case 24:
                _iteratorNormalCompletion6 = true;
                _context8.next = 16;
                break;

              case 27:
                _context8.next = 33;
                break;

              case 29:
                _context8.prev = 29;
                _context8.t1 = _context8["catch"](14);
                _didIteratorError6 = true;
                _iteratorError6 = _context8.t1;

              case 33:
                _context8.prev = 33;
                _context8.prev = 34;

                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }

              case 36:
                _context8.prev = 36;

                if (!_didIteratorError6) {
                  _context8.next = 39;
                  break;
                }

                throw _iteratorError6;

              case 39:
                return _context8.finish(36);

              case 40:
                return _context8.finish(33);

              case 41:
                return _context8.abrupt("return", s);

              case 42:
              case "end":
                return _context8.stop();
            }
          }
        }, null, this, [[14, 29, 33, 41], [34,, 36, 40]]);
      }
    }, {
      key: "cachePut",
      value: function cachePut(t, e) {
        var n, i, r, o, a, _this$l2, h, u, l, f, w, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _t11;

        return regeneratorRuntime.async(function cachePut$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                n = U(t);
                _context11.next = 3;
                return regeneratorRuntime.awrap((i = 0, new Promise(function (t) {
                  return setTimeout(t, i);
                })));

              case 3:
                _context11.next = 5;
                return regeneratorRuntime.awrap(this.getCacheKey(n, "write"));

              case 5:
                r = _context11.sent;

                if (e) {
                  _context11.next = 8;
                  break;
                }

                throw new s("cache-put-with-no-response", {
                  url: (o = r.url, new URL(String(o), location.href).href.replace(new RegExp("^".concat(location.origin)), ""))
                });

              case 8:
                _context11.next = 10;
                return regeneratorRuntime.awrap(this.v(e));

              case 10:
                a = _context11.sent;

                if (a) {
                  _context11.next = 13;
                  break;
                }

                return _context11.abrupt("return", !1);

              case 13:
                _this$l2 = this.l;
                h = _this$l2.cacheName;
                u = _this$l2.matchOptions;
                _context11.next = 18;
                return regeneratorRuntime.awrap(self.caches.open(h));

              case 18:
                l = _context11.sent;
                f = this.hasCallback("cacheDidUpdate");

                if (!f) {
                  _context11.next = 26;
                  break;
                }

                _context11.next = 23;
                return regeneratorRuntime.awrap(function _callee6(t, e, s, n) {
                  var i, r, o, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _e3;

                  return regeneratorRuntime.async(function _callee6$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          i = m(e.url, s);

                          if (!(e.url === i)) {
                            _context9.next = 3;
                            break;
                          }

                          return _context9.abrupt("return", t.match(e, n));

                        case 3:
                          r = c({}, n, {
                            ignoreSearch: !0
                          });
                          _context9.next = 6;
                          return regeneratorRuntime.awrap(t.keys(e, r));

                        case 6:
                          o = _context9.sent;
                          _iteratorNormalCompletion7 = true;
                          _didIteratorError7 = false;
                          _iteratorError7 = undefined;
                          _context9.prev = 10;
                          _iterator7 = o[Symbol.iterator]();

                        case 12:
                          if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                            _context9.next = 19;
                            break;
                          }

                          _e3 = _step7.value;

                          if (!(i === m(_e3.url, s))) {
                            _context9.next = 16;
                            break;
                          }

                          return _context9.abrupt("return", t.match(_e3, n));

                        case 16:
                          _iteratorNormalCompletion7 = true;
                          _context9.next = 12;
                          break;

                        case 19:
                          _context9.next = 25;
                          break;

                        case 21:
                          _context9.prev = 21;
                          _context9.t0 = _context9["catch"](10);
                          _didIteratorError7 = true;
                          _iteratorError7 = _context9.t0;

                        case 25:
                          _context9.prev = 25;
                          _context9.prev = 26;

                          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                            _iterator7["return"]();
                          }

                        case 28:
                          _context9.prev = 28;

                          if (!_didIteratorError7) {
                            _context9.next = 31;
                            break;
                          }

                          throw _iteratorError7;

                        case 31:
                          return _context9.finish(28);

                        case 32:
                          return _context9.finish(25);

                        case 33:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, null, null, [[10, 21, 25, 33], [26,, 28, 32]]);
                }(l, r.clone(), ["__WB_REVISION__"], u));

              case 23:
                _context11.t0 = _context11.sent;
                _context11.next = 27;
                break;

              case 26:
                _context11.t0 = null;

              case 27:
                w = _context11.t0;
                _context11.prev = 28;
                _context11.next = 31;
                return regeneratorRuntime.awrap(l.put(r, f ? a.clone() : a));

              case 31:
                _context11.next = 40;
                break;

              case 33:
                _context11.prev = 33;
                _context11.t1 = _context11["catch"](28);
                _context11.t2 = "QuotaExceededError" === _context11.t1.name;

                if (!_context11.t2) {
                  _context11.next = 39;
                  break;
                }

                _context11.next = 39;
                return regeneratorRuntime.awrap(function _callee7() {
                  var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _t10;

                  return regeneratorRuntime.async(function _callee7$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _iteratorNormalCompletion8 = true;
                          _didIteratorError8 = false;
                          _iteratorError8 = undefined;
                          _context10.prev = 3;
                          _iterator8 = q[Symbol.iterator]();

                        case 5:
                          if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                            _context10.next = 12;
                            break;
                          }

                          _t10 = _step8.value;
                          _context10.next = 9;
                          return regeneratorRuntime.awrap(_t10());

                        case 9:
                          _iteratorNormalCompletion8 = true;
                          _context10.next = 5;
                          break;

                        case 12:
                          _context10.next = 18;
                          break;

                        case 14:
                          _context10.prev = 14;
                          _context10.t0 = _context10["catch"](3);
                          _didIteratorError8 = true;
                          _iteratorError8 = _context10.t0;

                        case 18:
                          _context10.prev = 18;
                          _context10.prev = 19;

                          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                            _iterator8["return"]();
                          }

                        case 21:
                          _context10.prev = 21;

                          if (!_didIteratorError8) {
                            _context10.next = 24;
                            break;
                          }

                          throw _iteratorError8;

                        case 24:
                          return _context10.finish(21);

                        case 25:
                          return _context10.finish(18);

                        case 26:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, null, null, [[3, 14, 18, 26], [19,, 21, 25]]);
                }());

              case 39:
                throw _context11.t1;

              case 40:
                _iteratorNormalCompletion9 = true;
                _didIteratorError9 = false;
                _iteratorError9 = undefined;
                _context11.prev = 43;
                _iterator9 = this.iterateCallbacks("cacheDidUpdate")[Symbol.iterator]();

              case 45:
                if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                  _context11.next = 52;
                  break;
                }

                _t11 = _step9.value;
                _context11.next = 49;
                return regeneratorRuntime.awrap(_t11({
                  cacheName: h,
                  oldResponse: w,
                  newResponse: a.clone(),
                  request: r,
                  event: this.event
                }));

              case 49:
                _iteratorNormalCompletion9 = true;
                _context11.next = 45;
                break;

              case 52:
                _context11.next = 58;
                break;

              case 54:
                _context11.prev = 54;
                _context11.t3 = _context11["catch"](43);
                _didIteratorError9 = true;
                _iteratorError9 = _context11.t3;

              case 58:
                _context11.prev = 58;
                _context11.prev = 59;

                if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                  _iterator9["return"]();
                }

              case 61:
                _context11.prev = 61;

                if (!_didIteratorError9) {
                  _context11.next = 64;
                  break;
                }

                throw _iteratorError9;

              case 64:
                return _context11.finish(61);

              case 65:
                return _context11.finish(58);

              case 66:
                return _context11.abrupt("return", !0);

              case 67:
              case "end":
                return _context11.stop();
            }
          }
        }, null, this, [[28, 33], [43, 54, 58, 66], [59,, 61, 65]]);
      }
    }, {
      key: "getCacheKey",
      value: function getCacheKey(t, e) {
        var _s4, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _t12;

        return regeneratorRuntime.async(function getCacheKey$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.u[e]) {
                  _context12.next = 32;
                  break;
                }

                _s4 = t;
                _iteratorNormalCompletion10 = true;
                _didIteratorError10 = false;
                _iteratorError10 = undefined;
                _context12.prev = 5;
                _iterator10 = this.iterateCallbacks("cacheKeyWillBeUsed")[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                  _context12.next = 17;
                  break;
                }

                _t12 = _step10.value;
                _context12.t0 = U;
                _context12.next = 12;
                return regeneratorRuntime.awrap(_t12({
                  mode: e,
                  request: _s4,
                  event: this.event,
                  params: this.params
                }));

              case 12:
                _context12.t1 = _context12.sent;
                _s4 = (0, _context12.t0)(_context12.t1);

              case 14:
                _iteratorNormalCompletion10 = true;
                _context12.next = 7;
                break;

              case 17:
                _context12.next = 23;
                break;

              case 19:
                _context12.prev = 19;
                _context12.t2 = _context12["catch"](5);
                _didIteratorError10 = true;
                _iteratorError10 = _context12.t2;

              case 23:
                _context12.prev = 23;
                _context12.prev = 24;

                if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                  _iterator10["return"]();
                }

              case 26:
                _context12.prev = 26;

                if (!_didIteratorError10) {
                  _context12.next = 29;
                  break;
                }

                throw _iteratorError10;

              case 29:
                return _context12.finish(26);

              case 30:
                return _context12.finish(23);

              case 31:
                this.u[e] = _s4;

              case 32:
                return _context12.abrupt("return", this.u[e]);

              case 33:
              case "end":
                return _context12.stop();
            }
          }
        }, null, this, [[5, 19, 23, 31], [24,, 26, 30]]);
      }
    }, {
      key: "hasCallback",
      value: function hasCallback(t) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = this.l.plugins[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _e4 = _step11.value;
            if (t in _e4) return !0;
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
              _iterator11["return"]();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        return !1;
      }
    }, {
      key: "runCallbacks",
      value: function runCallbacks(t, e) {
        var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _s5;

        return regeneratorRuntime.async(function runCallbacks$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _iteratorNormalCompletion12 = true;
                _didIteratorError12 = false;
                _iteratorError12 = undefined;
                _context13.prev = 3;
                _iterator12 = this.iterateCallbacks(t)[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
                  _context13.next = 12;
                  break;
                }

                _s5 = _step12.value;
                _context13.next = 9;
                return regeneratorRuntime.awrap(_s5(e));

              case 9:
                _iteratorNormalCompletion12 = true;
                _context13.next = 5;
                break;

              case 12:
                _context13.next = 18;
                break;

              case 14:
                _context13.prev = 14;
                _context13.t0 = _context13["catch"](3);
                _didIteratorError12 = true;
                _iteratorError12 = _context13.t0;

              case 18:
                _context13.prev = 18;
                _context13.prev = 19;

                if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                  _iterator12["return"]();
                }

              case 21:
                _context13.prev = 21;

                if (!_didIteratorError12) {
                  _context13.next = 24;
                  break;
                }

                throw _iteratorError12;

              case 24:
                return _context13.finish(21);

              case 25:
                return _context13.finish(18);

              case 26:
              case "end":
                return _context13.stop();
            }
          }
        }, null, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }
    }, {
      key: "iterateCallbacks",
      value:
      /*#__PURE__*/
      regeneratorRuntime.mark(function iterateCallbacks(t) {
        var _this8 = this;

        var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _loop, _iterator13, _step13;

        return regeneratorRuntime.wrap(function iterateCallbacks$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _iteratorNormalCompletion13 = true;
                _didIteratorError13 = false;
                _iteratorError13 = undefined;
                _context15.prev = 3;
                _loop =
                /*#__PURE__*/
                regeneratorRuntime.mark(function _loop() {
                  var e, _s6, _n;

                  return regeneratorRuntime.wrap(function _loop$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          e = _step13.value;

                          if (!("function" == typeof e[t])) {
                            _context14.next = 5;
                            break;
                          }

                          _s6 = _this8.m.get(e), _n = function _n(n) {
                            var i = c({}, n, {
                              state: _s6
                            });
                            return e[t](i);
                          };
                          _context14.next = 5;
                          return _n;

                        case 5:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _loop);
                });
                _iterator13 = this.l.plugins[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                  _context15.next = 11;
                  break;
                }

                return _context15.delegateYield(_loop(), "t0", 8);

              case 8:
                _iteratorNormalCompletion13 = true;
                _context15.next = 6;
                break;

              case 11:
                _context15.next = 17;
                break;

              case 13:
                _context15.prev = 13;
                _context15.t1 = _context15["catch"](3);
                _didIteratorError13 = true;
                _iteratorError13 = _context15.t1;

              case 17:
                _context15.prev = 17;
                _context15.prev = 18;

                if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                  _iterator13["return"]();
                }

              case 20:
                _context15.prev = 20;

                if (!_didIteratorError13) {
                  _context15.next = 23;
                  break;
                }

                throw _iteratorError13;

              case 23:
                return _context15.finish(20);

              case 24:
                return _context15.finish(17);

              case 25:
              case "end":
                return _context15.stop();
            }
          }
        }, iterateCallbacks, this, [[3, 13, 17, 25], [18,, 20, 24]]);
      })
    }, {
      key: "waitUntil",
      value: function waitUntil(t) {
        return this.g.push(t), t;
      }
    }, {
      key: "doneWaiting",
      value: function doneWaiting() {
        var t;
        return regeneratorRuntime.async(function doneWaiting$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(t = this.g.shift())) {
                  _context16.next = 5;
                  break;
                }

                _context16.next = 3;
                return regeneratorRuntime.awrap(t);

              case 3:
                _context16.next = 0;
                break;

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.p.resolve();
      }
    }, {
      key: "v",
      value: function v(t) {
        var e, s, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _t13;

        return regeneratorRuntime.async(function v$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                e = t, s = !1;
                _iteratorNormalCompletion14 = true;
                _didIteratorError14 = false;
                _iteratorError14 = undefined;
                _context17.prev = 4;
                _iterator14 = this.iterateCallbacks("cacheWillUpdate")[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                  _context17.next = 20;
                  break;
                }

                _t13 = _step14.value;
                _context17.next = 10;
                return regeneratorRuntime.awrap(_t13({
                  request: this.request,
                  response: e,
                  event: this.event
                }));

              case 10:
                _context17.t0 = _context17.sent;

                if (_context17.t0) {
                  _context17.next = 13;
                  break;
                }

                _context17.t0 = void 0;

              case 13:
                e = _context17.t0;
                s = !0;

                if (e) {
                  _context17.next = 17;
                  break;
                }

                return _context17.abrupt("break", 20);

              case 17:
                _iteratorNormalCompletion14 = true;
                _context17.next = 6;
                break;

              case 20:
                _context17.next = 26;
                break;

              case 22:
                _context17.prev = 22;
                _context17.t1 = _context17["catch"](4);
                _didIteratorError14 = true;
                _iteratorError14 = _context17.t1;

              case 26:
                _context17.prev = 26;
                _context17.prev = 27;

                if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                  _iterator14["return"]();
                }

              case 29:
                _context17.prev = 29;

                if (!_didIteratorError14) {
                  _context17.next = 32;
                  break;
                }

                throw _iteratorError14;

              case 32:
                return _context17.finish(29);

              case 33:
                return _context17.finish(26);

              case 34:
                return _context17.abrupt("return", (s || e && 200 !== e.status && (e = void 0), e));

              case 35:
              case "end":
                return _context17.stop();
            }
          }
        }, null, this, [[4, 22, 26, 34], [27,, 29, 33]]);
      }
    }]);

    return L;
  }();

  var b =
  /*#__PURE__*/
  function (_ref8) {
    _inherits(b, _ref8);

    function b() {
      var _this9;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, b);

      t.cacheName = l(t.cacheName), _this9 = _possibleConstructorReturn(this, _getPrototypeOf(b).call(this, t)), _this9._ = !1 !== t.fallbackToNetwork, _this9.plugins.push(b.copyRedirectedCacheableResponsesPlugin);
      return _this9;
    }

    _createClass(b, [{
      key: "L",
      value: function L(t, e) {
        var s;
        return regeneratorRuntime.async(function L$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return regeneratorRuntime.awrap(e.cacheMatch(t));

              case 2:
                s = _context18.sent;
                _context18.t0 = s;

                if (_context18.t0) {
                  _context18.next = 15;
                  break;
                }

                if (!(e.event && "install" === e.event.type)) {
                  _context18.next = 11;
                  break;
                }

                _context18.next = 8;
                return regeneratorRuntime.awrap(this.C(t, e));

              case 8:
                _context18.t1 = _context18.sent;
                _context18.next = 14;
                break;

              case 11:
                _context18.next = 13;
                return regeneratorRuntime.awrap(this.N(t, e));

              case 13:
                _context18.t1 = _context18.sent;

              case 14:
                _context18.t0 = _context18.t1;

              case 15:
                return _context18.abrupt("return", _context18.t0);

              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "N",
      value: function N(t, e) {
        var n;
        return regeneratorRuntime.async(function N$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (this._) {
                  _context19.next = 2;
                  break;
                }

                throw new s("missing-precache-entry", {
                  cacheName: this.cacheName,
                  url: t.url
                });

              case 2:
                _context19.next = 4;
                return regeneratorRuntime.awrap(e.fetch(t));

              case 4:
                n = _context19.sent;
                return _context19.abrupt("return", n);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "C",
      value: function C(t, e) {
        var n;
        return regeneratorRuntime.async(function C$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this.O();
                _context20.next = 3;
                return regeneratorRuntime.awrap(e.fetch(t));

              case 3:
                n = _context20.sent;
                _context20.next = 6;
                return regeneratorRuntime.awrap(e.cachePut(t, n.clone()));

              case 6:
                if (_context20.sent) {
                  _context20.next = 8;
                  break;
                }

                throw new s("bad-precaching-response", {
                  url: t.url,
                  status: n.status
                });

              case 8:
                return _context20.abrupt("return", n);

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "O",
      value: function O() {
        var t = null,
            e = 0;
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = this.plugins.entries()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _step15$value = _slicedToArray(_step15.value, 2),
                _s7 = _step15$value[0],
                n = _step15$value[1];

            n !== b.copyRedirectedCacheableResponsesPlugin && (n === b.defaultPrecacheCacheabilityPlugin && (t = _s7), n.cacheWillUpdate && e++);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
              _iterator15["return"]();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }

        0 === e ? this.plugins.push(b.defaultPrecacheCacheabilityPlugin) : e > 1 && null !== t && this.plugins.splice(t, 1);
      }
    }]);

    return b;
  }(
  /*#__PURE__*/
  function () {
    function _class() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _class);

      this.cacheName = f(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions;
    }

    _createClass(_class, [{
      key: "handle",
      value: function handle(t) {
        var _this$handleAll = this.handleAll(t),
            _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
            e = _this$handleAll2[0];

        return e;
      }
    }, {
      key: "handleAll",
      value: function handleAll(t) {
        t instanceof FetchEvent && (t = {
          event: t,
          request: t.request
        });
        var e = t.event,
            s = "string" == typeof t.request ? new Request(t.request) : t.request,
            n = "params" in t ? t.params : void 0,
            i = new L(this, {
          event: e,
          request: s,
          params: n
        }),
            r = this.q(i, s, e);
        return [r, this.U(r, i, s, e)];
      }
    }, {
      key: "q",
      value: function q(t, e, n) {
        var i, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _r2, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _s8;

        return regeneratorRuntime.async(function q$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return regeneratorRuntime.awrap(t.runCallbacks("handlerWillStart", {
                  event: n,
                  request: e
                }));

              case 2:
                _context21.prev = 2;
                _context21.next = 5;
                return regeneratorRuntime.awrap(this.L(e, t));

              case 5:
                i = _context21.sent;

                if (!(!i || "error" === i.type)) {
                  _context21.next = 8;
                  break;
                }

                throw new s("no-response", {
                  url: e.url
                });

              case 8:
                _context21.next = 43;
                break;

              case 10:
                _context21.prev = 10;
                _context21.t0 = _context21["catch"](2);
                _iteratorNormalCompletion16 = true;
                _didIteratorError16 = false;
                _iteratorError16 = undefined;
                _context21.prev = 15;
                _iterator16 = t.iterateCallbacks("handlerDidError")[Symbol.iterator]();

              case 17:
                if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
                  _context21.next = 27;
                  break;
                }

                _r2 = _step16.value;
                _context21.next = 21;
                return regeneratorRuntime.awrap(_r2({
                  error: _context21.t0,
                  event: n,
                  request: e
                }));

              case 21:
                i = _context21.sent;

                if (!i) {
                  _context21.next = 24;
                  break;
                }

                return _context21.abrupt("break", 27);

              case 24:
                _iteratorNormalCompletion16 = true;
                _context21.next = 17;
                break;

              case 27:
                _context21.next = 33;
                break;

              case 29:
                _context21.prev = 29;
                _context21.t1 = _context21["catch"](15);
                _didIteratorError16 = true;
                _iteratorError16 = _context21.t1;

              case 33:
                _context21.prev = 33;
                _context21.prev = 34;

                if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                  _iterator16["return"]();
                }

              case 36:
                _context21.prev = 36;

                if (!_didIteratorError16) {
                  _context21.next = 39;
                  break;
                }

                throw _iteratorError16;

              case 39:
                return _context21.finish(36);

              case 40:
                return _context21.finish(33);

              case 41:
                if (i) {
                  _context21.next = 43;
                  break;
                }

                throw _context21.t0;

              case 43:
                _iteratorNormalCompletion17 = true;
                _didIteratorError17 = false;
                _iteratorError17 = undefined;
                _context21.prev = 46;
                _iterator17 = t.iterateCallbacks("handlerWillRespond")[Symbol.iterator]();

              case 48:
                if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
                  _context21.next = 56;
                  break;
                }

                _s8 = _step17.value;
                _context21.next = 52;
                return regeneratorRuntime.awrap(_s8({
                  event: n,
                  request: e,
                  response: i
                }));

              case 52:
                i = _context21.sent;

              case 53:
                _iteratorNormalCompletion17 = true;
                _context21.next = 48;
                break;

              case 56:
                _context21.next = 62;
                break;

              case 58:
                _context21.prev = 58;
                _context21.t2 = _context21["catch"](46);
                _didIteratorError17 = true;
                _iteratorError17 = _context21.t2;

              case 62:
                _context21.prev = 62;
                _context21.prev = 63;

                if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                  _iterator17["return"]();
                }

              case 65:
                _context21.prev = 65;

                if (!_didIteratorError17) {
                  _context21.next = 68;
                  break;
                }

                throw _iteratorError17;

              case 68:
                return _context21.finish(65);

              case 69:
                return _context21.finish(62);

              case 70:
                return _context21.abrupt("return", i);

              case 71:
              case "end":
                return _context21.stop();
            }
          }
        }, null, this, [[2, 10], [15, 29, 33, 41], [34,, 36, 40], [46, 58, 62, 70], [63,, 65, 69]]);
      }
    }, {
      key: "U",
      value: function U(t, e, s, n) {
        var i, r;
        return regeneratorRuntime.async(function U$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return regeneratorRuntime.awrap(t);

              case 3:
                i = _context22.sent;
                _context22.next = 8;
                break;

              case 6:
                _context22.prev = 6;
                _context22.t0 = _context22["catch"](0);

              case 8:
                _context22.prev = 8;
                _context22.next = 11;
                return regeneratorRuntime.awrap(e.runCallbacks("handlerDidRespond", {
                  event: n,
                  request: s,
                  response: i
                }));

              case 11:
                _context22.next = 13;
                return regeneratorRuntime.awrap(e.doneWaiting());

              case 13:
                _context22.next = 18;
                break;

              case 15:
                _context22.prev = 15;
                _context22.t1 = _context22["catch"](8);
                r = _context22.t1;

              case 18:
                _context22.next = 20;
                return regeneratorRuntime.awrap(e.runCallbacks("handlerDidComplete", {
                  event: n,
                  request: s,
                  response: i,
                  error: r
                }));

              case 20:
                e.destroy();

                if (!r) {
                  _context22.next = 23;
                  break;
                }

                throw r;

              case 23:
              case "end":
                return _context22.stop();
            }
          }
        }, null, null, [[0, 6], [8, 15]]);
      }
    }]);

    return _class;
  }());

  b.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: function cacheWillUpdate(_ref9) {
      var t;
      return regeneratorRuntime.async(function cacheWillUpdate$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              t = _ref9.response;
              return _context23.abrupt("return", !t || t.status >= 400 ? null : t);

            case 2:
            case "end":
              return _context23.stop();
          }
        }
      });
    }
  }, b.copyRedirectedCacheableResponsesPlugin = {
    cacheWillUpdate: function cacheWillUpdate(_ref10) {
      var t;
      return regeneratorRuntime.async(function cacheWillUpdate$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              t = _ref10.response;

              if (!t.redirected) {
                _context24.next = 7;
                break;
              }

              _context24.next = 4;
              return regeneratorRuntime.awrap(R(t));

            case 4:
              _context24.t0 = _context24.sent;
              _context24.next = 8;
              break;

            case 7:
              _context24.t0 = t;

            case 8:
              return _context24.abrupt("return", _context24.t0);

            case 9:
            case "end":
              return _context24.stop();
          }
        }
      });
    }
  };

  var C =
  /*#__PURE__*/
  function () {
    function C() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          t = _ref11.cacheName,
          _ref11$plugins = _ref11.plugins,
          e = _ref11$plugins === void 0 ? [] : _ref11$plugins,
          _ref11$fallbackToNetw = _ref11.fallbackToNetwork,
          s = _ref11$fallbackToNetw === void 0 ? !0 : _ref11$fallbackToNetw;

      _classCallCheck(this, C);

      this.k = new Map(), this.T = new Map(), this.W = new Map(), this.l = new b({
        cacheName: l(t),
        plugins: [].concat(_toConsumableArray(e), [new y({
          precacheController: this
        })]),
        fallbackToNetwork: s
      }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
    }

    _createClass(C, [{
      key: "precache",
      value: function precache(t) {
        this.addToCacheList(t), this.K || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this.K = !0);
      }
    }, {
      key: "addToCacheList",
      value: function addToCacheList(t) {
        var e = [];
        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = t[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var n = _step18.value;
            "string" == typeof n ? e.push(n) : n && void 0 === n.revision && e.push(n.url);

            var _d2 = d(n),
                _t14 = _d2.cacheKey,
                _i3 = _d2.url,
                r = "string" != typeof n && n.revision ? "reload" : "default";

            if (this.k.has(_i3) && this.k.get(_i3) !== _t14) throw new s("add-to-cache-list-conflicting-entries", {
              firstEntry: this.k.get(_i3),
              secondEntry: _t14
            });

            if ("string" != typeof n && n.integrity) {
              if (this.W.has(_t14) && this.W.get(_t14) !== n.integrity) throw new s("add-to-cache-list-conflicting-integrities", {
                url: _i3
              });
              this.W.set(_t14, n.integrity);
            }

            if (this.k.set(_i3, _t14), this.T.set(_i3, r), e.length > 0) {
              var _t15 = "Workbox is precaching URLs without revision info: ".concat(e.join(", "), "\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache");

              console.warn(_t15);
            }
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
              _iterator18["return"]();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }
      }
    }, {
      key: "install",
      value: function install(t) {
        var _this10 = this;

        return w(t, function _callee8() {
          var e, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _step19$value, _e5, _s9, _n2, _i4, r, s, n;

          return regeneratorRuntime.async(function _callee8$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  e = new p();

                  _this10.strategy.plugins.push(e);

                  _iteratorNormalCompletion19 = true;
                  _didIteratorError19 = false;
                  _iteratorError19 = undefined;
                  _context25.prev = 5;
                  _iterator19 = _this10.k[Symbol.iterator]();

                case 7:
                  if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                    _context25.next = 15;
                    break;
                  }

                  _step19$value = _slicedToArray(_step19.value, 2), _e5 = _step19$value[0], _s9 = _step19$value[1];
                  _n2 = _this10.W.get(_s9), _i4 = _this10.T.get(_e5), r = new Request(_e5, {
                    integrity: _n2,
                    cache: _i4,
                    credentials: "same-origin"
                  });
                  _context25.next = 12;
                  return regeneratorRuntime.awrap(Promise.all(_this10.strategy.handleAll({
                    params: {
                      cacheKey: _s9
                    },
                    request: r,
                    event: t
                  })));

                case 12:
                  _iteratorNormalCompletion19 = true;
                  _context25.next = 7;
                  break;

                case 15:
                  _context25.next = 21;
                  break;

                case 17:
                  _context25.prev = 17;
                  _context25.t0 = _context25["catch"](5);
                  _didIteratorError19 = true;
                  _iteratorError19 = _context25.t0;

                case 21:
                  _context25.prev = 21;
                  _context25.prev = 22;

                  if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                    _iterator19["return"]();
                  }

                case 24:
                  _context25.prev = 24;

                  if (!_didIteratorError19) {
                    _context25.next = 27;
                    break;
                  }

                  throw _iteratorError19;

                case 27:
                  return _context25.finish(24);

                case 28:
                  return _context25.finish(21);

                case 29:
                  s = e.updatedURLs, n = e.notUpdatedURLs;
                  return _context25.abrupt("return", {
                    updatedURLs: s,
                    notUpdatedURLs: n
                  });

                case 31:
                case "end":
                  return _context25.stop();
              }
            }
          }, null, null, [[5, 17, 21, 29], [22,, 24, 28]]);
        });
      }
    }, {
      key: "activate",
      value: function activate(t) {
        var _this11 = this;

        return w(t, function _callee9() {
          var t, e, s, n, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _i5;

          return regeneratorRuntime.async(function _callee9$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return regeneratorRuntime.awrap(self.caches.open(_this11.strategy.cacheName));

                case 2:
                  t = _context26.sent;
                  _context26.next = 5;
                  return regeneratorRuntime.awrap(t.keys());

                case 5:
                  e = _context26.sent;
                  s = new Set(_this11.k.values());
                  n = [];
                  _iteratorNormalCompletion20 = true;
                  _didIteratorError20 = false;
                  _iteratorError20 = undefined;
                  _context26.prev = 11;
                  _iterator20 = e[Symbol.iterator]();

                case 13:
                  if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
                    _context26.next = 23;
                    break;
                  }

                  _i5 = _step20.value;
                  _context26.t0 = s.has(_i5.url);

                  if (_context26.t0) {
                    _context26.next = 20;
                    break;
                  }

                  _context26.next = 19;
                  return regeneratorRuntime.awrap(t["delete"](_i5));

                case 19:
                  n.push(_i5.url);

                case 20:
                  _iteratorNormalCompletion20 = true;
                  _context26.next = 13;
                  break;

                case 23:
                  _context26.next = 29;
                  break;

                case 25:
                  _context26.prev = 25;
                  _context26.t1 = _context26["catch"](11);
                  _didIteratorError20 = true;
                  _iteratorError20 = _context26.t1;

                case 29:
                  _context26.prev = 29;
                  _context26.prev = 30;

                  if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                    _iterator20["return"]();
                  }

                case 32:
                  _context26.prev = 32;

                  if (!_didIteratorError20) {
                    _context26.next = 35;
                    break;
                  }

                  throw _iteratorError20;

                case 35:
                  return _context26.finish(32);

                case 36:
                  return _context26.finish(29);

                case 37:
                  return _context26.abrupt("return", {
                    deletedURLs: n
                  });

                case 38:
                case "end":
                  return _context26.stop();
              }
            }
          }, null, null, [[11, 25, 29, 37], [30,, 32, 36]]);
        });
      }
    }, {
      key: "getURLsToCacheKeys",
      value: function getURLsToCacheKeys() {
        return this.k;
      }
    }, {
      key: "getCachedURLs",
      value: function getCachedURLs() {
        return _toConsumableArray(this.k.keys());
      }
    }, {
      key: "getCacheKeyForURL",
      value: function getCacheKeyForURL(t) {
        var e = new URL(t, location.href);
        return this.k.get(e.href);
      }
    }, {
      key: "matchPrecache",
      value: function matchPrecache(t) {
        var e, s;
        return regeneratorRuntime.async(function matchPrecache$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                e = t instanceof Request ? t.url : t, s = this.getCacheKeyForURL(e);

                if (!s) {
                  _context27.next = 6;
                  break;
                }

                _context27.next = 4;
                return regeneratorRuntime.awrap(self.caches.open(this.strategy.cacheName));

              case 4:
                _context27.t0 = s;
                return _context27.abrupt("return", _context27.sent.match(_context27.t0));

              case 6:
              case "end":
                return _context27.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "createHandlerBoundToURL",
      value: function createHandlerBoundToURL(t) {
        var _this12 = this;

        var e = this.getCacheKeyForURL(t);
        if (!e) throw new s("non-precached-url", {
          url: t
        });
        return function (s) {
          return s.request = new Request(t), s.params = c({
            cacheKey: e
          }, s.params), _this12.strategy.handle(s);
        };
      }
    }, {
      key: "strategy",
      get: function get() {
        return this.l;
      }
    }]);

    return C;
  }();

  var x;

  var N = function N() {
    return x || (x = new C()), x;
  };

  var E =
  /*#__PURE__*/
  function (_i6) {
    _inherits(E, _i6);

    function E(t, e) {
      _classCallCheck(this, E);

      return _possibleConstructorReturn(this, _getPrototypeOf(E).call(this, function (_ref12) {
        var s = _ref12.request;
        var n = t.getURLsToCacheKeys();
        var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 =
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10(t) {
            var _ref13,
                _ref13$ignoreURLParam,
                e,
                _ref13$directoryIndex,
                s,
                _ref13$cleanURLs,
                n,
                i,
                r,
                o,
                _t17,
                _t18,
                _t19,
                _iteratorNormalCompletion22,
                _didIteratorError22,
                _iteratorError22,
                _iterator22,
                _step22,
                _e7,
                _args28 = arguments;

            return regeneratorRuntime.wrap(function _callee10$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _ref13 = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : {}, _ref13$ignoreURLParam = _ref13.ignoreURLParametersMatching, e = _ref13$ignoreURLParam === void 0 ? [/^utm_/, /^fbclid$/] : _ref13$ignoreURLParam, _ref13$directoryIndex = _ref13.directoryIndex, s = _ref13$directoryIndex === void 0 ? "index.html" : _ref13$directoryIndex, _ref13$cleanURLs = _ref13.cleanURLs, n = _ref13$cleanURLs === void 0 ? !0 : _ref13$cleanURLs, i = _ref13.urlManipulation;
                    r = new URL(t, location.href);
                    r.hash = "";
                    _context28.next = 5;
                    return r.href;

                  case 5:
                    o = function (t) {
                      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

                      var _loop2 = function _loop2() {
                        var s = _arr2[_i7];
                        e.some(function (t) {
                          return t.test(s);
                        }) && t.searchParams["delete"](s);
                      };

                      for (var _i7 = 0, _arr2 = _toConsumableArray(t.searchParams.keys()); _i7 < _arr2.length; _i7++) {
                        _loop2();
                      }

                      return t;
                    }(r, e);

                    _context28.next = 8;
                    return o.href;

                  case 8:
                    if (!(s && o.pathname.endsWith("/"))) {
                      _context28.next = 13;
                      break;
                    }

                    _t17 = new URL(o.href);
                    _t17.pathname += s;
                    _context28.next = 13;
                    return _t17.href;

                  case 13:
                    if (!n) {
                      _context28.next = 18;
                      break;
                    }

                    _t18 = new URL(o.href);
                    _t18.pathname += ".html";
                    _context28.next = 18;
                    return _t18.href;

                  case 18:
                    if (!i) {
                      _context28.next = 46;
                      break;
                    }

                    _t19 = i({
                      url: r
                    });
                    _iteratorNormalCompletion22 = true;
                    _didIteratorError22 = false;
                    _iteratorError22 = undefined;
                    _context28.prev = 23;
                    _iterator22 = _t19[Symbol.iterator]();

                  case 25:
                    if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
                      _context28.next = 32;
                      break;
                    }

                    _e7 = _step22.value;
                    _context28.next = 29;
                    return _e7.href;

                  case 29:
                    _iteratorNormalCompletion22 = true;
                    _context28.next = 25;
                    break;

                  case 32:
                    _context28.next = 38;
                    break;

                  case 34:
                    _context28.prev = 34;
                    _context28.t0 = _context28["catch"](23);
                    _didIteratorError22 = true;
                    _iteratorError22 = _context28.t0;

                  case 38:
                    _context28.prev = 38;
                    _context28.prev = 39;

                    if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                      _iterator22["return"]();
                    }

                  case 41:
                    _context28.prev = 41;

                    if (!_didIteratorError22) {
                      _context28.next = 44;
                      break;
                    }

                    throw _iteratorError22;

                  case 44:
                    return _context28.finish(41);

                  case 45:
                    return _context28.finish(38);

                  case 46:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee10, null, [[23, 34, 38, 46], [39,, 41, 45]]);
          })(s.url, e)[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _t16 = _step21.value;

            var _e6 = n.get(_t16);

            if (_e6) return {
              cacheKey: _e6
            };
          }
        } catch (err) {
          _didIteratorError21 = true;
          _iteratorError21 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
              _iterator21["return"]();
            }
          } finally {
            if (_didIteratorError21) {
              throw _iteratorError21;
            }
          }
        }
      }, t.strategy));
    }

    return E;
  }(i);

  function O(t) {
    var e = N();
    !function (t, e, n) {
      var c;

      if ("string" == typeof t) {
        var _s10 = new URL(t, location.href);

        c = new i(function (_ref14) {
          var t = _ref14.url;
          return t.href === _s10.href;
        }, e, n);
      } else if (t instanceof RegExp) c = new r(t, e, n);else if ("function" == typeof t) c = new i(t, e, n);else {
        if (!(t instanceof i)) throw new s("unsupported-route-type", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
        c = t;
      }

      (a || (a = new o(), a.addFetchListener(), a.addCacheListener()), a).registerRoute(c);
    }(new E(e, t));
  }

  t.clientsClaim = function () {
    self.addEventListener("activate", function () {
      return self.clients.claim();
    });
  }, t.precacheAndRoute = function (t, e) {
    !function (t) {
      N().precache(t);
    }(t), O(e);
  };
});