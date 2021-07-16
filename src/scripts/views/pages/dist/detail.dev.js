/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _urlParser = _interopRequireDefault(require('../../routes/url-parser'));

const _therestaurantdbSource = _interopRequireDefault(require('../../data/therestaurantdb-source'));

const _likeButtonInitiator = _interopRequireDefault(require('../../utils/like-button-initiator'));

const _reviewUpdate = _interopRequireDefault(require('../../utils/review-update'));

const _templateCreator = require('../templates/template-creator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */
const Detail = {
  render: function render() {
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', '\n    <div id="detailItem" class="detailblok"></div>\n    <div id="likeButtonContainer"></div>\n\n    <div id="mdl" class="modal">\n      <form class="modal-content">\n        <h2 class="headline">Tambah Ulasan</h2>\n        <span class="close">&times;</span>\n        <label for="inName">Nama</label>\n        <input name="inName" type="text" class="namaReviewer" id="inName" placeholder="Masukkan nama">\n        <label for="inReview">Ulasan</label>\n        <textarea name="inReview" class="isiReview" id="inReview" placeholder="Tambahkan review"></textarea>\n        <button type="submit" class="btnSubmit">Kirim</button>\n      </form>\n    </div>\n    </div>\n    <div id="review" class="reviewblok"></div>\n    ');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    let url; let restaurantDetail; let detailContainer; let categoriContainer; let foodContainer; let drinkContainer; let ratings; let starTotal; let starPercentage; let reviewContainer; let modal; let btn; let span; let btnSubmit; let nameIn; let
      reviewIn;
    return regeneratorRuntime.async((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Fungsi ini akan dipanggil setelah render()
            url = _urlParser.default.parseActiveUrlWithoutCombiner();
            _context2.next = 3;
            return regeneratorRuntime.awrap(_therestaurantdbSource.default.detailRestaurants(url.id));

          case 3:
            restaurantDetail = _context2.sent;
            detailContainer = document.querySelector('#detailItem');
            detailContainer.innerHTML = (0, _templateCreator.createRestaurantsDetailTemplate)(restaurantDetail.restaurant);
            categoriContainer = document.querySelector('#categori');
            restaurantDetail.restaurant.categories.forEach((restaurant) => {
              categoriContainer.innerHTML += '<p>'.concat(restaurant.name, '</p>');
            });
            foodContainer = document.querySelector('#food');
            restaurantDetail.restaurant.menus.foods.forEach((restaurant) => {
              foodContainer.innerHTML += '<p>- '.concat(restaurant.name, '</p>');
            });
            drinkContainer = document.querySelector('#drink');
            restaurantDetail.restaurant.menus.drinks.forEach((restaurant) => {
              drinkContainer.innerHTML += '<p>- '.concat(restaurant.name, '</p>');
            }); // rating

            ratings = restaurantDetail.restaurant.rating;
            starTotal = 5; // eslint-disable-next-line prefer-template

            starPercentage = `${ratings / starTotal * 100}%`;
            document.querySelector('.rating .stars-inner').style.width = starPercentage; // reviews

            reviewContainer = document.querySelector('#review');
            restaurantDetail.restaurant.customerReviews.forEach((restaurant) => {
              reviewContainer.innerHTML += (0, _templateCreator.createRestaurantsReviewTemplate)(restaurant);
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
            btnSubmit.addEventListener('click', (e) => {
              e.preventDefault();

              if (nameIn.value === '' || reviewIn.value === '') {
                // eslint-disable-next-line no-alert
                alert('Isi nama dan ulasan!');
                nameIn.value = '';
                reviewIn.value = '';
              } else {
                (0, _reviewUpdate.default)(url, nameIn.value, reviewIn.value);
                nameIn.value = '';
                reviewIn.value = '';
                modal.style.display = 'none';
              }
            }); // likebutton

            _likeButtonInitiator.default.init({
              likeButtonContainer: document.querySelector('#likeButtonContainer'),
              restaurant: {
                id: restaurantDetail.restaurant.id,
                name: restaurantDetail.restaurant.name,
                pictureId: restaurantDetail.restaurant.pictureId,
                rating: restaurantDetail.restaurant.rating,
                address: restaurantDetail.restaurant.address,
                city: restaurantDetail.restaurant.city,
                description: restaurantDetail.restaurant.description,
              },
            });

          case 30:
          case 'end':
            return _context2.stop();
        }
      }
    });
  },
};
const _default = Detail;
exports.default = _default;
