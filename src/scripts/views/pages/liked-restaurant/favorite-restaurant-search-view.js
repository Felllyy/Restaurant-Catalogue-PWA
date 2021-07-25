import template from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <h2 class="content__heading" >Favorite Restaurants</h2>
       <input id="query" class="caribox" type="text" placeholder="Cari restoran">
           <div id="restaurants" class="restaurants favorite"></div>
       </div>
       `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(template.createRestaurantsItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found restaurants__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
