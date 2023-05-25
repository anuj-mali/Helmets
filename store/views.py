from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from .models import Customer, Admin, Brand, Product
from .serializers import CustomerSerializer, AdminSerializer, BrandSerializer, ProductSerializer
# Create your views here.


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class AdminViewSet(ReadOnlyModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer


class BrandViewSet(ReadOnlyModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
