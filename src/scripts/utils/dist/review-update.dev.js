"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _therestaurantdbSource = _interopRequireDefault(require("../data/therestaurantdb-source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reviewUpdate = function reviewUpdate(url, name, review) {
  var dataInput = {
    id: url.id,
    name: name,
    review: review
  };

  _therestaurantdbSource["default"].reviewRestaurant(dataInput);

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

var _default = reviewUpdate;
exports["default"] = _default;