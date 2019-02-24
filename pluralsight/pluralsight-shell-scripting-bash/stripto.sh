#!/bin/bash

# prints standard input to standard output
# discarding all lines before the first line matching
# the string given as the first argument

if [[ ! $1 ]]; then
    echo "Need first argument" >&2
    exit 1
fi

# version 1
# read upto first match
# while read -r || [[ $REPLY ]]; do
#     if [[ $REPLY =~ $1 ]]; then
#         echo "$REPLY"
#         break
#     fi
# done

# # just print the rest of the file
# while read -r || [[ $REPLY ]]; do
#     echo "$REPLY"
# done

# version 2
found=""

# read upto first match
while read -r || [[ $REPLY ]]; do
    if [[ ! $found ]]; then
        if [[ $REPLY =~ $1 ]]; then
            found="yep"
        else
            continue
        fi
    fi
    echo "$REPLY"
done

exit 0

# example
# ./stripto.sh body < webpage.html