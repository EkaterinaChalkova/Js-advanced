const footerTemp = `<footer class="footer">
<div class="footer-nav container">
    <div class="footer_nav-logo">
        <a class="header__icon"href="#">
            <img class="header__logo-img" src="img/logo.png" alt="icon">
            <span>
                BRAN<span class="header__icon_spacial-case"><b>D</b></span>
            </span>
        </a>
        <p class="footer_nav_logo-description">
            Objectively transition extensive data rather than cross functional solutions. Monotonectally
            syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an
            expanded array of processes and cross-unit partnerships.
        </p>
        <p class="footer_nav_logo_description-text">
            Efficiently plagiarize 24/365 action items and focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
        </p>

    </div>

    <div class="information">
        <h1 class="information-title">company</h1>
        <ul class="information_title-list">
            <li class="information_title_list-categories">
               <a class="information_title_list-link" href="#">Home</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Shop</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">About</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">How It Works</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
    
    <div class="information">
        <h1 class="information-title">INFORMATION</h1>
        <ul class="information_title-list">
            <li class="information_title_list-categories">
               <a class="information_title_list-link" href="#">Tearms & Condition</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Privacy Policy</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">How to Buy</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">How to Sell</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Promotion</a>
            </li>
        </ul>
    </div>
               
    <div class="information">
        <h1 class="information-title">SHOP CATEGORY</h1>
        <ul class="information_title-list">
            <li class="information_title_list-categories">
               <a class="information_title_list-link" href="#">Men</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Women</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Child</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Apparel</a>
            </li>
            <li class="information_title_list-categories">
                <a class="information_title_list-link" href="#">Brows All</a>
            </li>
        </ul>
    </div>
</div>

<div class="footer-copyright">
    <div class="footer_copy container">
        <div class="footer_copy-text">
            © 2017  Brand  All Rights Reserved.
        </div>
        <div class="footer_copy_text-button">
            <a class="footer_copy-social" href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a class="footer_copy-social"href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a class="footer_copy-social" href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a class="footer_copy-social" href="#">
                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
            <a class="footer_copy-social" href="#">
                <i class="fa fa-google-plus" aria-hidden="true" ></i>
            </a>
        </div>
    </div>
</div>
</footer>`

Vue.component('footer-comp', {
    template: footerTemp
})