#!/bin/bash

sum() {
    return $(( $1 + $2 ))
}

sum 4 5
echo $?

sum() {
    echo $(( $1 + $2 ))
}

sum 6 2

echo $(sum 2 8)

# starts_with_a () {
#     [[ $1 == [aA]* ]];
#     return $?
# }

# same as above
starts_with_a () {
    [[ $1 == [aA]* ]];
}

if starts_with_a ax; then
    echo "yup"
else
    echo "nope"
fi