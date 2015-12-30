$('button').click(function(){
  $.getJSON( "php/update_data.php", function( json ) {
    $('#activity_title').html(json.title);
   });
});

$(document).ready(function(){
  $('button').click()
});
