from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.viewsets import GenericViewSet

from rest_framework.filters import SearchFilter, OrderingFilter

from .permissions import IsAdminUserOrReadOnly
from .serializers import CustomerSerializer, BrandSerializer, ProductSerializer, CartItemSerializer, UpdateCartItemSerializer, AddCartItemSerializer, GetProductSerializer, CartSerializer
from .models import Customer, Brand, Product, CartItem, Cart, OrderItem
from .paginations import CustomPagination


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAdminUser]

    @action(detail=False, methods=['GET', 'PUT'], permission_classes=[IsAuthenticated])
    def me(self, request):
        (customer, created) = Customer.objects.get_or_create(
            user_id=request.user.id
        )
        if request.method == 'GET':
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = CustomerSerializer(customer, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class BrandViewSet(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAdminUserOrReadOnly]

    def destroy(self, request, *args, **kwargs):
        if Product.objects.filter(brand_id=self.kwargs['pk']):
            return Response({'error': 'Brand has products'}, status=400)
        return super().destroy(request, *args, **kwargs)


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    pagination_class = CustomPagination
    permission_classes = [IsAdminUserOrReadOnly]

    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', 'brand__name']
    ordering_fields = ['name', 'unit_price']

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return GetProductSerializer
        return ProductSerializer

    def destroy(self, request, *args, **kwargs):
        if OrderItem.objects.filter(product_id=self.kwargs['pk']):
            return Response({'error': 'Product has order items'}, status=400)
        return super().destroy(request, *args, **kwargs)


class CartViewSet(CreateModelMixin,
                  RetrieveModelMixin,
                  GenericViewSet,
                  DestroyModelMixin):
    queryset = Cart.objects.prefetch_related('items__product').all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        customer = Customer.objects.get(user_id=self.request.user.id)
        return {'customer_id': customer.id}


class CartItemViewSet(ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AddCartItemSerializer
        elif self.request.method == 'PATCH':
            return UpdateCartItemSerializer
        return CartItemSerializer

    def get_queryset(self):
        return CartItem.objects.select_related('product').filter(cart_id=self.kwargs['cart_pk'])

    def get_serializer_context(self):
        return {'cart_id': self.kwargs['cart_pk']}
