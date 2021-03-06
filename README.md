# Django REST Swagger

[![build-status-badge]][build-status]
[![pypi-version]][pypi]



#### An API documentation generator for Swagger UI and Django REST Framework

Full documentation: http://marcgibbons.github.io/django-rest-swagger/


## Installation

1. `pip install django-rest-swagger`

2. Add `django_rest_swagger` to your `INSTALLED_APPS` setting:

    ```python
   INSTALLED_APPS = [
       ...
       'django_rest_swagger',
   ]
   ```

## Rendering Swagger Specification and Documentation

This package ships with two renderer classes:

1. `OpenAPIRenderer` generates the OpenAPI (fka Swagger) JSON schema specification. This renderer will be presented if:
  -  `Content-Type: application/openapi+json` is specified in the headers.
  - `?format=openapi` is passed as query param
2. `SwaggerUIRenderer` generates the Swagger UI and requires the `OpenAPIRenderer`


### Quick Start Example:
```python
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'^$', schema_view)
]
```

## Requirements
* Django 1.8+
* Django REST framework 3.5.1+
* Python 2.7, 3.5, 3.6, 3.7, 3.8


## Testing

- Run `$ tox` to execute the test suite against all supported environments.
- Run `./runtests.py` to run the test suite within the current environment.

## Bugs & Contributions
Please report bugs by opening an issue

Contributions are welcome and are encouraged!

## Special Thanks
Many thanks to Tom Christie & all the contributors who have developed [Django REST Framework](http://django-rest-framework.org/)

[build-status]: https://travis-ci.org/marcgibbons/django-rest-swagger
[pypi]: https://pypi.python.org/pypi/django-rest-swagger
[license]: https://pypi.python.org/pypi/django-rest-swagger/
[docs-badge]: https://readthedocs.io/projects/django-rest-swagger/badge/
[docs]: http://django-rest-swagger.readthedocs.io/