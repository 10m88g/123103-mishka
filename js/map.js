
function initMap() {
  var mapContainer = document.querySelector(".contacts__map");

  //удалим заглушку - picture и класс no-js
  mapContainer.removeChild(mapContainer.firstElementChild);
  mapContainer.classList.remove("contacts__map--no-js");

  var map = new google.maps.Map(mapContainer, {
    zoom: 16,
    center: {lat: 59.936355, lng: 30.321623}
  });

  var image = 'img/icon-map-pin.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936355, lng: 30.321623},
    map: map,
    icon: image,
    title: "Ми-ми-мишка"
  });
}
