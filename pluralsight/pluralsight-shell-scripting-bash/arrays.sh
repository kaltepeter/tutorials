#!/bin/bash

ar=(this is an array)
declare -p ar

echo ${ar[2]}

ar[15]=something
declare -p ar

echo ${#ar[@]} # length of array

echo ${!ar[@]} # indices of array
