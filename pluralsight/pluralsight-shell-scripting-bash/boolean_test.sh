#!/bin/bash

declare build_image=false

while getopts "b" opt; do
    case $opt in
        b)
            build_image=true
            ;;
        \?)
            exit 1
            ;;
    esac
done

# works
if $build_image ; then
    echo "build_image is: $build_image" # when true
else
    echo "else build_image is: $build_image" # when false
fi

# works
if ! $build_image ; then
    echo "not build image: $build_image" # when false
else
    echo "else not build image: $build_image" # when true
fi

# does not work always hits first condition
if [[ $build_image ]]; then
    echo "[[ build_image ]] is: $build_image"
else
    echo "else [[ build_image ]] is: $build_image"
fi

# does not work, always hits &&
[[ $build_image ]] || { echo "[[ build_image ]] || is: $build_image"; }
[[ $build_image ]] && { echo "[[ build_image ]] && is: $build_image"; }

# does not work, always hits ||
[[ ! $build_image ]] || { echo "[[ ! build_image ]] || is: $build_image"; }
[[ ! $build_image ]] && { echo "[[ ! build_image ]] && is: $build_image"; }

# works
$build_image || { echo "build_image || is: $build_image"; } # when false
$build_image && { echo "build_image && is: $build_image"; } # when true

# works
! $build_image || { echo "! build_image || is: $build_image"; } # when true
! $build_image && { echo "! build_image && is: $build_image"; } # when false

exit 0;