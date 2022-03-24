from django.urls import path
from . import views

urlpatterns=[
    path('',views.MyRoutes.as_view(),name="routes"),
    path('products/',views.ProductsView.as_view(),name="products"),
    path('products/<str:pk>',views.ProductsView.as_view(),name="product"),
]