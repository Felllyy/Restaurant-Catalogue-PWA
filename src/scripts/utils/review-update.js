import TheRestaurantsDbSource from '../data/therestaurantdb-source';

const reviewUpdate = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  TheRestaurantsDbSource.reviewRestaurant(dataInput);

  const reviewContainer = document.querySelector('#review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="testi-item">
        <div class="testi-avatar">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/user.webp">
          <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/user.jpg">
          <img class="lazyload"
            data-src='./images/user.jpg' 
            alt="Gambar pengguna">
          </img>
        </picture>
        </div>
        <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
        <div class="testimonials-text">
            <p>${review}</p>
            <div class="testimonials-avatar">
                <h3>${name}</h3>
                <h4>${date}</h4>
            </div>
        </div>
        <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div> 
    `;
  reviewContainer.innerHTML += newReview;
};

export default reviewUpdate;
