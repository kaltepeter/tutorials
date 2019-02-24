#!/bin/bash
printf "hello"
printf "hello\n"
printf "hello %s, how are you?\n" $USER
printf "p%st\n" a e i o u
printf "%ss home is in %s\n" $USER $HOME
printf "|%20s |%20s |%20s |\n" $(ls)
printf -v greeting "hello %s, how are you?\n" $USER
echo $greeting