#!/bin/bash

python manage.py collectstatic --no-input
python manage.py migrate --noinput

waitress-serve --port=$PORT platformdemo_1_0_10_39527.wsgi:application
