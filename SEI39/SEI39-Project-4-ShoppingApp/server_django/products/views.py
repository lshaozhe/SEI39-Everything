from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, mixins
from . import serializers
from . import models
from rest_framework.pagination import PageNumberPagination
from .paginations import PaginationHandlerMixin
from rest_framework.permissions import AllowAny


class Index(APIView):
    def get(self, request):
        response = {'message': 'api/products/ Index route is working'}
        return Response(data=response, status=status.HTTP_200_OK)


class CreateOneProduct(APIView):

    def put(self, request):
        try:
            product_foreign_key = populate_single_product_to_db(request.data)
        except ValueError as err:
            response = {'message': 'creation failed', 'data': '{}'.format(err)}
            return Response(data=response, status=status.HTTP_400_BAD_REQUEST)
        else:
            response = {'message': 'created one product with product_id: {}'.format(product_foreign_key['product_id'])}
            return Response(data=response, status=status.HTTP_201_CREATED)


class UpdateOneProduct(APIView):

    def patch(self, request, pk):
        data = request.data
        results = models.Products.objects.get(pk=pk)

        serializer = serializers.ProductsSerializer(instance=results, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            response = {'message': 'updated one product with product_id: {}'.format(serializer.data.get('product_id')),
                        'data': serializer.data}
            return Response(data=response, status=status.HTTP_202_ACCEPTED)
        else:
            response = {'message': 'update failed',
                        'data': serializer.errors}
            return Response(data=response, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        data = {'is_active': False}
        results = models.Products.objects.filter(is_active=True).get(pk=pk)

        serializer = serializers.ProductsSerializer(instance=results, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            response = {'message': 'deleted one product with product_id: {}'.format(serializer.data.get('product_id')),
                        'data': serializer.data}
            return Response(data=response, status=status.HTTP_204_NO_CONTENT)
        else:
            response = {'message': 'delete failed',
                        'data': serializer.errors}
            return Response(data=response, status=status.HTTP_400_BAD_REQUEST)


class GetOneProduct(APIView):
    serializer_class = serializers.ProductsSerializer

    def get(self, request, pk):
        results = models.Products.objects.filter(is_active=True).get(pk=pk)

        serializer = self.serializer_class(instance=results)
        response = {'message': 'success',
                    'data': serializer.data}
        return Response(data=response, status=status.HTTP_200_OK)


class BasicPagination(PageNumberPagination):
    page_size_query_param = 'limit'


class GetManyProducts(APIView, PaginationHandlerMixin):
    serializer_class = serializers.ProductsSerializer
    pagination_class = BasicPagination
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
        instance = models.Products.objects.filter(is_active=True).all()
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(instance, many=True)
        # serializer = self.serializer_class(instance=instance, many=True)
        response = {'message': 'success',
                    'data': serializer.data}
        return Response(data=response, status=status.HTTP_200_OK)


class SeedManyProducts(APIView):
    def put(self, request):
        try:
            counter = 0
            for product in request.data:
                product_foreign_key = populate_single_product_to_db(product)
                counter = counter + 1
        except ValueError as err:
            return Response({'status': 'failed',
                             'message': '{}'.format(err)})
        else:
            # product_foreign_key = {'product_id': 1}
            return Response({'status': 'success',
                             'message': '''populated {0} products, with last product of id: {1}'''
                            .format(counter, product_foreign_key['product_id'])})


def populate_single_product_to_db(request):
    # Fill the product table first, then query the PK for population of relational tables
    product_table_data = {
        'product_name': request.get('product_name'),
        'product_price': request.get('product_price'),
        'product_description': request.get('product_description'),
        'product_brand': request.get('product_brand'),
    }
    product_serializer = serializers.ProductsSerializer(data=product_table_data)
    if product_serializer.is_valid():
        product_serializer.save()
    else:
        raise ValueError('Error during population of product table: {}'.format(product_serializer.errors))

    product_foreign_key = \
        models.Products.objects.filter(product_name=request.get('product_name')).order_by('-product_id').values(
            'product_id')[0]

    # Generate dict for ProductsImages table and save to db
    for item in request.get('product_images'):
        # print(product_serializer.data)
        product_image_table_data = {
            'products': product_serializer.data['product_id'],
            'product_image_url': item
        }
        product_image_serializer = serializers.ProductsImagesSerializer(data=product_image_table_data)
        if product_image_serializer.is_valid():
            product_image_serializer.save()
        else:
            raise ValueError('Error during population of product image table: {}'.format(product_image_serializer.errors))

    # Generate dict for ProductsCategories table and save to db
    for item in request.get('product_categories'):
        product_categories_table_data = {
            'products': product_serializer.data['product_id'],
            'product_category': item
        }
        product_categories_serializer = serializers.ProductsCategoriesSerializer(data=product_categories_table_data)
        if product_categories_serializer.is_valid():
            product_categories_serializer.save()
        else:
            raise ValueError('Error during population of product categories table: {}'.format(product_categories_serializer.errors))

    # Generate dict for ProductsURLs table and save to db
    product_url_table_data = {
        'products': product_serializer.data['product_id'],
        'product_origin_url': request.get('product_origin_url')
    }
    product_url_serializer = serializers.ProductsURLsSerializer(data=product_url_table_data)
    if product_url_serializer.is_valid():
        product_url_serializer.save()
    else:
        raise ValueError('Error during population of product URL table: {}'.format(product_url_serializer.errors))

    # Generate dict for ProductsInformation table and save to db
    for title_value_pair in request.get('product_information'):
        for item in title_value_pair.values():
            for value in item:
                # for product information tab;e
                product_information_table_data = {
                    'products': product_serializer.data['product_id'],
                    'information_title': list(title_value_pair.keys())[0],
                }
                product_information_serializer = \
                    serializers.ProductsInformationSerializer(data=product_information_table_data)

                if product_information_serializer.is_valid():
                    product_information_serializer.save()
                else:
                    raise ValueError('Error during population of product information table: {}'.format(
                        product_information_serializer.errors))

    # Generate dict for InformationDetails table and save to db
    for title_value_pair in request.get('product_information'):
        for item in title_value_pair.values():
            for value in item:
                information_title_foreign_key = models.ProductsInformation.objects.filter(
                    information_title=list(title_value_pair.keys())[0]).order_by('-id').values(
                    'id')[0]['id']
                information_detail_table_data = {
                    'productsinformation': information_title_foreign_key,
                    'information_details': value
                }
                information_details_serializer = \
                    serializers.InformationDetailsSerializer(data=information_detail_table_data)

                if information_details_serializer.is_valid():
                    information_details_serializer.save()
                else:
                    raise ValueError('Error during population of product information 2nd table: {}'.format(
                        information_details_serializer.errors))

    return product_foreign_key
