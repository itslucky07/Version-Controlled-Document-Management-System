from django.urls import path
from .views import fetch_token

urlpatterns = [
    path("token/", fetch_token, name="token"),
]
