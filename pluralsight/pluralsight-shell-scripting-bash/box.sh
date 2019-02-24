#!/bin/bash

# A function to draw a line
drawline () {
    declare line=""
    declare char="-"
    for (( i=0; i<$1; ++i )); do
        line="${line}${char}"
    done
    printf "%s\n" "$line"
}

# no arguments? no output
[[ ! $1 ]] && exit 0

declare -i len="${#1} + 4"
drawline len
printf "| %s |\n" "$1"
drawline len