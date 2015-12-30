<?php
  //updates the data in the files by fetching everything
  exec ( 'sh ./../scripts/extract_number_one.sh' );

  //the location of the data
  $file = './../scripts/output/best.txt';

  //converting the file to an array of strings
  $lines = file($file);

  echo $lines[0];
?>
