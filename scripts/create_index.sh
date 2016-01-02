#!/bin/bash

#root website url
website='http://www.blogto.com/toronto/'

#gets the raw website with the list of activities
curl $website > data_store/raw_index.txt

#gets each of the links and names of activities
grep "class=\"\(food\|nonfood\)" data_store/raw_index.txt | sed 's/.*href=\"\(.*\)\">\(.*\)<\/a>.*/\1, \2/' > data_store/index.csv
