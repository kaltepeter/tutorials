#!/usr/bin/env python3
# demonstrate piping out of a child process
from subprocess import Popen, PIPE
lister = Popen(["ls", "-l"], stdout=PIPE)

for bytes in lister.stdout:
    line = bytes.decode()
    if line.startswith("total"):
        continue
    splitline = line.split()
    if int(splitline[4]) > 10000:
        print(splitline[8])