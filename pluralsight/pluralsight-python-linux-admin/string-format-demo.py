#!/usr/bin/env python3

# demonstration of formatted strings

age = 34
name = "Mary"

print("%s is %d" % (name, age))
print("{0} is {1}".format(name, age))
print("{} is {}".format(name, age))
print("{1} is {0}'s age".format(name, age))

# example of accessing the attributes of an object
import os
file = "/etc"
info = os.stat(file)
print("file {0} uid {1.st_uid}, size {1.st_size}".format(file, info))

# example of specifiying field width and precision
import math
x = 1
for i in range(10):
    x = x * 2
    y = math.sqrt(x)
    print("{0:4}{1:10}{2:10.3f}".format(i, x, y))
    # print("%4d%10d%10.3f" % (i, x, y))

# example of building the format string dynamically
width1 = 4
width2 = 10
width3 = 10
# width1 = int(sys.argv[1])
# width2 = int(sys.argv[2])
# width3 = int(sys.argv[3])
formatter  = "{{0:{0}}}{{1:{1}}}{{2:{2}.3f}}".format(width1, width2, width3)
print(formatter)
print(formatter.format(i, x, y))

#  more direct way
print("{0:{width1}}{1:{width2}}{2:{width3}.3f}".format(i, x, y, width1=4,width2=10,width3=10))