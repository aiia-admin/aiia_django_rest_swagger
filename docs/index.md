# Django REST Swagger
Swagger/OpenAPI Documentation Generator for Django REST Framework

<iframe src="https://ghbtns.com/github-btn.html?user=marcgibbons&repo=django-rest-swagger&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>

---

**Note:** you are viewing documentation for version 2, using Django REST Framework 3.5+ and CoreAPI. Documentation for previous versions is available [here](http://django-rest-swagger.readthedocs.io/en/stable-0.3.x/).

---

## Installation

`$ pip install django-rest-swagger`


Add `'django_rest_swagger'` to `INSTALLED_APPS` in Django settings.

**settings.py**
```python
INSTALLED_APPS = [
    ...
    'django_rest_swagger',
    ...
]
```

## Quick start

To quickly get started, use the `get_swagger_view` shortcut. This will produce
a schema view which uses common settings. For more advanced usage, please see
the schemas section.

#### Example

**urls.py**
```python
from django.conf.urls import url
from django_rest_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'^$', schema_view)
]
```

#### View in the browser
![Screenshot](/img/ui-screenshot.png)


## Example app
An example based on the [Django REST Tutorial](http://www.django-rest-framework.org/tutorial/1-serialization/) ships with the project. It can be deployed locally using Docker, or on heroku (for free).

Log in credentials are:
```
username: amy
password: amy
```

### Docker Instructions

Ensure [Docker](https://www.docker.com/) is installed on your system.

First, clone the repository:

`$ git clone https://github.com/aiia-admin/django-rest-swagger`

To quickly get up and running using the Docker image, simply run:

`$ ./run_example.sh`

The initial run may take several minutes to build. Once complete, the
application will be available at `http://localhost:8000`

Log in credentials are:
```
username: amy
password: amy
```

## Changes in 3.0
Version 3.0 support new django versions

New:

- support Django 3+

## License
L
