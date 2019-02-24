#!/usr/bin/env python3
#  program to find prime numbers
# intended for demonstrating signals

from time import sleep

def isprime(n):
    sleep(0.1)
    x = 2
    while (x * x ) <= n:
        if not n % x:
            return False
        x += 1
    return True

n = 1
primes_list = []
while True:
    if isprime(n):
        print("%d is prime" % n)
        primes_list.append(n)
    n += 1