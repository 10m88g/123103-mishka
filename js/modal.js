"use strict";

var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal__content');
var targets = document.querySelectorAll('.modal-show');

/*targets.forEach = [].forEach;
targets.forEach(function(target) {
  target.addEventListener('click', showModal);
})*/

[].forEach.call(targets, function(target) {
  target.addEventListener('click', showModal);
});


function showModal(evnt) {
  evnt.preventDefault();
  modal.hidden = false;

  //расположить модалку по центру видимой области
  //плюс прокрутка
  var posY = (document.documentElement.clientHeight - modalContent.offsetHeight) / 2 + window.pageYOffset;
  modalContent.style.marginTop = posY + "px";

  //чтобы сразу не закрыть поставим таймер
  setTimeout(function () {
    document.body.addEventListener('click', hideModal);
  }, 10);
}

function hideModal (evnt) {

  if (!evnt.target.closest(".modal__content")) {
    modal.hidden = true;
  }

  document.body.removeEventListener('click', hideModal);
}
