from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Cart)


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


@admin.register(models.Admin)
class AdminAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'created_at']


@admin.register(models.Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']
    list_per_page = 10


@admin.register(models.Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['id', 'brand_name']
    list_editable = ['brand_name']
    list_per_page = 10


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_name', 'price', 'brand', 'is_featured']
    list_editable = ['product_name', 'price', 'brand', 'is_featured']
