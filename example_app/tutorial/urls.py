from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from aiia_django_rest_swagger.views import get_swagger_view
<<<<<<< HEAD

from snippets import views

=======
from example_app.snippets import views
>>>>>>> 2.3.0

router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

schema_view = get_swagger_view(title='Snippets API')

urlpatterns = [
    url('^$', schema_view),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
