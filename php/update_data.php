<?php

  //updates the data in the files by fetching everything
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

  //so this updates the webpage for the category
  // $curl_command_thing = "curl 'http://www.blogto.com$line[0]' > /var/www/uplaylist.xyz/toronto/scripts/output/specific_data.txt";
  // exec($curl_command_thing);
  echo $line[0];

  $command = "sh ./../scripts/extract_number_one.sh $line[0]";
  echo "\r\n";

  echo $command;
  system ($command);

  //updates the data in the files by fetching everything
  // system ($command);
  //
  // //the location of the data
  // $second_file = '/var/www/uplaylist.xyz/toronto/scripts/output/best.txt';
  // //converting the file to an array of strings
  // $best = file($second_file);
  // echo $best[0];
  echo "\r\n";

  // $json_array = array('url' => $best[0], 'title' => $line[1]);
  // echo $json_array;
  // echo "\r\n";
  // //returning json object
  // echo json_encode($json_array);
  // echo "\r\n";
?>
