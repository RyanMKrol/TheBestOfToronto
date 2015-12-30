var base_link = 'http://www.blogto.com';

$('button').click(function(){
  $.get( "php/update_data.php", function( json ) {
    console.log(json);
    // console.log(json.url);
    // console.log(json.title);
    // var link = base_link + json.url;
    // $('#activity_title').html(json.title);
    // $('#activity_link').attr('href', link);
   });
});

$(document).ready(function(){
  $('button').click()
});
