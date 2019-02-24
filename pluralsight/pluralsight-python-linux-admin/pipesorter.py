#!/usr/bin/env python3

# demonstrate piping into and out of a child process
from subprocess import Popen, PIPE
import random

sorter = Popen(["sort", "-nr"], stdin=PIPE, stdout=PIPE)

# write 10 random integers to the sorters input
for i in range(10):
    sorter.stdin.write(("%d\n" % random.randrange(100)).encode())

# without the close() below, this will hang because the sorter
# will never see EOF on it's standard nput
sorter.stdin.close()    

for line in sorter.stdout:
    print(line.decode(), end=' ')