Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _config = _interopRequireDefault(require('../../globals/config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var template =
/* #__PURE__ */
(function () {
  function template() {
    _classCallCheck(this, template);
  }

  _createClass(template, null, [{
    key: 'createRestaurantsDetailTemplate',
    value: function createRestaurantsDetailTemplate(restaurant) {
      return '\n    <div class="grid-container-detail">\n        <div class="titleDetail" id="titleDetail">\n          <h2 class="restaurant__name headline headdetail">'.concat(restaurant.name, '</h2>\n          <span class="section-separator headSeparator"></span>\n          <div class="categories">\n            <p>Kategori: </p>\n            <div id=categori></div>\n          </div>\n        </div>\n        <div class="headline rating">\n          <h4>Rating ').concat(restaurant.rating, '</h4>\n          <div class="stars-outer">\n            <div class="stars-inner"></div>\n          </div>\n        </div>\n        \n        <div class="itemdetail2">\n          <img class="lazyload poster" width="auto" height="auto" data-src="').concat(_config.default.BASE_IMAGE_URL + restaurant.pictureId, '" alt="').concat(restaurant.name, '" />\n        </div>\n\n        <div class="itemdetail3">\n          <h3>Ringkasan</h3>\n          <p>')
        .concat(restaurant.description, '</p><br>\n          <h4>Menu</h4>\n          <div class="menu">\n            <div class="food">\n              <h5>Makanan :</h5>\n              <div id="food"></div>\n            </div>\n            <div class="drink">\n              <h5>Minuman :</h5>\n              <div id="drink"></div>\n            </div>\n          </div>\n          <h4>Alamat</h4>\n          <p class="almt">')
        .concat(restaurant.address, ', ')
        .concat(restaurant.city, '</p>\n        </div>\n    </div>\n    <div class="section-title">\n      <h2>Reviews</h2>\n      <span class="section-separator"></span>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      <button id="btn" class="tombol" aria-label="Klik tambah ulasan"><i class="fa fa-plus fa-lg" aria-hidden="true"></i>\n    </button>\n    ');
    },
  }, {
    key: 'createRestaurantsReviewTemplate',
    value: function createRestaurantsReviewTemplate(restaurant) {
      return "\n        <div class=\"testi-item\">\n            <div class=\"testi-avatar\">\n            <picture>\n              <source type=\"image/webp\" media=\"(max-width: 600px)\" srcset=\"./images/user.webp\">\n              <source type=\"image/jpeg\" media=\"(max-width: 600px)\" srcset=\"./images/user.jpg\">\n              <img class=\"lazyload\"\n                data-src='./images/user.jpg' \n                alt=\"Gambar pengguna\"\n                width=\"auto\"\n                height=\"auto\">\n              </img>\n            </picture>\n            </div>\n            <div class=\"testimonials-text-before\"><i class=\"fa fa-quote-right\"></i></div>\n            <div class=\"testimonials-text\">\n                <p>".concat(restaurant.review, '</p>\n                <div class="testimonials-avatar">\n                    <h3>').concat(restaurant.name, '</h3>\n                    <h4>').concat(restaurant.date, '</h4>\n                </div>\n            </div>\n            <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div> \n    ');
    },
  }, {
    key: 'createRestaurantsItemTemplate',
    value: function createRestaurantsItemTemplate(restaurants) {
      return '\n    <div class="resto-item">\n              <div class="foto-blok">\n                <img class="lazyload foto" width="auto" height="auto" data-src="'.concat(_config.default.BASE_IMAGE_URL + restaurants.pictureId, '" alt="').concat(restaurants.name || '-', '" />\n                <div class="kota">\n                    <span>').concat(restaurants.city || '-', '</span>\n                </div>\n                </a>\n              </div>\n              <div class="deskripsi">\n                <p class="rate" tabindex="0"    >\n                  Rating <span>').concat(restaurants.rating || '-', '</span>\n                </p>\n                <div id="detailContent" class="restaurant__name"><a class="name" href="#/detail/')
        .concat(restaurants.id, '" tabindex="0">')
        .concat(restaurants.name || '-', '</a></div>\n                <p class="desc">')
        .concat(restaurants.description || '-', '</p>\n              </div>\n            </div>\n      ');
    },
  }, {
    key: 'createLikeRestaurantButtonTemplate',
    value: function createLikeRestaurantButtonTemplate() {
      return '\n      <button aria-label="like this restaurant" id="likeButton" class="like">\n        <i class="fa fa-heart-o" aria-hidden="true"></i>\n      </button>\n    ';
    },
  }, {
    key: 'createUnlikeRestaurantButtonTemplate',
    value: function createUnlikeRestaurantButtonTemplate() {
      return '\n      <button aria-label="unlike this restaurant" id="likeButton" class="like">\n        <i class="fa fa-heart" aria-hidden="true"></i>\n      </button>\n    ';
    },
  }]);

  return template;
}());

var _default = template;
exports.default = _default;
