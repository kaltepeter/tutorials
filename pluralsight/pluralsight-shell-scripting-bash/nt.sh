#!/bin/bash

# Simple note-taking script
# Author: reindert

# echo $1 >> ./notes.txt
# echo $* >> ./notes.txt

# get the date
declare -r date=$(date)

# get the topic
declare -r topic="$1"

# determine where to save our notes
# declare notesdir="${HOME}"
# [[ $NOTESDIR ]] && notesdir="${NOTESDIR}"
# parameter expansion version
declare notesdir=${NOTESDIR:-$HOME}

if [[ ! -d $notesdir ]]; then
    mkdir -- "${notesdir}" 2> /dev/null || { echo "Cannot make directory ${notesdir}" 1>&2; exit 1; }
fi

# filename to write to
declare -r filename="${notesdir}/${topic}notes.txt"

# Does file exist? If not, create it
if [[ ! -f $filename ]]; then
    touch -- "${filename}" 2> /dev/null || { echo "Cannot create file ${filename}" 1>&2; exit 1; }
fi

# Is file writeable?
[[ -w $filename ]] || { echo "${filename} is not writable" 1>&2; exit 1; }

# Ask user for input
read -p "Your note: " note

if [[ $note ]]; then
    echo "$date: $note" >> "$filename"
    echo "Note '$note' saved to $filename" 1>&2
else
    echo "No input; note wasn't saved." 1>&2
    exit 2
fi

# add to path to allow execution globally with full path to notes.txt

