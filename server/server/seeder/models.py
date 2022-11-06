from django.db import models


class Products(models.Model):
    product_id = models.SmallAutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_price = models.CharField(max_length=8)
    product_description = models.CharField(max_length=255)
    product_brand = models.CharField(max_length=100)
    product_stock = models.SmallIntegerField()
    product_reserved = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.product_name


class ProductsImages(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    product_image_url = models.CharField(max_length=255)

    def __str__(self):
        return self.product_image_url


class ProductsCategories(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    product_category = models.CharField(max_length=100)

    def __str__(self):
        return self.product_category


class ProductsURLs(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    product_origin_url = models.CharField(max_length=255)

    def __str__(self):
        return self.product_origin_url


class ProductsInformation(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    information_title = models.CharField(max_length=100)
    information_details = models.CharField(max_length=255)

    def __str__(self):
        return self.product_id
