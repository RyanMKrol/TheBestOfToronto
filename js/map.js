var bestOfToronto =  bestOfToronto || {};

// maps and markers are global, as used in both init and update
var maps = [];
var markers = [];
var infowindows = [];

// initialises the map objects
function initMap() {

  // creates each map
  $.each($('.map'), function(key, val){
    // going through each map
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};

    // creates the map object
    maps[key] = new google.maps.Map(val, {
      zoom: 14,
      center: myLatLng,
      scrollwheel: false
    });

    addMiscData(key, myLatLng);
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

    addMiscData(key, myLatLng);
  });
}

// i refactored this code because it's used in both init and update
function addMiscData(key, myLatLng){

  // puts the name of the location in a user friendly format
  var clean_name = bestOfToronto.activities[key].name.replace(/\+/g, " ");

  // sets a new marker on the map
  markers[key] = new google.maps.Marker({
    position: myLatLng,
    map: maps[key],
    animation: google.maps.Animation.DROP,
    title: bestOfToronto.activities[key].name
  });

  // sets an information window on the marker
  infowindows[key] = new google.maps.InfoWindow({
    // have to change the title back to a user friendly format
    content: clean_name
  });

  // display the information windows
  infowindows[key].open(maps[key], markers[key]);

  // i change this information here because of the pause between the refresh and the map updating
  $('.location_div>h2').eq(key).html(clean_name);
}
