#!/bin/sh

jade -P index.jade
coffee -c -o ./js ./coffee