import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div>
      <p class="headline restoblok headFav" tabindex="0">Favorite Restaurant</p>
      <span class="section-separator"></span>
    </div>
    <div class="item">
    <div class="explore" id="favorite"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantFavorite = await FavoriteRestaurantIdb.getAllMovies();
    const restaurantContainer = document.querySelector('#favorite');
    restaurantFavorite.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurants);
    });

    // grid favorite
    if (restaurantFavorite.length <= 2) {
      restaurantContainer.classList.add('grid-container-favorite');
    } else {
      restaurantContainer.classList.add('grid-container');
    }

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
