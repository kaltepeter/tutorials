#!/usr/bin/env python3
import subprocess

threshold = 90      # default threshold (%)
partition = "/"       # default partition

df = subprocess.Popen(["df", "-h"], stdout=subprocess.PIPE)
for line in df.stdout:
    # split into space separated fields
    splitline = line.decode().split()
    # the %full figure is in field 4
    # the mount point in field 5
    if splitline[8] == partition:
        # this is the partition we want to check
        if int(splitline[4][:-1]) > threshold:
            print("WARNING!")