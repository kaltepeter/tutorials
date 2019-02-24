#!/bin/bash
ls > demo

cat demo

"$PWD/nt.sh" > demo

cat note1.txt
"$PWD/nt.sh" < note1.txt

cat notes.txt

"$PWD/nt.sh" > demo

cat demo

echo -n "don't enter anything. press enter"
"$PWD/nt.sh" > /dev/null 2>&1
