from . import views
from django.urls import path


urlpatterns = [
    path('create-user/', views.AccountCreate.as_view(), name='create-user'),
]
