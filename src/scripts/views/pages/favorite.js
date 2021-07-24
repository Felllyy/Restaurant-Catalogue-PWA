/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });

    const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(favoriteRestaurants);
    const restaurantContainer = document.querySelector('.favorite');

    // grid favorite
    if (favoriteRestaurants.length <= 2) {
      restaurantContainer.classList.add('grid-container-favorite');
    } else {
      restaurantContainer.classList.add('grid-container');
    }

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
