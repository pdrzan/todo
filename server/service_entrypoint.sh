#!/bin/bash

flask db migrate
flask db upgrade
waitress-serve --port 8000 --call 'server:create_app'

tail -f /dev/null
