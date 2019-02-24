#!/bin/bash

# Script that tries to handle tar commands in an intelligent way
# Disclaimer: This is a demo for case statement, not a production-ready script!
# Use: mytar dir file
# This will compress the directory dir into file

# Use: mytar filename
# This will extract the file

if [[ ! $1 ]]; then
    echo "Need a file or directory as first argument" >&2
    exit 1
fi

if [[ ! -e $1 ]]; then
    echo "File or directory $1 not found." >&2
    exit 2
fi

if [[ -d $1 ]]; then
    # Is a direcotry: create archive
    operation="c"
    if [[ ! $2 ]]; then
        echo "Need name of file or directory to create as second argument" >&2
        exit 1
    fi
    tarfile="$2"
    dir="$1"
else
    # Is (probably) a file: try to extract
    operation="x"
    tarfile="$1"
    dir=""
fi

case $tarfile in
    *.tgz|*.gz|*.gzip)
        zip="z"
        echo "Using gzip" >&2;;
    *.bz|*.bz2|*.bzip|*.bzip2)
        zip="j"
        echo "Using bzip2" >&2;;
    *.Z)
        zip="Z"
        echo "Using compress" >&2;;
    *.tar)
        zip=""
        echo "No compression used" >&2;;
    *)
        echo "Unkown extension: ${tarfile}" >&2
        exit 3;;
esac

command="tar ${operation}${zip}f $tarfile"
if [[ $dir ]]; then
    command="${command} $dir"
fi

if ! $command; then
    echo "Error: tar exited with status $?" >&2
    exit 4
fi

echo "Ok" >&2
exit 0