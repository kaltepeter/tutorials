#!/usr/bin/env bash
factorial()
{
    fac=1
    for (( n = $1; n > 0; n-- ))
    do
        (( fac = fac * n ))
    done
    echo $fac
}

fac5=$(factorial 5)
echo factorial 5 is $fac5