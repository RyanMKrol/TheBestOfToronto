<?php

  // where the data is stored
  $dir = './../scripts/output/data_store/small_data';

  // gets all the files in the directory
  $files = glob($dir . '/*.*');

  //gets a random index
  $file = array_rand($files);

  //gets the lines in a random file
  $lines = file($files[$file]);

  // gets the title from the file name
  $title = explode("data/", $files[$file])[1];
  $title = explode(".min", $title)[0];

  //builds up the json array
  $json_array = array('title' => $title, 'first' => $lines[0], 'second' => $lines[1], 'third' => $lines[2]);

  //returns json object
  echo json_encode($json_array);

?>
