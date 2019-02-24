#!/bin/bash

for i in just a list of words; do echo $i; done
for i in "just a list of words"; do echo $i; done

s="this variable contains a list of words"
for i in "$s"; do echo $i; done