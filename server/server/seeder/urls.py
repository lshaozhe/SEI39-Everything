from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('server/', views.seed_products, name='seed_products'),
]
