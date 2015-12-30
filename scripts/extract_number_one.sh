#!/bin/bash

website='http://www.blogto.com/'
full_website=$website$1

curl $full_website > /var/www/uplaylist.xyz/toronto/scripts/output/specific_data.txt
extract.py /var/www/uplaylist.xyz/toronto/scripts/output/specific_data.txt | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > /var/www/uplaylist.xyz/toronto/scripts/output/best.txt
