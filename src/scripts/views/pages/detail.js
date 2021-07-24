/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import TheRestaurantsDbSource from '../../data/therestaurantdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import reviewUpdate from '../../utils/review-update';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsDetailTemplate, createRestaurantsReviewTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="detailItem" class="detailblok"></div>
    <div id="likeButtonContainer"></div>

    <div id="mdl" class="modal">
      <form class="modal-content">
        <h2 class="headline">Tambah Ulasan</h2>
        <span class="close">&times;</span>
        <label for="inName">Nama</label>
        <input name="inName" type="text" class="namaReviewer" id="inName" placeholder="Masukkan nama">
        <label for="inReview">Ulasan</label>
        <textarea name="inReview" class="isiReview" id="inReview" placeholder="Tambahkan review"></textarea>
        <button type="submit" class="btnSubmit">Kirim</button>
      </form>
    </div>
    </div>
    <div id="review" class="reviewblok"></div>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await TheRestaurantsDbSource.detailRestaurants(url.id);
    const detailContainer = document.querySelector('#detailItem');
    detailContainer.innerHTML = createRestaurantsDetailTemplate(restaurantDetail.restaurant);

    const categoriContainer = document.querySelector('#categori');
    restaurantDetail.restaurant.categories.forEach((restaurant) => {
      categoriContainer.innerHTML += `<p>${restaurant.name}</p>`;
    });

    const foodContainer = document.querySelector('#food');
    restaurantDetail.restaurant.menus.foods.forEach((restaurant) => {
      foodContainer.innerHTML += `<p>- ${restaurant.name}</p>`;
    });
    const drinkContainer = document.querySelector('#drink');
    restaurantDetail.restaurant.menus.drinks.forEach((restaurant) => {
      drinkContainer.innerHTML += `<p>- ${restaurant.name}</p>`;
    });
    // rating
    const ratings = restaurantDetail.restaurant.rating;
    const starTotal = 5;
    // eslint-disable-next-line prefer-template
    const starPercentage = (ratings / starTotal) * 100 + '%';
    document.querySelector('.rating .stars-inner').style.width = starPercentage;

    // reviews
    const reviewContainer = document.querySelector('#review');
    restaurantDetail.restaurant.customerReviews.forEach((restaurant) => {
      reviewContainer.innerHTML += createRestaurantsReviewTemplate(restaurant);
    });

    // css grid review
    if (restaurantDetail.restaurant.customerReviews.length == 1) {
      reviewContainer.classList.add('grid-container-satu');
    } else if (restaurantDetail.restaurant.customerReviews.length == 2) {
      reviewContainer.classList.add('grid-container-dua');
    } else {
      reviewContainer.classList.add('grid-container-review');
    }

    // add review
    const modal = document.getElementById('mdl');
    const btn = document.getElementById('btn');
    const span = document.getElementsByClassName('close')[0];
    btn.onclick = () => {
      modal.style.display = 'block';
    };
    span.onclick = () => {
      modal.style.display = 'none';
    };
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

    // review
    const btnSubmit = document.querySelector('.btnSubmit');
    const nameIn = document.querySelector('#inName');
    const reviewIn = document.querySelector('#inReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameIn.value === '' || reviewIn.value === '') {
        // eslint-disable-next-line no-alert
        alert('Isi nama dan ulasan!');
        nameIn.value = '';
        reviewIn.value = '';
      } else {
        reviewUpdate(url, nameIn.value, reviewIn.value);
        nameIn.value = '';
        reviewIn.value = '';
        modal.style.display = 'none';
      }
    });
    // likebutton
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
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
  },
};

export default Detail;
