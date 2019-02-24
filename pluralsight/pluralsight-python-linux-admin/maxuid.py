#!/usr/bin/env python3
maxuid = 0
for line in open("/etc/passwd"):
    split = line.split(":")
    if len(split) > 1:
        if int(split[2]) > maxuid:
            maxuid = int(split[2])

print(maxuid)