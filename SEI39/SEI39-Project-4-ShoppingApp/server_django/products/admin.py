from django.contrib import admin
from .models import Products


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['product_name', 'product_id']
    list_filter = ['product_brand']
