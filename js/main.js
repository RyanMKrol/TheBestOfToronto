var base_link = 'http://www.blogto.com';

$('button').click(function(){
  $.getJSON( "php/update_data.php", function( json ) {
    var link = base_link + json.url;
    $('#activity_title').html(json.title);
    $('#activity_link').attr('href', link);
   });
});

$(document).ready(function(){
  $('button').click()
});
