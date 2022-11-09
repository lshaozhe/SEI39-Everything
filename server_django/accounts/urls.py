from rest_framework_simplejwt.views import TokenRefreshView
from . import views
from django.urls import path


urlpatterns = [
    path('create/', views.AccountCreate.as_view(), name='create-user'),
    path('login/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jwt-details/', views.JWTDetails.as_view(), name='jwt-details'),
]
