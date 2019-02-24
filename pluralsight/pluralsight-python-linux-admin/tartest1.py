#!/usr/bin/env python3
import tarfile
import sys

if len(sys.argv) < 2:
    list = ["."]
else:
    list = sys.argv[1:]

with tarfile.open("/tmp/test1.tar", "w") as t:
    for file in list:
        t.add(file)