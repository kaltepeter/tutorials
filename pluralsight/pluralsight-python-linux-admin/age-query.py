#!/usr/bin/env python3
while True:
    age = input("Enter your age: ")
    if age.isdecimal():
        break
    print("age should be an integer, try again!")

print(age)