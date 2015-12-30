<?php
  exec ( 'sh ./../scripts/script.sh' );
  echo file_get_contents('./../scripts/output/list.csv');
?>

