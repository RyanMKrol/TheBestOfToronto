var bestOfToronto =  bestOfToronto || {};

// maps and markers are global, as used in both init and update
var maps = [];
var markers = [];
var infowindows = [];

var has_init = false;

// default user information
var user_info = {'lat': 0, 'lng': 0};

// where the user marker goes in the marker array
const USER_POSITION = 3;

// initialises the map objects
function initMap() {

  // creates each map
  $.each($('.map'), function(key, val){
    // going through each map
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};

    // creates the map object
    maps[key] = new google.maps.Map(val, {
      zoom: 15,
      center: myLatLng,
      scrollwheel: false,
      backgroundColor: '#dedede'
    });

    //data added in both update and init
    addMiscData(key, myLatLng);
  });
  has_init = true;
}

// updates the maps that already exist
function updateMap(){

// updates each map
  $.each($('.map'), function(key, val){

    console.log(maps[key].getZoom());

    // gets the new latitude and longitude
    var myLatLng = {lat: bestOfToronto.activities[key].lat, lng: bestOfToronto.activities[key].lng};

    // updates the center of the map
    maps[key].setCenter(myLatLng);

    // removes the current marker from the map
    markers[key].setMap(null);

    //data added in both update and init
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

  // place the marker for the user on the map
  if(user_info.lng){
    // create the marker
    markers[USER_POSITION] = new google.maps.Marker({
      position: user_info,
      map: maps[key],
      animation: google.maps.Animation.DROP,
      title: 'user'
    });

    //set the icon to the blue pin
    markers[USER_POSITION].setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
  }

  // sets an information window on the marker
  infowindows[key] = new google.maps.InfoWindow({
    // have to change the title back to a user friendly format
    content: clean_name
  });

  // if the marker exists, set the bounds of the map to include it
  if(markers[USER_POSITION]){
    maps[key].fitBounds(new google.maps.LatLngBounds(null));
    // creating an array of bounds
    var bounds = new google.maps.LatLngBounds();

    // adding the two markers on the map, into the bounds array
    bounds.extend(markers[key].getPosition());
    bounds.extend(markers[USER_POSITION].getPosition());

    // resize the map to fit these markers
    maps[key].fitBounds(bounds);
  }

  // display the information windows
  infowindows[key].open(maps[key], markers[key]);

  // i change this information here because of the pause between the refresh and the map updating
  $('.activity_holder a').eq(key).html(clean_name);
  $('.activity_holder a').eq(key).attr('href', bestOfToronto.activities[key].url);
  $('.location_info p').eq(key).html(bestOfToronto.activities[key].description);
}

// used when the system gets the lat and long values for the user
function showUserPosition(position){

  // if the map has already been updated, we don't need to update it again
  var has_updated = !(user_info.lat == 0);

  // update the values for the user
  user_info.lat = position.coords.latitude;
  user_info.lng = position.coords.longitude;

  // this should only trigger on the first page load
  if(!has_updated && has_init){
    updateMap();
  }
}
