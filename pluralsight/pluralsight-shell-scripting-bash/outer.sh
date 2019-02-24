#!/bin/bash

# declare var="outer"
# echo "outer before: $var"
# inner.sh
# echo "outer after: $var"

declare -xr var="outer"
echo "outer before: $var"
inner.sh
echo "outer after: $var"
# cd /
var=test # errors, readonly