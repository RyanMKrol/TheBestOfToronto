#!/bin/bash

curl http://www.blogto.com/toronto/ > data.txt
grep "li.*class=\"\(nonfood\|food\)" data.txt
