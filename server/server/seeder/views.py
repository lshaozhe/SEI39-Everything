from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from . import models
import random


class Index(APIView):
    def post(self, request):
        print(request.data.key)
        return Response('Route works on index')


class SeedOneProducts(APIView):
    def put(self, request):
        # Fill the product table first, then quiery the PK for population of relational tables
        product_table_data = {
            'product_name': request.data.get('product_name'),
            'product_price': request.data.get('product_price'),
            'product_description': request.data.get('product_description'),
            'product_brand': request.data.get('product_brand'),
            'product_stock': random.randint(1, 100),
        }
        product_serializer = serializers.ProductsSerializer(data=product_table_data)
        if product_serializer.is_valid():
            product_serializer.save()
        else:
            return Response(product_serializer.errors)

        product_foreign_key = \
            models.Products.objects.filter(product_name=request.data.get('product_name')).order_by('-product_id').values('product_id')[0]

        # Generate dict for ProductsImages table and save to db
        for item in request.data.get('product_images'):
            product_image_table_data = {
                'product_id': product_foreign_key['product_id'],
                'product_image_url': item
            }
            product_image_serializer = serializers.ProductsImagesSerializer(data=product_image_table_data)
            if product_image_serializer.is_valid():
                product_image_serializer.save()
            else:
                return Response(product_image_serializer.errors)

        # Generate dict for ProductsCategories table and save to db
        for item in request.data.get('product_categories'):
            product_categories_table_data = {
                'product_id': product_foreign_key['product_id'],
                'product_category': item
            }
            product_categories_serializer = serializers.ProductsCategoriesSerializer(data=product_categories_table_data)
            if product_categories_serializer.is_valid():
                product_categories_serializer.save()
            else:
                return Response(product_categories_serializer.errors)

        # Generate dict for ProductsURLs table and save to db
        product_url_table_data = {
            'product_id': product_foreign_key['product_id'],
            'product_origin_url': request.data.get('product_origin_url')
        }
        product_url_serializer = serializers.ProductsURLsSerializer(data=product_url_table_data)
        if product_url_serializer.is_valid():
            product_url_serializer.save()
        else:
            return Response(product_url_serializer.errors)

        # Generate dict for ProductsInformation table and save to db
        for title_value_pair in request.data.get('product_information'):
            for item in title_value_pair.values():
                for value in item:
                    product_information_table_data = {
                        'product_id': product_foreign_key['product_id'],
                        'information_title': list(title_value_pair.keys())[0],
                        'information_details': value
                    }
                    product_information_serializer = \
                        serializers.ProductsInformationSerializer(data=product_information_table_data)
                    if product_information_serializer.is_valid():
                        product_information_serializer.save()
                    else:
                        return Response(product_information_serializer.errors)

        return Response({'status': 'success',
                         'message': 'product id: {} populated into DB'.format(product_foreign_key['product_id'])})
