#!/bin/bash

curl http://www.blogto.com/toronto/ > output/data.txt
grep "li.*class=\"\(nonfood\|food\)" output/data.txt > output/list.txt
sed 's/.*ref=\"\(.*\)\">\(.*\)<\/a.*/\1, \2/' output/list.txt > output/list.csv

