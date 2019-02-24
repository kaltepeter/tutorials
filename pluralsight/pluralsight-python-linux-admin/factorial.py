#!/usr/bin/env python3
def factorial(n):
    fac = 1
    for x in range(1, n+1):
        fac = fac * x
    return fac

print(factorial(5))
