var base_link = 'http://www.blogto.com';
//when you press the refresh button, get new data
$('button').click(function(){

  // get JSON data
  $.getJSON( "php/update_data.php", function( json ) {
    var link = base_link + json.first;
    $('#activity_title').html(json.title);
    $('#activity_link').attr('href', link);
  });
});

// when the page is ready simulate a refresh
$(document).ready(function(){
  $('button').click()
});
