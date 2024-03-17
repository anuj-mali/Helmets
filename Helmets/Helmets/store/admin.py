from django.contrib import admin
from .models import Product, Cart

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'unit_price', 'image']

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer']
    
    # list_filter = ['customer']
    # search_fields = ['customer__user__first_name', 'customer__user__last_name']