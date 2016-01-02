var bestOfToronto =  bestOfToronto || {};

function initMap() {

  $.each($('.map'), function(key, val){
    // going through each map
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};
    var map = new google.maps.Map(val, {
      zoom: 15,
      center: myLatLng,
      scrollwheel: false
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  });
}
