var bestOfToronto =  bestOfToronto || {};

// maps and markers are global, as used in both init and update
var maps = [];
var markers = [];
var infowindows = [];

function initMap() {

  // creates each map
  $.each($('.map'), function(key, val){
    // going through each map
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};

    // creates the map object
    maps[key] = new google.maps.Map(val, {
      zoom: 15,
      center: myLatLng,
      scrollwheel: false
    });

    // creates a marker for the map
    markers[key] = new google.maps.Marker({
      position: myLatLng,
      map: maps[key],
      animation: google.maps.Animation.DROP,
      title: bestOfToronto.activities[key].name
    });

    // sets an information window on the marker
    infowindows[key] = new google.maps.InfoWindow({
      content: bestOfToronto.activities[key].name.replace(/\+/g, " ")
    });

    // display the information windows
    infowindows[key].open(maps[key], markers[key]);
  });
}

// updates the maps that already exist
function updateMap(){

  // updates each map
  $.each($('.map'), function(key, val){

    // gets the new latitude and longitude
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};

    // updates the center of the map
    maps[key].setCenter(myLatLng);

    // removes the current marker from the map
    markers[key].setMap(null);

    // sets a new marker on the map
    markers[key] = new google.maps.Marker({
      position: myLatLng,
      map: maps[key],
      animation: google.maps.Animation.DROP,
      title: bestOfToronto.activities[key].name
    });

    // sets an information window on the marker
    infowindows[key] = new google.maps.InfoWindow({
      content: bestOfToronto.activities[key].name.replace(/\+/g, " ")
    });

    // display the information windows
    infowindows[key].open(maps[key], markers[key]);

  });
}
