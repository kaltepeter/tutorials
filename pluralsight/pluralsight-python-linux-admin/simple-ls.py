#!/usr/bin/env python3
# simple-ls.py

import os

for file in os.listdir("."):
    info = os.stat(file)
    print("%-20s : size %d" % (file, info.st_size))
