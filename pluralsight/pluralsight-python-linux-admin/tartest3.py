#!/usr/bin/env python3
import os
import tarfile
import sys

# add file f to archive t
def add_to_archive(f, t):
    try:
        t.add(f)
    except PermissionError as e:
        print("sorrry %s " % e, file=sys.stderr)

if len(sys.argv) < 2:
    list = ["."]
else:
    list = sys.argv[1:]

with tarfile.open("/tmp/test3.tar", "w") as t:
    for file in list:
        if os.path.isdir(file):
            for root, dirs, files in os.walk(file):
                for name in files:
                    add_to_archive(root + "/" + name, t)
        else:
            add_to_archive(file, t)