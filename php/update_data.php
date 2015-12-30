<?php
  //updates the data in the files by fetching everything
  exec ( 'sh ./../scripts/script.sh' );

  //the location of the data
  $file = './../scripts/output/list.csv';

  //converting the file to an array of strings
  $lines = file($file);

  //getting a random index into that file
  $random_index = rand(0,count($lines));
  $random_entry = $lines[$random_index];

  //converting the line to an array, and then a dictionary for json encoding
  $line = explode(", ", $random_entry);
  $json_array = array('url' => $line[0], 'title' => $line[1]);

  //returning json object
  echo json_encode($json_array);
?>
