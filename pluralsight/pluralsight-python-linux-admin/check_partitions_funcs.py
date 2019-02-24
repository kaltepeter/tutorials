# supporting functions for df wrapper
import subprocess
import smtplib
from email.mime.text import MIMEText

def report_via_email(message, recipient):
    msg = MIMEText(message)
    msg["Subject"] = "Low Disk Space Warning"
    msg["From"] = "fred@thatplace.com"
    msg["To"] = recipient
    with smtplib.SMTP("smtp.somewhere.com") as t:
        t.login("henryhiggins", "A5=jf57%4")
        t.sendmail("fred@thatplace.com", recipient, msg.as_string())

def report_via_stdout(message):
    print(message)

def check_once(options, partition_list):
    proc = subprocess.Popen(["df", "-h"], stdout=subprocess.PIPE)
    for line in proc.stdout:
        #  split into space-sparated fields
        splitline = line.decode().split()
        #  the %full figure is in field 4. the mount point in field 5
        for partition in partition_list:
            if splitline[8] == partition:
                #  this is a partition we want to check
                percent = int(splitline[4][:-1]) # slice off trailing "%"
                if percent > options.threshold:
                    message = "WARNING: partition %s is %d%% full" % (partition, percent)
                    if options.mailbox:
                        try:
                            report_via_email(message, options.mailbox)
                        except Exception as e:
                            print(e)
                    else:
                        report_via_stdout(message)