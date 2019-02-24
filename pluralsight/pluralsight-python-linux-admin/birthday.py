#!/usr/bin/env python3
# parsing a date (what day were you born on?)
from datetime import datetime

line = input("Enter your date of birth (DD/MM/YYYY): ")
birthday = datetime.strptime(line, "%d/%m/%Y")
print("You were born on a {0:%A}".format(birthday))