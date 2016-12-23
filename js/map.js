
function initMap() {
  var map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 16,
    center: {lat: 59.936355, lng: 30.321623}
  });

  var image = 'img/icon-map-pin.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936355, lng: 30.321623},
    map: map,
    icon: image
  });
}
