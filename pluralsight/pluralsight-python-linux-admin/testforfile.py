#!/usr/bin/env python3
import os.path

if os.path.exists("/etc/hosts"):
    print("hosts file exists")
else:
    print("no hosts file")

# pythonic way
try:
    f = open("/etc/hosts")
    # go ahead and read file
except FileNotFoundError:
    print("no hosts file")