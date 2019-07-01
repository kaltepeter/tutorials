#!/usr/bin/env bash
set -o errexit
set -o pipefail
set -o nounset
[[ ${DEBUG:-} == true ]] && set -o xtrace

heroku config:set MAPBOX_API_KEY="${MAPBOX_API_KEY}"
heroku config:set DARKSKY_API_KEY="${DARKSKY_API_KEY}"

cd ../../.. && \
git subtree push --prefix udemy/complete-nodejs-dev/web-server heroku master && \
cd udemy/complete-nodejs-dev/web-server