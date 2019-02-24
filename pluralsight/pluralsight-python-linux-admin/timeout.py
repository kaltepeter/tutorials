#!/usr/bin/env python3

# timeout using SIGALRM

import sys
from signal import *

def timeout_handler(signum, frame):
    raise IOError("User not responding")

def get_name():
    signal(SIGALRM, timeout_handler)
    alarm(5)
    n = sys.stdin.readline()
    alarm(0)
    return n

print("enter your name: ", end = ' ')
sys.stdout.flush()
try:
    name = get_name()
except IOError:
    print("You did not reply. I will call you 'Sleepy")
    name = "Sleepy"

print("hello " + name)