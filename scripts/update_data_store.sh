#!/bin/bash

curl http://www.blogto.com/toronto/ > /var/www/uplaylist.xyz/toronto/scripts/output/data.txt
grep "li.*class=\"\(nonfood\|food\)" /var/www/uplaylist.xyz/toronto/scripts/output/data.txt > /var/www/uplaylist.xyz/toronto/scripts/output/list.txt
sed 's/.*ref=\"\(.*\)\">\(.*\)<\/a.*/\1, \2/' /var/www/uplaylist.xyz/toronto/scripts/output/list.txt > /var/www/uplaylist.xyz/toronto/scripts/output/list.csv

echo "data updated"
