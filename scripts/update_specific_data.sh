#!/bin/bash

#this will now go through deleting files that don't fit the format

for d in data_store/big_data/* ; do

  #sets up the directory for the activity
  directory="data_store/small_data/$(echo $d | sed 's/.*\/\(.*\).txt/\1/')"
  mkdir "$directory"

  number_one_file_name="$directory/$(grep "Number_1\"" "$d" | sed 's/.*name\">\(.*\)<\/a.*/\1/')"
  grep "Number_1\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > $number_one_file_name
  var=$(grep "Number_1\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/')
  grep "href=\"$var\" class=\"read" "$d" | sed 's/\t*\([^\t]*\).*/\1/' >> $number_one_file_name
  #grep "href=\"$var\" class=\"read" "$d" >> $number_one_file_name

  number_two_file_name="$directory/$(grep "Number_2\"" "$d" | sed 's/.*name\">\(.*\)<\/a.*/\1/')"
  grep "Number_2\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > $number_two_file_name
  var=$(grep "Number_2\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/')
  grep "href=\"$var\" class=\"read" "$d" | sed 's/\t*\([^\t]*\).*/\1/' >> $number_two_file_name
  #grep "href=\"$var\" class=\"read" "$d" >> $number_two_file_name

  number_three_file_name="$directory/$(grep "Number_3\"" "$d" | sed 's/.*name\">\(.*\)<\/a.*/\1/')"
  grep "Number_3\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > $number_three_file_name
  var=$(grep "Number_3\"" "$d" | sed 's/.*ref=\"\(.*\)\"><img.*/\1/')
  grep "href=\"$var\" class=\"read" "$d" | sed 's/\t*\([^\t]*\).*/\1/' >> $number_three_file_name
  #grep "href=\"$var\" class=\"read" "$d" >> $number_three_file_name

done

rmdir data_store/small_data/*
