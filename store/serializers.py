from django.conf import settings

from rest_framework import serializers

from .models import Customer, Brand, Product, CartItem, Cart, Order, OrderItem


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'image']


class SimpleBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['name']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'unit_price', 'brand', 'image'
        ]


class GetProductSerializer(serializers.ModelSerializer):
    brand = SimpleBrandSerializer()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'unit_price', 'brand', 'image'
        ]


class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'brand', 'image']


class CartItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()
    total_price = serializers.SerializerMethodField(
        method_name='get_total_price'
    )

    def get_total_price(self, cart_item: CartItem):
        return cart_item.quantity * cart_item.product.unit_price

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price']


class UpdateCartItemSerializer(serializers.Serializer):
    quantity = serializers.IntegerField(min_value=1)

    class Meta:
        model = CartItem
        fields = ['quantity']

    def update(self, instance, validated_data):
        instance.quantity = validated_data['quantity']
        instance.save()
        return instance


class AddCartItemSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)

    def validate_product_id(self, value):
        if not Product.objects.filter(pk=value):
            raise serializers.ValidationError(
                f'Product with id {value} does not exist'
            )
        return value

    def save(self, **kwargs):
        cart_id = self.context['cart_id']
        product_id = self.validated_data['product_id']
        quantity = self.validated_data['quantity']

        try:
            cart_item = CartItem.objects.get(
                cart_id=cart_id, product_id=product_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except CartItem.DoesNotExist:
            self.instance = CartItem.objects.create(
                cart_id=cart_id, **self.validated_data
            )
        return self.instance

    class Meta:
        model = CartItem
        fields = ['id', 'product_id', 'quantity']


class CartSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField(
        method_name='get_total_price'
    )

    def get_total_price(self, cart: Cart):
        return sum([item.quantity * item.product.unit_price for item in cart.items.all()])

    def create(self, validated_data):
        if Cart.objects.filter(customer_id=self.context['customer_id']):
            raise serializers.ValidationError(
                'Cart already exists for this customer'
            )
        customer_id = self.context['customer_id']
        return Cart.objects.create(customer_id=customer_id, **validated_data)

    class Meta:
        model = Cart
        fields = ['id', 'items', 'total_price']


class CustomerSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)
    cart_id = serializers.SerializerMethodField(
        method_name='get_cart_id'
    )

    def get_cart_id(self, customer: Customer):
        try:
            return customer.carts.id
        except AttributeError:
            return None

    class Meta:
        model = Customer
        fields = ['id', 'user_id', 'phone', 'image', 'cart_id']


class OrderItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()
    total_price = serializers.SerializerMethodField(
        method_name='get_total_price'
    )

    def get_total_price(self, order_item: OrderItem):
        return order_item.quantity * order_item.unit_price

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'total_price']


class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    items = OrderItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField(
        method_name='get_total_price'
    )
    payment_status = serializers.CharField(read_only=True)

    def get_total_price(self, order: Order):
        return sum([item.quantity * item.unit_price for item in order.items.all()])

    class Meta:
        model = Order
        fields = ['id', 'items',
                  'total_price', 'payment_status']
