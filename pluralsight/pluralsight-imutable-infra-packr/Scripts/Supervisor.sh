#!/bin/bash -e

sudo apt-get install supervisor
sudo cp /tmp/app-supervisor.conf /etc/supervisor/conf.d
sudo cp /tmp/app /usr/local/bin/app
sudo supervisorctl reread
sudo supervisorctl update
