#!/bin/bash

# A simple guessing game

# Get a random number < 100
# target=$(($RANDOM % 100))
# arithmetic version
declare -ir target=$(( ($RANDOM % 100) + 1 ))

# Initialize the user's guess
# guess=
# arithmetic version
declare -i guess=0

# original until version
# until [[ $guess -eq $target ]]; do
#     read -p "Take a guess: " guess
#     if [[ $guess -lt $target ]]; then
#         echo "Higher!"
#     elif [[ $guess -gt $target ]]; then
#         echo "Lower!"
#     else
#         echo "You found it!"
#     fi
# done

# while loop version
# while [[ ! $guess -eq $target ]]; do
#     read -p "Take a guess: " guess
#     if [[ $guess -lt $target ]]; then
#         echo "Higher!"
#     elif [[ $guess -gt $target ]]; then
#         echo "Lower!"
#     else
#         echo "You found it!"
#     fi
# done

# arithmetic version
until (( guess == target )); do
    read -p "Take a guess: " guess

    # if guess is 0, it was not a number
    (( guess )) || continue

    if (( guess < target )); then
        echo "Higher!"
    elif (( guess > target )); then
        echo "Lower!"
    else
        echo "You found it!"
    fi
done

exit 0