#!/bin/bash

if [[ $1 == "-l" ]]; then
    exec >logfile
fi

declare -i i=0
while true; do
    echo "still here $((++i))"
    sleep 1
done

# run with
# kill ctrl+c
# ./stillhere.sh 

# will output pid, kill -9 pid to stop
# nohup ./stillhere.sh > log &
# tail log

# run with -l to write to logfile
# nohup ./stillhere.sh -t