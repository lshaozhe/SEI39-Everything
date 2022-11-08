from rest_framework import serializers
from . import models


class ProductsSerializer(serializers.ModelSerializer):
    # products_images = serializers.StringRelatedField(many=True)
    # products_categories = serializers.StringRelatedField(many=True)
    # products_urls = serializers.StringRelatedField(many=True)
    # products_information = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Products
        fields = '__all__'

    def create(self, validated_data):
        products_images_data = validated_data.pop('product_images')
        products_categories_data = validated_data.pop('product_categories')
        products_urls_data = validated_data.pop('product_origin_url')
        products_information_data = validated_data.pop('product_information')
        products = models.Products.objects.create(**validated_data)
        # for products_image_data in products_images_data:
        #     models.ProductsImages.objects.create(products=products, **products_image_data)
        return products

    # def update(self, ):

class ProductsImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsImages
        fields = '__all__'


class ProductsCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsCategories
        fields = '__all__'


class ProductsURLsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductsURLs
        fields = '__all__'


class ProductsInformationSerializer(serializers.ModelSerializer):
    information_details = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.ProductsInformation
        fields = '__all__'


class InformationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.InformationDetails
        fields = '__all__'
