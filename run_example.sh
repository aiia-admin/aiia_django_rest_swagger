#!/bin/bash
docker build -t aiia_django_rest_swagger-example .
docker run --rm -p 8000:8000 -v $(pwd):/code -ti aiia_django_rest_swagger-example
