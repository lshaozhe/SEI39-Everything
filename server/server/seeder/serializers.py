from rest_framework import serializers
from . import models


class ProductsSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Products
		fields = '__all__'


class ProductsInformationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ProductsInformation
		fields = '__all__'


class ProductsCategoriesSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ProductsCategories
		fields = '__all__'


class ProductsImagesSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ProductsImages
		fields = '__all__'


class ProductsURLsSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ProductsURLs
		fields = '__all__'


class CombinedSerializer(serializers.ModelSerializer):

	products_images = serializers.StringRelatedField(many=True)
	# products = ProductsSerializer
	# images = ProductsImagesSerializer
	# product_class_serializer = ProductsSerializer
	# product_image_class_serializer = ProductsImagesSerializer(many=True)
	# product_information_class_serializer = ProductsInformationSerializer
	# product_categories_class_serializer = ProductsCategoriesSerializer

	class Meta:
		model = models.Products
		fields = '__all__'
