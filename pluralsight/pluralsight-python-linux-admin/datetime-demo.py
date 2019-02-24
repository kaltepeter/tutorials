#!/usr/bin/env python3
# datetime demo

from datetime import datetime, timedelta
import os
import time

# you an construct a datetime from a POSIX timestamp
rootinfo = os.stat("/")
rootmodtime = datetime.fromtimestamp(rootinfo.st_mtime)
print(rootmodtime)

# this gets us the currect date & time
rightnow = datetime.now()
print(rightnow)

# you can substract wo datetimes to get a timedelta
# here, we calcualate how long ago "/" was last modified
since = rightnow - rootmodtime # yields a timedelta

# a timedelta only provides days and seconds, we 
# have to figure out the hour and minutes from that

print("'/' was modified {} days, {} hours and {} minutes ago".format(
            since.days,
            since.seconds//3600, 
            (since.seconds%3600)//60 ))

# we can do the same thing using POSIX timestamps directly

since = int(time.time() - rootinfo.st_mtime) # seconds
days = since//86400                                       # whole days
hours = (since - days * 86400) // 3600          # whole hours
mins = (since - (hours * 3600) - (days * 86400)) // 60  # whole minutes

print("'/' was modified {} days, {} hours and {} minutes ago".format(
            days, hours, mins))

# you can add a timedelta to a datetime to get a datetime
# in the future (or the past)
# here, we figure out when our library book is due back:

fortnight = timedelta(days=14)
dueback = rightnow + fortnight

print("Your book is due back on {0:%d} of {0:%B}".format(dueback))
