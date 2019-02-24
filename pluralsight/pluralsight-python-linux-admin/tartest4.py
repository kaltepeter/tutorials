#!/usr/bin/env python3
#  extract only recently modified files (using tarinfo)

import os
import tarfile
import time

os.chdir("/Users/kaltepe/extract-here")

# compute the time one week ago
mintime = time.time() - (7 * 24 * 3600)

with tarfile.open("/tmp/test3.tar", "w") as t:
    for info in t:
        if info.mtime > mintime and info.isfile():
            print("extracting %s" % info.name)
            t.extract(info)