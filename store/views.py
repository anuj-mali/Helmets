from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Customer
from .serializers import CustomerSerializer
# Create your views here.


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
