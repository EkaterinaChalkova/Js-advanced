const mainTemp = `<div class="main">
<nav>
    <a href="index.html">HOME</a>
    <a href="product-page-man.html">MAN</a>
    <a href="single.html">WOMEN</a>
    <a href="#">KIDS</a>
    <a href="checkout.html">ACCOSERIESE</a>
    <a href="#">FEATURED</a>
    <a href="shopping.html">HOT DEALS</a>
</nav>

<section class="arrivals">
    <div class="arrivals-wrapper container">
        <div class="arrivals-new">
            New Arrivals
        </div>
        <div class="arrivals-link">
            <a class="arrivals-link__home" href="index.html"> Home /</a>
            <a class="arrivals-link__man" href="product-page-man.html">Men /</a>
            <a class="arrivals-link__new" href="">New Arrivals </a>
        </div>
    </div>
</section>

<section class="product container">
    <div class="product__sidebar">
        <div class="product__sidebar-item">
            <input class="product__sidebar-toggler" type="checkbox" id="category" checked="">
            <label class="product__sidebar-label" for="category">Category</label>
            <div class="product__sidebar-nav">
                <a class="product__sidebar-link" href="#">Accessories</a>
                <a class="product__sidebar-link" href="#">Bags</a>
                <a class="product__sidebar-link" href="#">Denim</a>
                <a class="product__sidebar-link" href="#">Hoodies & Sweatshirts</a>
                <a class="product__sidebar-link" href="#">Jackets & Coats</a>
                <a class="product__sidebar-link" href="#">Pants</a>
                <a class="product__sidebar-link" href="#">Polos</a>
                <a class="product__sidebar-link" href="#">Shirts</a>
                <a class="product__sidebar-link" href="#">Shoes</a>
                <a class="product__sidebar-link" href="#">Shorts</a>
                <a class="product__sidebar-link" href="#">Sweaters & Knits</a>
                <a class="product__sidebar-link" href="#">T-Shirts</a>
                <a class="product__sidebar-link" href="#">Tanks</a>
            </div>

        </div>

        <div class="product__sidebar-item">
            <input class="product__sidebar-toggler" type="checkbox" id="brand">
            <label class="product__sidebar-label" for="brand">Brand</label>
            <div class="product__sidebar-nav">
                <a class="product__sidebar-link" href="#">Accessories</a>
                <a class="product__sidebar-link" href="#">Bags</a>
                <a class="product__sidebar-link" href="#">Denim</a>
                <a class="product__sidebar-link" href="#">Hoodies & Sweatshirts</a>
                <a class="product__sidebar-link" href="#">Jackets & Coats</a>
                <a class="product__sidebar-link" href="#">Pants</a>
                <a class="product__sidebar-link" href="#">Polos</a>
                <a class="product__sidebar-link" href="#">Shirts</a>
                <a class="product__sidebar-link" href="#">Shoes</a>
                <a class="product__sidebar-link" href="#">Shorts</a>
                <a class="product__sidebar-link" href="#">Sweaters & Knits</a>
                <a class="product__sidebar-link" href="#">T-Shirts</a>
                <a class="product__sidebar-link" href="#">Tanks</a>
            </div>

        </div>

        <div class="product__sidebar-item">
            <input class="product__sidebar-toggler" type="checkbox" id="Designer">
            <label class="product__sidebar-label" for="Designer">Designer</label>
            <div class="product__sidebar-nav">
                <a class="product__sidebar-link" href="#">Accessories</a>
                <a class="product__sidebar-link" href="#">Bags</a>
                <a class="product__sidebar-link" href="#">Denim</a>
                <a class="product__sidebar-link" href="#">Hoodies & Sweatshirts</a>
                <a class="product__sidebar-link" href="#">Jackets & Coats</a>
                <a class="product__sidebar-link" href="#">Pants</a>
                <a class="product__sidebar-link" href="#">Polos</a>
                <a class="product__sidebar-link" href="#">Shirts</a>
                <a class="product__sidebar-link" href="#">Shoes</a>
                <a class="product__sidebar-link" href="#">Shorts</a>
                <a class="product__sidebar-link" href="#">Sweaters & Knits</a>
                <a class="product__sidebar-link" href="#">T-Shirts</a>
                <a class="product__sidebar-link" href="#">Tanks</a>
            </div>

        </div>
    </div>

    <div class="product__content">
        <div class="product__filter">
            <div class="product__filter-item product__filter-item_tranding">
                <span class="product__filter-item-title">Trending now</span>
                <div class="product__filter-item-wrapper_trending">
                    <span class="product__filter-item-trend">Bohemian</span>
                    <span class="product__filter-item-trend">Floral</span>
                    <span class="product__filter-item-trend">Lace</span>
                    <span class="product__filter-item-trend">Floral</span>
                    <span class="product__filter-item-trend">Lace</span>
                    <span class="product__filter-item-trend">Bohemian</span>
                </div>
            </div>

            <div class="product__filter-item product__filter-item_size">
                <span class="product__filter-item-title-size">Size</span>
                <div class="product__filter-item-wrapper_size">
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">XXS</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">XS</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">S</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">M</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">L</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">XL</span>
                    </label>
                    <label class="product__filter-size-item">
                        <input class="product__filter-size-check" type="checkbox">
                        <span class="product__filter-size-label">XXL</span>
                    </label>
                </div>
            </div>

            <div class="range__wrapper">
                <h1 class="range-title">price</h1>
                <input class="range-title__field" type="range" id="volume" name="volume" min="0" max="21">
                <div class="price">
                    <span class="price-dollar">$52</span>
                    <span>$400</span>
                </div>

            </div>
        </div>
        <div class="product__sorr">
            <div class="product__sorr-item">
                <input class="product__sorr-toggler" type="checkbox" id="price">
                <label class="product__sorr-label" for="price">Sort By</label>
            </div>

            <div class="product__sorr-name">
                <input class="product__sorr-toggler-name" type="checkbox" id="name">
                <label class="product__sorr-label-name" for="name">Name<i class="fa fa-caret-down"
                        aria-hidden="true"></i></label>
            </div>

            <div class="product__sorr-item-show">
                <input class="product__sorr-toggler" type="checkbox" id="show">
                <label class="product__sorr-label" for="show">Show</label>
            </div>

            <div class="product__sorr-item-namber">
                <input class="product__sorr-toggler" type="checkbox" id="namber">
                <label class="product__sorr-label" for="namber">09<i class="fa fa-caret-down"
                        aria-hidden="true"></i></label>
            </div>
        </div>

        <div class="product__content-body">
            <div class="featured-items__wrapper">
                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-1.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <button class="button_card">
                                    <img class="trash" src="img/forma-buy.png">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-2.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-3.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-4.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-5.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-6.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-7.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-8.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

                <figure class="featured-items__item">
                    <div class="card__img">
                        <img src="img/Image-man-9.png" alt="photo">
                        <div class="add__wrapper">
                            <div class="border">
                                <img class="trash" src="img/forma-buy.png">
                                <button class="button_card">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <figcaption class="block_text_catalog">
                        <span class="product_description">Mango People T-shirt</span>
                        <span class="price_of_product">$52.00</span>
                    </figcaption>
                </figure>

            </div>
        </div>


        <div class="product__cards-controls">
            <div class="footer-cards__pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>

            <button class="footer-cards__button">View All</button>
        </div>

    </div>

</section>


<section class="options">
    <div class="options__wrapper container">
        <article class="options__free-delivery">
            <h3 class="option__title">Free Delivery</h3>
            <span class="option__description">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                models.
            </span>
        </article>
        <article class="options__sales">
            <h3 class="option__title">Sales &amp; discounts</h3>
            <span class="option__description">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                models.
            </span>
        </article>
        <article class="options__quality">
            <h3 class="option__title">Quality assurance</h3>
            <span class="option__description">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                models.
            </span>
        </article>
    </div>
</section>

<section class="new-letter">

    <div class="add-wrapper container">
        <div class="new_letter-review">
            <img class="new_letter_review-img" src="img/photo-women.png">
            <article class="new_letter_review-text">
                <span class="new_letter_review_text-tittle">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a.
                    Aliquam condimentum mattis neque sed pretium”
                </span>
                <span class="new_letter_review_text-name">
                    Bin Burhan
                </span>
                <span class="new_letter_review_text_name-subtitle">
                    Dhaka, Bd
                </span>
            </article>
        </div>



        <div class="subscribe">
            <h1 class="subscribe_text-title">Subscribe</h1>
            <p class="subscribe_text-subtitle">
                for oup newletter and promotion
            </p>
            <form class="subscribe-form" action="#">
                <input class="subscribe_form-input" type="text" placeholder="Enter Your Email">
                <button class="subscribe_form_input-button">Subscribe</button>
            </form>
        </div>
    </div>
</section>
</div>`

Vue.component('main-comp', {
    template: mainTemp
})