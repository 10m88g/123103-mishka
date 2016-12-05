var mainNav = document.querySelector('.main-nav');
var mainNavToggle = mainNav.querySelector('.main-nav__toggle');

mainNavToggle.addEventListener('click', clickHandler);

function clickHandler (event) {
  mainNav.classList.toggle('main-nav--opened');
}
