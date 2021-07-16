import TheRestaurantsDbSource from '../../data/therestaurantdb-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <div class="bluring"></div>
        <img src="hero-image_2.jpg" width="100%" alt="Hero image">
        <div class="tekstron">
            <h1 tabindex="0">Hayu ah urang taruang</h1>
            <p tabindex="0">Mangga dieksplor hela restona</p>
          <a href="#resto-blok" class="cari">Explore</a>
        </div>
    </div>
    <div>
      <p class="headline restoblok" id="resto-blok" tabindex="0">Explore Restaurant</p>
      <span class="section-separator"></span>
    </div>
    <div class="item">
    <div class="grid-container explore" id="posts"></div>
    </div>

    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await TheRestaurantsDbSource.homeRestaurants();
    const restaurantContainer = document.querySelector('#posts');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurants);
    });
  },
};
export default Home;
