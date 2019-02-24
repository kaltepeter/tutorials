#!/bin/bash
for a in $@; do
    echo $a;
done

echo ''

for a in $*; do
    echo $a;
done

echo ''

for a in "$@"; do
    echo $a;
done

echo ''

for a in "$*"; do
    echo $a;
done

# almost always want "$@"