#!/bin/bash

usage() {
    cat <<END
count [-r] [-b n] [-s n] stop

Print each number up to stop. beginning at 0
    -b: number to begin with (default: 0)
    -h: show this help message
    -r: reverses the count
    -s: sets stop size (default: 1)
END
}

# function to handle errors.
# First argument: error message to print
# Second argument: exit code to exit script with
error () {
    echo "Error: $1"
    usage
    exit $2
} >&2

# function returns 0 when it's argument is a number
# isnum () {
#     [[ $1 =~ ^[0-9]+$ ]] 
# }
isnum () {
    declare -r num_re='^[0-9]+$'
    declare -r octal_re='^0(.+)'
    num_error="ok"
    if [[ $1 =~ $num_re ]]; then
        if [[ $1 =~ $octal_re ]]; then
            num_error="$1 is not a number, did you mean ${BASH_REMATCH[1]}?"
            return 1
        fi
    else
        num_error="$1 is not a number"
        return 1
    fi
    return 0
}

declare reverse=""
declare -i begin=0
declare -i step=1

while getopts ":hb:s:r" opt; do
    case $opt in
        r)
            reverse="yes"
            ;;
        b)
            isnum ${OPTARG} || error "${OPTARG} is not a number" 1
            start="${OPTARG}"
            ;;
        h)
            usage
            exit 0
            ;;
        s)
            isnum ${OPTARG} || error "${OPTARG} is not a number" 1
            step="${OPTARG}"
            ;;
        :)
            error "Option -${OPTARG} is missing an argument" 2
            ;;
        \?)
            error "unkown option: -${OPTARG}" 3
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
