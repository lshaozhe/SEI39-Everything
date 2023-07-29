from rest_framework import serializers
from . import models


class ProductsCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsCategories
        fields = '__all__'


class ProductsURLsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsURLs
        fields = '__all__'


class InformationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.InformationDetails
        fields = '__all__'


class ProductsInformationSerializer(serializers.ModelSerializer):
    information_details = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = models.ProductsInformation
        fields = '__all__'
        depth: 2


class ProductsImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsImages
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    # product_images = ProductsImagesSerializer(many=True)
    products_images = serializers.StringRelatedField(many=True, read_only=True)
    products_categories = serializers.StringRelatedField(many=True, read_only=True)
    products_urls = serializers.StringRelatedField(many=True, read_only=True)
    products_information = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = models.Products
        fields = '__all__'
        depth = 3






