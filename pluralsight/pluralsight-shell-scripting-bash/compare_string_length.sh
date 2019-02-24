#!/bin/bash

# compare length of two strings
# Author: reindert

# check number of arguments
if [[ $# -ne 2 ]]; then
    echo "Need exactly two arguments"
    exit 1
fi

length_1="${#1}"
length_2="${#2}"

# Which has the most files?
if [[ $length_1 -gt $length_2 ]]; then
    echo "${1} is longest"
elif [[ $length_1 -eq $length_2 ]]; then
    echo "length is equal"
else
    echo "${2} is longest"
fi

exit 0