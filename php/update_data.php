<?php

  //updates the data in the files by fetching everything
  //need to do this on the server in the background
  // exec ( 'sh ./../scripts/script.sh' );

  //the location of the data
  $file = './../scripts/output/list.csv';

  //converting the file to an array of strings
  $lines = file($file);

  //getting a random index into that file
  $random_index = rand(0,count($lines));
  $random_entry = $lines[$random_index];

  //converting the line to an array, and then a dictionary for json encoding
  $line = explode(", ", $random_entry);

  $command = "sh ./../scripts/extract_number_one.sh $line[0]";
  system ($command);

  // //the location of the data
  $file = '/var/www/uplaylist.xyz/toronto/scripts/output/best.txt';
  // //converting the file to an array of strings
  $best = file($file);

  $json_array = array('url' => $best[0], 'title' => $line[1]);
  //returning json object
  echo json_encode($json_array);
?>
