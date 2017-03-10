;(function () {
  'use strict';

  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = mainNav.querySelector('.main-nav__toggle');

  //Инициализация:
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.remove('main-nav--no-js');

  mainNavToggle.addEventListener('click', clickHandler);

  function clickHandler() {
    mainNav.classList.toggle('main-nav--opened');
  }
})();
