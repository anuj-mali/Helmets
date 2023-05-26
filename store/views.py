from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Customer, Admin, Brand, Product, OrderItem
from .serializers import CustomerSerializer, AdminSerializer, BrandSerializer, ProductSerializer
from .paginations import CustomPagination
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
    queryset = Product.objects.select_related('brand').all()
    serializer_class = ProductSerializer

    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['product_name']
    ordering_fields = ['product_name', 'price']

    pagination_class = CustomPagination

    def get_serializer_context(self):
        return {'request': self.request}

    def destroy(self, request, *args, **kwargs):
        if OrderItem.objects.filter(product_id=kwargs['pk']).exists():
            return Response(
                {'error': 'This product is in an order and cannot be deleted'}
            )
        return super().destroy(request, *args, **kwargs)
