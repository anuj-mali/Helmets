from rest_framework import serializers

from .models import Customer, Admin, Product, Brand, User


class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = Customer
        fields = ['id', 'username', 'email', 'password', 'confirm_password']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {'password': "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        del validated_data['confirm_password']
        return super().create(validated_data)


class CustomerSerializer(UserSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'username', 'email', 'password', 'confirm_password']


class AdminSerializer(UserSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'username', 'email', 'password',
                  'confirm_password', 'created_at']


class ProductSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source='brand.brand_name')

    class Meta:
        model = Product
        fields = ['id', 'product_name', 'product_description',
                  'price', 'updated_at', 'brand_name', 'is_featured']


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'brand_name']
