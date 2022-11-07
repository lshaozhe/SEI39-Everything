from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('getoneproduct/<int:product_id>', views.GetOneProduct.as_view(), name='get_one_product'),
    # path('seedmany/', views.SeedManyProducts.as_view(), name='seed_many_products'),
]
