#!/bin/bash -e
echo "***** Starting NGINX configuration"
sudo sed -i 's/~~REPLACEME~~/'$AUTH_HEADER'/' /tmp/nginx.conf
sudo cp /tmp/nginx.conf /etc/nginx/sites-enabled/default
sudo service nginx reload
