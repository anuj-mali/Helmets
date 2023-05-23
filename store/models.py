from django.db import models


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    # profile_image = models.ImageField()
    isAdmin = models.BooleanField(default=False)


class Customer(User):
    # user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    pass


class Admin(User):
    # user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    admin_name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)


class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    updated_at = models.DateField(auto_now=True)
    # product_image = models.ImageField()


class Cart(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)


class CartItem(models.Model):
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
    added_at = models.DateField(auto_now_add=True)


class Order(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.PROTECT)
    placed_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField()
