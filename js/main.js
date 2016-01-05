var bestOfToronto =  bestOfToronto || {};

var base_link = 'http://www.blogto.com';
//when you press the refresh button, get new data

// used to store the activities
bestOfToronto.activities = [];

// used to keep track of the ajax requests
var outstanding_ajax_calls = 0;

// when the user presses a button
$('button').click(function(){

  // if navigator is supported, get the location and then update the map and user variable
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showUserPosition, function(){alert("error");});
  }

  // get JSON data
  $.getJSON( "php/update_data.php", function( json ) {

    // set the title of the page
    $('#activity_title').html(json.title);
    // set each of the places objects
    for (i = 0; i < json.locations.length; i++) {

      bestOfToronto.activities[i] = json.locations[i];

      // set the titles to be something that will play nicely with the map api
      bestOfToronto.activities[i].name = bestOfToronto.activities[i].name.replace(/ /g, "+");

      // get the place information for the activity
      placeRequest(bestOfToronto.activities[i]);
    }
  });
});

// api call to get the map location of the activity
function placeRequest(activity_object){

  // call to a php file which interacts with the google maps api
  $.getJSON("php/get_place_data.php", {'place': activity_object.name}, function(json){

    // setting some vital properties
    activity_object.place_id = json.results[0].place_id;
    activity_object.lat = json.results[0].geometry.location.lat;
    activity_object.lng = json.results[0].geometry.location.lng;


    //i only want to include the script once, there's no need to increment after that
    if(outstanding_ajax_calls < 2){

      // keep incrementing until the data for the map is ready
      outstanding_ajax_calls++;
    } else {

      // check if the script already exists in the system
      if(!bestOfToronto.scriptIncluded){

        // the script has been loaded and doesn't need to be laoded again
        bestOfToronto.scriptIncluded = true;

        // load the script
        $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXZ9JJRcKig6MbOcIyhLWAVPAUBrz6xcM&callback=initMap");
      } else {


        //update the maps
        updateMap();
      }

      // reset the ajax calls
      outstanding_ajax_calls = 0;
    }
  });
}

// when the page is ready simulate a refresh
$(document).ready(function(){
  $('button').click()
});
