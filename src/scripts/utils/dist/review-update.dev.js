/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _therestaurantdbSource = _interopRequireDefault(require('../data/therestaurantdb-source'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewUpdate = function reviewUpdate(url, name, review) {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  _therestaurantdbSource.default.reviewRestaurant(dataInput);

  const reviewContainer = document.querySelector('#review');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = '\n    <div class="testi-item">\n        <div class="testi-avatar"><img src="user.jpg"></div>\n        <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>\n        <div class="testimonials-text">\n            <p>'.concat(review, '</p>\n            <div class="testimonials-avatar">\n                <h3>').concat(name, '</h3>\n                <h4>').concat(date, '</h4>\n            </div>\n        </div>\n        <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div> \n    ');
  reviewContainer.innerHTML += newReview;
};

const _default = reviewUpdate;
exports.default = _default;
