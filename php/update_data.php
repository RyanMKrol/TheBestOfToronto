<?php

  // where the data is stored
  $dir = './../scripts/data_store/small_data';

  // the directory holding all the activity directories
  $directory = glob($dir . '/*');

  // gets a random directory from the master directory
  $activity = array_rand($directory);

  // gets all the files associated with an activity
  $activity_files = glob($directory[$activity].'/*');

  $json_objects = array();

  // makes each of the objects associated with each activity
  foreach (glob($directory[$activity].'/*') as $filename) {
    $title = basename($filename);
    $url = file($filename)[0];
    $json_object = array('name' => $title, 'url' => $url);
    array_push($json_objects, $json_object);
  }

  // print out the json array
  echo json_encode($json_objects);

?>
