from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_member/', views.add_member, name='add_member'),
    path('update_member/', views.update_member, name='update_member'),
    path('del_member/', views.del_member, name='del_member'),
]