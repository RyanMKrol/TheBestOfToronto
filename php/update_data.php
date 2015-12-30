<?php
  //updates the data in the files by fetching everything
  exec ( 'sh ./../scripts/script.sh' );

  //the location of the data
  $file = './../scripts/output/list.csv';

  //converting the file to an array of strings
  $lines = file($file);

  //getting a random index into that file
  $random_index = rand(0,count($lines));

  //printing out the line
  echo $lines[$random_index];
?>
