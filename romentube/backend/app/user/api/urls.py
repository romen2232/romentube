from django.urls import path
from backend.app.user.api.view import user_list, user_detail

urlpatterns = [
    path('', user_list, name='user_list'),
    path('<int:pk>/', user_detail, name='user_detail'),
]
