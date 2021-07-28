Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _urlParser = _interopRequireDefault(require('../../routes/url-parser'));

var _therestaurantdbSource = _interopRequireDefault(require('../../data/therestaurantdb-source'));

var _likeButtonPresenter = _interopRequireDefault(require('../../utils/like-button-presenter'));

var _reviewUpdate = _interopRequireDefault(require('../../utils/review-update'));

var _favoriteRestaurantIdb = _interopRequireDefault(require('../../data/favorite-restaurant-idb'));

var _templateCreator = _interopRequireDefault(require('../templates/template-creator'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */
var Detail = {
  render: function render() {
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', '\n    <div id="detailItem" class="detailblok"></div>\n    <div id="likeButtonContainer"></div>\n\n    <div id="mdl" class="modal">\n      <form class="modal-content">\n        <h2 class="headline">Tambah Ulasan</h2>\n        <span class="close">&times;</span>\n        <label for="inName">Nama</label>\n        <input name="inName" type="text" class="namaReviewer" id="inName" placeholder="Masukkan nama">\n        <label for="inReview">Ulasan</label>\n        <textarea name="inReview" class="isiReview" id="inReview" placeholder="Tambahkan review"></textarea>\n        <button type="submit" class="btnSubmit">Kirim</button>\n      </form>\n    </div>\n    <div id="review" class="reviewblok"></div>\n    ');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var url; var restaurantDetail; var detailContainer; var categoriContainer; var foodContainer; var drinkContainer; var ratings; var starTotal; var starPercentage; var reviewContainer; var modal; var btn; var span; var btnSubmit; var nameIn; var
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
            detailContainer.innerHTML = _templateCreator.default.createRestaurantsDetailTemplate(restaurantDetail.restaurant);
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
              reviewContainer.innerHTML += _templateCreator.default.createRestaurantsReviewTemplate(restaurant);
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

            _likeButtonPresenter.default.init({
              likeButtonContainer: document.querySelector('#likeButtonContainer'),
              favoriteRestaurants: _favoriteRestaurantIdb.default,
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
var _default = Detail;
exports.default = _default;
