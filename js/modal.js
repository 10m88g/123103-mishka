;(function () {

'use strict';

var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal__content');
var targets = document.querySelectorAll('.modal-show');

targets.forEach = [].forEach;
targets.forEach(function(target) {
  target.addEventListener('click', showModal);
});

//полифилл closest для ИЕ
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {}
        } while ((i < 0) && (el = el.parentElement));
        return el;
    };
}


function showModal(event) {
  event.preventDefault();
  modal.hidden = false;

  //расположить модалку по центру видимой области
  //плюс прокрутка
  var posY = (document.documentElement.clientHeight - modalContent.offsetHeight) / 2 + window.pageYOffset;
  modalContent.style.marginTop = posY + "px";

  //чтобы сразу не закрыть поставим таймер
  setTimeout(function () {
    document.body.addEventListener("click", hideModal);
    document.addEventListener("keyup", hideModal);
  }, 10);
}

function hideModal (event) {
  //закрываем по ESC или по клику на свободн области
  if ( (event.type === "keyup") && (event.keyCode === 27) || (event.type ==="click") && (!event.target.closest(".modal__content")) ) {
      modal.hidden = true;
      document.body.removeEventListener('click', hideModal);
      document.removeEventListener('keyup', hideModal);
    }
}
})();
