<?php

  $base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  $toronto_geoloc = "location=43.7184038,-79.5181429";
  $name = "&name=";
  $key = "&key=AIzaSyDC4tolvRDiw-lwZO9xCnGFs6kpAAy5ptQ";
  $toronto_radius = "&radius=22500";

  $api_url = $base_url.$toronto_geoloc.$name.$key;
  echo &api_url;

  //next example will recieve all messages for specific conversation
  // $service_url = 'http://example.com/api/conversations/[CONV_CODE]/messages&apikey=[API_KEY]';
  //
  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?
  // location=43.7184038,-79.5181429
  // &radius=22500&name=
  // rouge+park
  // &key=AIzaSyDC4tolvRDiw-lwZO9xCnGFs6kpAAy5ptQ
  //
  // $curl = curl_init($service_url);
  // curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  // $curl_response = curl_exec($curl);
  // if ($curl_response === false) {
  //   $info = curl_getinfo($curl);
  //   curl_close($curl);
  //   die('error occured during curl exec. Additioanl info: ' . var_export($info));
  // }
  // curl_close($curl);
  // $decoded = json_decode($curl_response);
  // if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
  //   die('error occured: ' . $decoded->response->errormessage);
  // }
  // echo 'response ok!';
  // var_export($decoded->response);
?>
