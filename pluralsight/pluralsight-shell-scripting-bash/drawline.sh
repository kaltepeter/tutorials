#!/bin/bash

# Outputs a line of characters
# first argument: length of line
# second argument: character, will default to "=" if none given

if [[ ! $1 ]]; then
    echo "Need line length argument" >&2
    exit 1
fi

# check that first argument is a number
if [[ $1 =~ ^[0-9]+$ ]]; then
    length="$1"
else
    echo "Length has to be a number" >&2
    exit 1
fi

char="="
if [[ $2 ]]; then
    char="$2"
fi

line=
for (( i=0; i<length; ++i )); do
    line="${line}${char}"
done

printf "%s\n" "$line"
exit 0