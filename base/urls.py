from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('expenses/', views.getExpenses, name="expenses"),
    path('expenses/<str:pk>', views.getExpense, name="expense"),
    path('expenses/create', views.createExpense, name="create-expense")
]