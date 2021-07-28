const headerTemp = `<header>
<div class="header__wrapper container"> <!-- header__wrapper-это оболочка-->
    <a class="header__icon"href="#">
        <img class="header__logo-img" src="img/logo.png" alt="icon">
        <span>
            BRAN<span class="header__icon_spacial-case"><b>D</b></span>
        </span>
    </a>
    <form class="header__form" action="#">
        <button class="header__form-search">
            Browse <a href="#"><img class="header__arrow" src="img/arrow-1.png" alt="arrow"></a></button>
        <input class="header__form-input" type="text" placeholder="   Search for item...  ">
        <a class="header__button-search" href="#">
            <img src="img/search.png" alt="search">
        </a>
    </form>
    <div class="header__controls">
        <a href="#">
            <img class='header__buy-icon' src="img/buy_icon.svg" alt="buy">
        </a>
    </div class='header'>
    <button class="header_button">My Account<img class="header__arrow-button" src="img/arrow-2.png" alt="arrow"></button>
</div>
</header>`

Vue.component('header-comp', {
    template: headerTemp
})
