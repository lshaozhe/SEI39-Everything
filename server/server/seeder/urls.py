from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('seed/', views.SeedProducts.as_view(), name='seed_products'),
]
