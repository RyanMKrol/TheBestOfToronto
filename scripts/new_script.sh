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
  raw_data_file_name="/var/www/uplaylist.xyz/toronto/scripts/output/data_store/$title.txt";

  #used for just the data that i want to access right now
  file_name="/var/www/uplaylist.xyz/toronto/scripts/output/data_store/$title.min.txt";

  #gets the raw data for the page
  curl "$full_website" > "$raw_data_file_name";

  #get the 1-5 top activities
  grep "Number_1\"" "$raw_data_file_name" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > "$file_name";
  grep "Number_2\"" "$raw_data_file_name" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' >> "$file_name";
  grep "Number_3\"" "$raw_data_file_name" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' >> "$file_name";
  grep "Number_4\"" "$raw_data_file_name" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' >> "$file_name";
  grep "Number_5\"" "$raw_data_file_name" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' >> "$file_name";

done < output/list.csv

#this will now go through deleting files that don't fit the format
for d in output/data_store/small_data/* ; do
  file_data=$(stat --printf="%s" "$d")
  if [ "$file_data" = "0" ]
  then
   rm "$d"
  fi
done
