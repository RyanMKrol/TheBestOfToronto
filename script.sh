#!/bin/bash

curl http://www.blogto.com/toronto/ > data.txt
grep "li.*class=\"\(nonfood\|food\)" data.txt
sed 's/.*ref=\"\(.*\)\">\(.*\)<\/a.*/\1, \2/' list.txt > list.csv
