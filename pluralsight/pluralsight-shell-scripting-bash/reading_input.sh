#!/bin/bash
# read; echo $REPLY

echo -n "enter something: "
read -r; echo $REPLY

echo -n "enter two somethings: "
read -r a b; echo $a $b

echo -n "enter two somethings again: "
IFS=: read -r a b; echo $a $b