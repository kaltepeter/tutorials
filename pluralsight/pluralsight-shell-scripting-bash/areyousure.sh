#!/bin/bash

echo -n "Are you sure (Y/N)? "

answered=
while [[ ! $answered ]]; do
    read -r -n 1 -s answer
    if [[ $answer = [Yy] ]]; then
        answered="yes"
    elif [[ $answer = [Nn] ]]; then
        #statements
        answered="no"
    fi
done

printf "\n%s\n" $answered
