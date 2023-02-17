from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('backend.app.user.api.urls')),
    path('', include('backend.app.video.api.urls')),
    path(r'auth/', obtain_auth_token),
]
