#!/usr/bin/env python3
# this example is about re-writing URLs. It assumes we are moving a series
# of web sites formt eh domain oldplace.com to the domain newplace.org and
# need to update a document containing a list of URLs.

import re

urls = \
'''The report is <a href = https://docs.oldplace.com/chris/report> here </a>
Access your mailbox <a href = http://mail.oldplace.com/mailbox?id=5432"> here </a>
The full events list is at http://events.oldplace.com/index.html'''

regex = r"(https?)://(\w+)\.oldplace\.com/(\S+)"
newurls = re.sub(regex, r"\1://\2.newplace.org/\3", urls)
print(re.findall(regex, urls)) # debu only
print(newurls)