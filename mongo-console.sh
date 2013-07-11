#!/bin/bash
$(cat .env | sed -E 's|.*//([^:]*):([^@]*)@(.*)|mongo -u \1 -p \2 \3|')