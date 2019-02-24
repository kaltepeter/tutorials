#!/usr/bin/env python3
import pwd
import os

uidset = set()
# for line in open('/etc/passwd'):
#    split = line.split(':')
#    uidset.add(int(split[2]))    

for user in pwd.getpwall():
    uidset.add(user.pw_uid)

testdir = "/Users/kaltepe/food"
for folder, dirs, files in os.walk(testdir):
    for file in files:
        path = folder + "/" + file

        # if os.path.islink(path):
        #     print(path + " is a symlink ... skipping")
        #     continue

        try:
            attributes = os.stat(path)
        except FileNotFoundError:
            print(path + " not found")
            continue

        if attributes.st_uid not in uidset:
            print(path + "has no owner")
