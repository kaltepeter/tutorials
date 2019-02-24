#!/usr/bin/env python3
import tarfile
import glob

def create_tarfile():
    tfile = tarfile.open("mytarfile.tar", "w")
    for configfile in glob.glob("/etc/*.conf"):
        tfile.add(configfile)
    tfile.close()

create_tarfile()