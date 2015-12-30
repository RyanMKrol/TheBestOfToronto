#!/bin/bash

curl http://www.blogto.com/toronto/the_best_guacamole_in_toronto/ > output/specific_data.txt
python3 extract.py output/specific_data.txt | sed 's/.*ref=\"\(.*\)\"><img.*/\1/' > output/best.txt
