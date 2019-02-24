#!/bin/bash

# Attempts to count the lines of output of any given command
declare -i count=0

count_lines() {
    while read -r; do
        ((++count))
    done
    echo $count
}

$* | count_lines # | runs in subshell, so vars not available
echo $count