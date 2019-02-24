#!/usr/bin/env python3
# demonstration of reading a binary file (planets)

import struct

record_size = 40 # No. of bytes in a planet record

# just read the fifth record
with open("planets.dat", "rb") as file:
    file.seek(4 * record_size)
    content = file.read(record_size)

    pos, name, moons, mass = struct.unpack("@120sid", content)
    name = name.decode().rstrip("\0")

    print("%d: %8s: %2d moons, mass = %6.2f" % (pos, name, moons, mass))

# loop over all records
with open("planets.dat", "rb") as file:
    content = file.read()
    for pos, name, moons, mass in struct.iter_unpack("@120sid", content):
        name = name.decode().rstrip("\0")
        print("%d: %8s: %2d moons, mass = %6.2f" % (pos, name, moons, mass))
