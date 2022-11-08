from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    # path('createone/', views.SeedOneProduct.as_view(), name='create_one_products'),
    # path('createmany/', views.SeedManyProducts.as_view(), name='create_many_products'),
    path('product/create/', views.CreateOneProduct.as_view(), name='create_one_product'),
    path('product/update/<int:product_id>', views.UpdateOneProduct.as_view(), name='update_one_product'),
]

