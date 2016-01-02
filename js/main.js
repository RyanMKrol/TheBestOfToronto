var base_link = 'http://www.blogto.com';
//when you press the refresh button, get new data
$('button').click(function(){
  var places = [];

  // get JSON data
  $.getJSON( "php/update_data.php", function( json ) {

    // set each of the places objects
    for (i = 0; i < json.length; i++) {
      places[i] = json[i];
      // places[i].name = places[i].name.replace(" ", "+");
      places[i].name = places[i].name.replace(/ /g, "+");
      placeRequest(places[i]);
    }

    // var link = base_link + json.first;
    // $('#activity_title').html(json.title);
    // $('#activity_link').attr('href', link);
  });
});

function placeRequest(activity_object){
  $.getJSON("php/get_place_data.php", {'place': activity_object.name}, function(json){
    console.log("starting");
    console.log(activity_object.name);
    console.log(json);
    activity_object.place_id = json.results[0].place_id;
    console.log(activity_object.name + " " + json.results[0].place_id);
    console.log(json.results[0].place_id);
  });
}

// when the page is ready simulate a refresh
$(document).ready(function(){
  $('button').click()
});
