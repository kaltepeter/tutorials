#!/usr/bin/env python3
import hashlib
import os

def gethash(file):
    hasher = hashlib.md5()
    with open(file, "rb") as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()

# start with empty dictonary
hashmap = {}

for rootdir, dirs, files in os.walk("/data"):
    for f in files:
        path = os.path.join(rootdir, f)
        #  skip short files and symlinks
        if os.path.islink(path) or os.stat(path).st_size < 1024:
            continue
        hash = gethash(path)
        if hash in hashmap:
            matching = hashmap[hash]
            #  we have found a pair of identifcal files
            # if they are links to the same file there is nothing to do
            if os.stat(path).st_ino == os.stat(matching).st_ino:
                print("%s, %s are links to the same file" % (path, matching))
                continue
            # Othersiwse, delete the new file and link the name to the old one
            else:
                # os.unlink(path)
                # os.link(matching, path)
                print("%s same as %s" % (path, matching))
        else:
            # print("adding %s to hashmap" % path)
            hashmap[hash] = path