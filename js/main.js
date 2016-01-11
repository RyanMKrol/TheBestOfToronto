var bestOfToronto =  bestOfToronto || {};

var base_link = 'http://www.blogto.com';
//when you press the refresh button, get new data

// used to store the activities
bestOfToronto.activities = [];

// used to keep track of the ajax requests
var outstanding_ajax_calls = 0;

// when the right button is clicked
$('#right').click(function(){

  // gets the new place data
  getPlaceData();

  // make a clone of the title to act as the old title
  $('#title').clone().each(function(){
    this.id = 'clone';
  }).insertAfter($('#title'));

  // move the actual title element out of view
  $('#title').css('left', '+=5000px');

  // move both the clone and title to the left
  $( ".activity_title" ).animate({
    left: "-=5000px",
  }, 1000, function() {

    // remove the clone
    $('#clone').remove();
  });

  // make the scroll indicator bounce to tell the user there's a new set of things
  bounceIndicator();
});

// bounces the scroll indicator
function bounceIndicator(){

  // bouncing scroll indicator
  for(i = 0; i < 3; i++){
    $( "#scroll_indicator" ).animate({bottom: '-=25'}, 400);
    $( "#scroll_indicator" ).animate({bottom: '+=25'}, 400);
  }
}

// when the user presses a button
$('button').click(function(){

  // getPlaceData();
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

  // programatically update the page when it loads
  getPlaceData();

});

function getPlaceData(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showUserPosition, function(){console.log("error");});
  }

  // get JSON data
  $.getJSON( "php/update_data.php", function( json ) {
    // set the title of the page
    $('#title').html(json.title);
    // set each of the places objects
    for (i = 0; i < json.locations.length; i++) {
      bestOfToronto.activities[i] = json.locations[i];

      // set the titles to be something that will play nicely with the map api
      bestOfToronto.activities[i].name = bestOfToronto.activities[i].name.replace(/ /g, "+");

      // get the place information for the activity
      placeRequest(bestOfToronto.activities[i]);
    }
  });
}
