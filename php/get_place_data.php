<?php

  // includes credentials i need to use the api
  include 'api_credentials.php';

  // base url for the api
  $base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  // long and lat values for toronto
  $toronto_geoloc = "location=43.7184038,-79.5181429";
  // keyword tends to lead to better results than name
  $keyword = "&keyword=".$_GET["place"];
  // name will be used if keyword fails
  $name = "&name=".$_GET["place"];
  // this radius tends to cover the whole of toronto
  $toronto_radius = "&radius=30000";

  // function used to call the api
  function apiRequest($api_url, $first_request) {
    // initialist the api request
    $curl = curl_init($api_url);

    // returns the api request as a string
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    // execute the api request
    $curl_response = curl_exec($curl);

    // if the curl response is not valid, handle it
    if ($curl_response === false) {
      $info = curl_getinfo($curl);
      curl_close($curl);
      die('error occured during curl exec. Additioanl info: ' . var_export($info));
    } else {
      if (strpos($curl_response,'ZERO_RESULTS') !== false) {
        if($first_request){
          $url = $base_url . $toronto_geoloc . $toronto_radius . $keyword . $name .$key;
          apiRequest($url, false);
        } else {
          echo $curl_response;
        }
      }
      echo $curl_response;
    }
  }

  // building up the api request
  $url = $base_url . $toronto_geoloc . $toronto_radius . $keyword . $key;

  // call the api
  apiRequest($url, true);

?>
