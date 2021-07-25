import TheRestaurantsDbSource from '../../data/therestaurantdb-source';
import template from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <div class="bluring"></div>
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image_2.webp">
          <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-image_2.jpg">
          <img class="lazyload"
            data-src='./images/hero-image_2.jpg' 
            alt="Gambar jumbotron"
            width="1350px"
            height="900px">
          </img>
        </picture>
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
      restaurantContainer.innerHTML += template.createRestaurantsItemTemplate(restaurants);
    });
  },
};
export default Home;
