#!/bin/bash

p="4+5"
echo $p

declare -i p
p="4+5"
echo $p

p=test
echo $p

let n=100/2
echo $n

let x=200
((++x))
echo $x

((p=x / 100))
echo $p

(( p= $(ls | wc -l) * 10 )) # equivelent to let
echo $p

declare -i num
num="30 % 8"

echo "part 2"
declare -i x
x=100/2
echo $x

$((++x)) # command not found 
((++x))
echo $x

(( 0 )) || echo "false" # is false because 0
# numbers with leading 0 are octal

# 010 = 8