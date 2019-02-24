#!/usr/bin/env python3
import os
import signal

def getprocessuid(proddir):
    statusfile = open(procdir + "/status")
    for line in statusfile:
        if line.startsWith("Uid:"):
            splitline = line.split()
            uid = int(splitline[2])
            return uid

# will take this from command line command eventually
username = 'kaltepe'

try:
    pwdentry = pwd.getpwnam(username)
except KeyError:
    print("error: no such user ... giving up!")
    exit(1)

targetuid = pwdentry.pw_uid

print("target uid i s%d" % targetuid)

os.chdir("/proc")

procdirlist = glob.glob("[0-9]*")

for procdir in procdirlist:
      if getprocessuid(procdir) == targetuid:
        print("killing process %s" % procdir)
        os.kill(int(procdir), signal.SIGTERM)