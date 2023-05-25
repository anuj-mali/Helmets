from django.db import models


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    # profile_image = models.ImageField()


class Customer(User):
    pass


class Admin(User):
    created_at = models.DateField(auto_now_add=True)


class Brand(models.Model):
    brand_name = models.CharField(max_length=255)
    # brand_logo = models.ImageField()

    def __str__(self) -> str:
        return self.brand_name


class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    updated_at = models.DateField(auto_now=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    is_featured = models.BooleanField(default=False)
    # product_image = models.ImageField()

    def __str__(self):
        return self.product_name

    class Meta:
        ordering = ['product_name']


class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
    updated_at = models.DateField(auto_now=True)


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    placed_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField()
    unit_price = models.DecimalField(max_digits=6, decimal_places=2)
