#!/bin/bash

[[ hello = h*o ]] && echo yep1

[[ hello = "h*o" ]] && echo yep2

[[ "h*o" = "h*o" ]] && echo yep3

[ hello = h*o ] && echo yep4