from django.db import models
import random


def random_int():
    return random.randint(1, 500)


class Products(models.Model):
    product_id = models.SmallAutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_price = models.CharField(max_length=8)
    product_description = models.CharField(max_length=255)
    product_brand = models.CharField(max_length=100)
    product_stock = models.SmallIntegerField(default=random_int)
    product_reserved = models.SmallIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.product_name


class ProductsImages(models.Model):
    products = models.ForeignKey(Products, on_delete=models.DO_NOTHING, related_name='products_images')
    product_image_url = models.CharField(max_length=255)

    def __str__(self):
        return self.product_image_url


class ProductsCategories(models.Model):
    products = models.ForeignKey(Products, on_delete=models.DO_NOTHING, related_name='products_categories')
    product_category = models.CharField(max_length=100)

    def __str__(self):
        return self.product_category


class ProductsURLs(models.Model):
    products = models.ForeignKey(Products, on_delete=models.DO_NOTHING, related_name='products_urls')
    product_origin_url = models.CharField(max_length=255)

    def __str__(self):
        return self.product_origin_url


class ProductsInformation(models.Model):
    products = models.ForeignKey('Products', on_delete=models.DO_NOTHING, related_name='products_information')
    information_title = models.CharField(max_length=100)
    # information_details = models.TextField(blank=True)

    def __str__(self):
        # return '%s: %s' % (self.information_title, self.information_details)
        return self.information_title


class InformationDetails(models.Model):
    productsinformation = \
        models.ForeignKey(ProductsInformation, on_delete=models.DO_NOTHING, related_name='information_details')
    information_details = models.TextField(blank=True)

    def __str__(self):
        return self.information_details
