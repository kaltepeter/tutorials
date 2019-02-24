#!/bin/bash

# This script prints a range of numbers
# Useage: count [-r] [-b n] [-s n] stop
# -b gives the number to begin with (default: 0)
# -r reverses the count
# -s sets step size (default: 1)
# counting will stop at stop

declare reverse=""
declare -i begin=0
declare -i step=1

while getopts "b:s:r" opt; do
    case $opt in
        r)
            reverse="yes"
            ;;
        b)
            [[ ${OPTARG} =~ ^[0-9]+$ ]] || { echo "${OPTARG} is not a number" >&2; exit 1; }
            start="${OPTARG}"
            ;;
        s)
            [[ ${OPTARG} =~ ^[0-9]+$ ]] || { echo "${OPTARG} is not a number" >&2; exit 1; }
            step="${OPTARG}"
            ;;
        \?)
            exit 1
            ;;
    esac
done

shift $(( OPTIND -1 ))

[[ $1 ]] || { echo "missing an argument" >&2; exit 1; }
declare end="$1"

if [[ ! $reverse ]]; then
    for (( i=start; i <= end; i+=step )); do
        echo $i
    done
else
    for (( i=end; i >= start; i-=step )); do
        echo $i
    done
fi

exit 0
