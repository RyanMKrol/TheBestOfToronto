<?php

  include 'api_credentials.php';

  $base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  $toronto_geoloc = "location=43.7184038,-79.5181429";
  $name = "&keyword=".$_GET["place"];
  $toronto_radius = "&radius=22500";

  $api_url = $base_url . $toronto_geoloc . $toronto_radius . $name . $key;
  // echo phpversion();
  $curl = curl_init($api_url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $curl_response = curl_exec($curl);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. Additioanl info: ' . var_export($info));
  } else {
    echo $curl_response;
  }
?>
