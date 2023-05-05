from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('about/', views.about, name='token_obtain_pair'),
    path('contact/', views.contact, name='token_obtain_pair'),

    path('register/', views.register), # register

]