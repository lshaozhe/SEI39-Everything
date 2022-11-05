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
