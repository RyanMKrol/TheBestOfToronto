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
      console.log(places[i].name);
      $.getJSON("php/get_place_data.php", {'place': places[i].name}, function(json){
        console.log("json data");
        console.log(json);
      });
    }

    // var link = base_link + json.first;
    // $('#activity_title').html(json.title);
    // $('#activity_link').attr('href', link);
  });
});

// when the page is ready simulate a refresh
$(document).ready(function(){
  $('button').click()
});
