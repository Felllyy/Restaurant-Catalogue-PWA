"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var serviceWorkerOption = {
  assets: ['/bundle.js', '/favicon.png', '/hero-image_2.jpg', '/user.jpg', '/icons/icon.JPG', '/index.html', '/manifest.json', '/icon_512x512.fdaed8d18eb63ab2a112dcff52c1cd0a.jpeg', '/icon_384x384.635e31c3229e2cbbe7b7002c7cbadb55.jpeg', '/icon_256x256.a4814d360a813cd7c4b07cc7e045adb6.jpeg', '/icon_192x192.9d475ad45d1ede8614185507a1648230.jpeg', '/icon_128x128.fdd8d6a4ba4623f51a929b7c2a1670d2.jpeg', '/icon_96x96.e824155fdecec1a5cc17498df080bca0.jpeg']
};
!function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(t, '__esModule', {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && _typeof(t) === 'object' && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: t
    }), 2 & e && typeof t !== 'string') for (var o in t) {
      r.d(n, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(e, 'a', e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = '', r(r.s = 1);
}([function (t, e, r) {
  var n = {
    KEY: '12345',
    BASE_URL: 'https://restaurant-api.dicoding.dev/',
    BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
    DEFAULT_LANGUAGE: 'en-us',
    CACHE_NAME: new Date().toISOString(),
    DATABASE_NAME: 'restaurant-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'restaurants'
  };

  function o(t, e, r, n, o, i, a) {
    try {
      var u = t[i](a);
      var c = u.value;
    } catch (t) {
      return void r(t);
    }

    u.done ? e(c) : Promise.resolve(c).then(n, o);
  }

  function i(t) {
    return function () {
      var e = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var a = t.apply(e, r);

        function u(t) {
          o(a, n, i, u, c, 'next', t);
        }

        function c(t) {
          o(a, n, i, u, c, 'throw', t);
        }

        u(void 0);
      });
    };
  }

  var a = {
    cachingAppShell: function cachingAppShell(t) {
      var e = this;
      return i(regeneratorRuntime.mark(function r() {
        return regeneratorRuntime.wrap(function (r) {
          for (;;) {
            switch (r.prev = r.next) {
              case 0:
                return r.next = 2, e._openCache();

              case 2:
                r.sent.addAll(t);

              case 4:
              case 'end':
                return r.stop();
            }
          }
        }, r);
      }))();
    },
    deleteOldCache: function deleteOldCache() {
      return i(regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return t.next = 2, caches.keys();

              case 2:
                t.sent.filter(function (t) {
                  return t !== n.CACHE_NAME;
                }).map(function (t) {
                  return caches["delete"](t);
                });

              case 4:
              case 'end':
                return t.stop();
            }
          }
        }, t);
      }))();
    },
    revalidateCache: function revalidateCache(t) {
      var e = this;
      return i(regeneratorRuntime.mark(function r() {
        var n;
        return regeneratorRuntime.wrap(function (r) {
          for (;;) {
            switch (r.prev = r.next) {
              case 0:
                return r.next = 2, caches.match(t);

              case 2:
                if (!(n = r.sent)) {
                  r.next = 5;
                  break;
                }

                return r.abrupt('return', n);

              case 5:
                return r.abrupt('return', e._fetchRequest(t));

              case 6:
              case 'end':
                return r.stop();
            }
          }
        }, r);
      }))();
    },
    _openCache: function _openCache() {
      return i(regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return t.abrupt('return', caches.open(n.CACHE_NAME));

              case 1:
              case 'end':
                return t.stop();
            }
          }
        }, t);
      }))();
    },
    _fetchRequest: function _fetchRequest(t) {
      var e = this;
      return i(regeneratorRuntime.mark(function r() {
        var n;
        return regeneratorRuntime.wrap(function (r) {
          for (;;) {
            switch (r.prev = r.next) {
              case 0:
                return r.next = 2, fetch(t);

              case 2:
                if ((n = r.sent) && n.status === 200) {
                  r.next = 5;
                  break;
                }

                return r.abrupt('return', n);

              case 5:
                return r.next = 7, e._addCache(t);

              case 7:
                return r.abrupt('return', n);

              case 8:
              case 'end':
                return r.stop();
            }
          }
        }, r);
      }))();
    },
    _addCache: function _addCache(t) {
      var e = this;
      return i(regeneratorRuntime.mark(function r() {
        return regeneratorRuntime.wrap(function (r) {
          for (;;) {
            switch (r.prev = r.next) {
              case 0:
                return r.next = 2, e._openCache();

              case 2:
                r.sent.add(t);

              case 4:
              case 'end':
                return r.stop();
            }
          }
        }, r);
      }))();
    }
  };
  e.a = a;
}, function (t, e, r) {
  r.r(e), function (t) {
    r(3);
    var e = r(0);

    function n(t) {
      return function (t) {
        if (Array.isArray(t)) return o(t);
      }(t) || function (t) {
        if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if (typeof t === 'string') return o(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        r === 'Object' && t.constructor && (r = t.constructor.name);
        if (r === 'Map' || r === 'Set') return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e);
      }(t) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }

    function o(t, e) {
      (e == null || e > t.length) && (e = t.length);

      for (var r = 0, n = new Array(e); r < e; r++) {
        n[r] = t[r];
      }

      return n;
    }

    var i = t.serviceWorkerOption.assets;
    self.addEventListener('install', function (t) {
      t.waitUntil(e.a.cachingAppShell([].concat(n(i), ['./'])));
    }), self.addEventListener('activate', function (t) {
      t.waitUntil(e.a.deleteOldCache());
    }), self.addEventListener('fetch', function (t) {
      t.respondWith(e.a.revalidateCache(t.request));
    });
  }.call(this, r(2));
}, function (t, e) {
  function r(t) {
    return (r = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : _typeof(t);
    })(t);
  }

  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function('return this')();
  } catch (t) {
    (typeof window === 'undefined' ? 'undefined' : r(window)) === 'object' && (n = window);
  }

  t.exports = n;
}, function (t, e, r) {
  (function (t) {
    function e(t) {
      return (e = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol' ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : _typeof(t);
      })(t);
    }

    var r = function (t) {
      var r = Object.prototype;
      var n = r.hasOwnProperty;
      var o = typeof Symbol === 'function' ? Symbol : {};
      var i = o.iterator || '@@iterator';
      var a = o.asyncIterator || '@@asyncIterator';
      var u = o.toStringTag || '@@toStringTag';

      function c(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e];
      }

      try {
        c({}, '');
      } catch (t) {
        c = function c(t, e, r) {
          return t[e] = r;
        };
      }

      function f(t, e, r, n) {
        var o = e && e.prototype instanceof h ? e : h;
        var i = Object.create(o.prototype);
        var a = new S(n || []);
        return i._invoke = function (t, e, r) {
          var n = 'suspendedStart';
          return function (o, i) {
            if (n === 'executing') throw new Error('Generator is already running');

            if (n === 'completed') {
              if (o === 'throw') throw i;
              return A();
            }

            for (r.method = o, r.arg = i;;) {
              var _a = r.delegate;

              if (_a) {
                var _u = x(_a, r);

                if (_u) {
                  if (_u === l) continue;
                  return _u;
                }
              }

              if (r.method === 'next') r.sent = r._sent = r.arg;else if (r.method === 'throw') {
                if (n === 'suspendedStart') throw n = 'completed', r.arg;
                r.dispatchException(r.arg);
              } else r.method === 'return' && r.abrupt('return', r.arg);
              n = 'executing';

              var _c = s(t, e, r);

              if (_c.type === 'normal') {
                if (n = r.done ? 'completed' : 'suspendedYield', _c.arg === l) continue;
                return {
                  value: _c.arg,
                  done: r.done
                };
              }

              _c.type === 'throw' && (n = 'completed', r.method = 'throw', r.arg = _c.arg);
            }
          };
        }(t, r, a), i;
      }

      function s(t, e, r) {
        try {
          return {
            type: 'normal',
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: 'throw',
            arg: t
          };
        }
      }

      t.wrap = f;
      var l = {};

      function h() {}

      function p() {}

      function d() {}

      var y = {};

      y[i] = function () {
        return this;
      };

      var v = Object.getPrototypeOf;
      var m = v && v(v(L([])));
      m && m !== r && n.call(m, i) && (y = m);
      var g = d.prototype = h.prototype = Object.create(y);

      function w(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }

      function b(t, r) {
        var o;

        this._invoke = function (i, a) {
          function u() {
            return new r(function (o, u) {
              !function o(i, a, u, c) {
                var f = s(t[i], t, a);

                if (f.type !== 'throw') {
                  var _l = f.arg;
                  var _h = _l.value;
                  return _h && e(_h) === 'object' && n.call(_h, '__await') ? r.resolve(_h.__await).then(function (t) {
                    o('next', t, u, c);
                  }, function (t) {
                    o('throw', t, u, c);
                  }) : r.resolve(_h).then(function (t) {
                    _l.value = t, u(_l);
                  }, function (t) {
                    return o('throw', t, u, c);
                  });
                }

                c(f.arg);
              }(i, a, o, u);
            });
          }

          return o = o ? o.then(u, u) : u();
        };
      }

      function x(t, e) {
        var r = t.iterator[e.method];

        if (void 0 === r) {
          if (e.delegate = null, e.method === 'throw') {
            if (t.iterator["return"] && (e.method = 'return', e.arg = void 0, x(t, e), e.method === 'throw')) return l;
            e.method = 'throw', e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return l;
        }

        var n = s(r, t.iterator, e.arg);
        if (n.type === 'throw') return e.method = 'throw', e.arg = n.arg, e.delegate = null, l;
        var o = n.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = void 0), e.delegate = null, l) : o : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, l);
      }

      function E(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function _(t) {
        var e = t.completion || {};
        e.type = 'normal', delete e.arg, t.completion = e;
      }

      function S(t) {
        this.tryEntries = [{
          tryLoc: 'root'
        }], t.forEach(E, this), this.reset(!0);
      }

      function L(t) {
        if (t) {
          var _e = t[i];
          if (_e) return _e.call(t);
          if (typeof t.next === 'function') return t;

          if (!isNaN(t.length)) {
            var _r = -1;

            var _o = function e() {
              for (; ++_r < t.length;) {
                if (n.call(t, _r)) return e.value = t[_r], e.done = !1, e;
              }

              return e.value = void 0, e.done = !0, e;
            };

            return _o.next = _o;
          }
        }

        return {
          next: A
        };
      }

      function A() {
        return {
          value: void 0,
          done: !0
        };
      }

      return p.prototype = g.constructor = d, d.constructor = p, p.displayName = c(d, u, 'GeneratorFunction'), t.isGeneratorFunction = function (t) {
        var e = typeof t === 'function' && t.constructor;
        return !!e && (e === p || (e.displayName || e.name) === 'GeneratorFunction');
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, u, 'GeneratorFunction')), t.prototype = Object.create(g), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, w(b.prototype), b.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = b, t.async = function (e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new b(f(e, r, n, o), i);
        return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, w(g), c(g, u, 'Generator'), g[i] = function () {
        return this;
      }, g.toString = function () {
        return '[object Generator]';
      }, t.keys = function (t) {
        var e = [];

        for (var _r2 in t) {
          e.push(_r2);
        }

        return e.reverse(), function r() {
          for (; e.length;) {
            var _n = e.pop();

            if (_n in t) return r.value = _n, r.done = !1, r;
          }

          return r.done = !0, r;
        };
      }, t.values = L, S.prototype = {
        constructor: S,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(_), !t) for (var _e2 in this) {
            _e2.charAt(0) === 't' && n.call(this, _e2) && !isNaN(+_e2.slice(1)) && (this[_e2] = void 0);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if (t.type === 'throw') throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var e = this;

          function r(r, n) {
            return a.type = 'throw', a.arg = t, e.next = r, n && (e.method = 'next', e.arg = void 0), !!n;
          }

          for (var _o2 = this.tryEntries.length - 1; _o2 >= 0; --_o2) {
            var _i = this.tryEntries[_o2];
            var a = _i.completion;
            if (_i.tryLoc === 'root') return r('end');

            if (_i.tryLoc <= this.prev) {
              var _u2 = n.call(_i, 'catchLoc');

              var _c2 = n.call(_i, 'finallyLoc');

              if (_u2 && _c2) {
                if (this.prev < _i.catchLoc) return r(_i.catchLoc, !0);
                if (this.prev < _i.finallyLoc) return r(_i.finallyLoc);
              } else if (_u2) {
                if (this.prev < _i.catchLoc) return r(_i.catchLoc, !0);
              } else {
                if (!_c2) throw new Error('try statement without catch or finally');
                if (this.prev < _i.finallyLoc) return r(_i.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var _r3 = this.tryEntries.length - 1; _r3 >= 0; --_r3) {
            var _o3 = this.tryEntries[_r3];

            if (_o3.tryLoc <= this.prev && n.call(_o3, 'finallyLoc') && this.prev < _o3.finallyLoc) {
              var i = _o3;
              break;
            }
          }

          i && (t === 'break' || t === 'continue') && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = 'next', this.next = i.finallyLoc, l) : this.complete(a);
        },
        complete: function complete(t, e) {
          if (t.type === 'throw') throw t.arg;
          return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), l;
        },
        finish: function finish(t) {
          for (var _e3 = this.tryEntries.length - 1; _e3 >= 0; --_e3) {
            var _r4 = this.tryEntries[_e3];
            if (_r4.finallyLoc === t) return this.complete(_r4.completion, _r4.afterLoc), _(_r4), l;
          }
        },
        "catch": function _catch(t) {
          for (var _e4 = this.tryEntries.length - 1; _e4 >= 0; --_e4) {
            var _r5 = this.tryEntries[_e4];

            if (_r5.tryLoc === t) {
              var _n2 = _r5.completion;

              if (_n2.type === 'throw') {
                var o = _n2.arg;

                _(_r5);
              }

              return o;
            }
          }

          throw new Error('illegal catch attempt');
        },
        delegateYield: function delegateYield(t, e, r) {
          return this.delegate = {
            iterator: L(t),
            resultName: e,
            nextLoc: r
          }, this.method === 'next' && (this.arg = void 0), l;
        }
      }, t;
    }(e(t) === 'object' ? t.exports : {});

    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(r);
    }
  }).call(this, r(4)(t));
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
      enumerable: !0,
      get: function get() {
        return t.l;
      }
    }), Object.defineProperty(t, 'id', {
      enumerable: !0,
      get: function get() {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}]);