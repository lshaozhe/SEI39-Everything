from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    # path('seedone/', views.SeedOneProduct.as_view(), name='seed_one_products'),
    # path('seedmany/', views.SeedManyProducts.as_view(), name='seed_many_products'),
]
