#!/bin/bash

#root website url
website='http://www.blogto.com'

#goes through the lines a file to get all of the activities
while read p; do

  #get the url
  url=$(echo "$p" | sed 's/\(.*\)\/,.*/\1/');

  #get the title
  title=$(echo "$p" | sed 's/.*\/, \(.*\)/\1/');

  #full website url used for curl
  full_website="$website$url/";

  #stores the raw data from the page
  raw_data_file_name="/var/www/thebestoftoronto.co/scripts/data_store/big_data/$title.txt";

  #gets the raw data for the page
  curl "$full_website" > "$raw_data_file_name";

done < data_store/index.csv

