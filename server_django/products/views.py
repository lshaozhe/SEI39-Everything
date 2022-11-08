from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, mixins
from . import serializers
from . import models
import random


class Index(APIView):
    def get(self, request):
        response = {'message': 'api/products/ Index route is working'}
        return Response(data=response, status=status.HTTP_200_OK)


# class CreateOneProduct(APIView):
#
#     def put(self, request):
#         data = request.data
#         data['product_stock'] = random.randint(1, 100)
#         serializer = serializers.ProductsSerializer(data=data)
#
#         if serializer.is_valid():
#             serializer.save()
#             response = {'message': 'created one product',
#                         'data': serializer.data}
#             return Response(data=response, status=status.HTTP_201_CREATED)
#         else:
#             response = {'message': 'creation failed',
#                         'data': serializer.errors}
#             return Response(data=response, status=status.HTTP_400_BAD_REQUEST)


# class GetOneProduct(APIView):
#     serializer_class = serializers.ProductsSerializer
#
#     def get(self, request, pk):
#         results = models.Products.objects.get(pk=pk)
#
#         serializer = self.serializer_class(instance=results)
#         response = {'message': 'found one product',
#                     'data': serializer.data}
#         return Response(data=response, status=status.HTTP_200_OK)

class GetOneProduct(generics.GenericAPIView, mixins.RetrieveModelMixin):
    serializer_class = serializers.ProductsSerializer
    queryset = models.Products.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class CreateOneProduct(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = serializers.ProductsSerializer
    queryset = models.Products.objects.all()

    def put(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class GetManyProducts(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = serializers.ProductsSerializer
    queryset = models.Products.objects.all()

    def get(self, request):
        return self.list(request)


class UpdateOneProduct(APIView):

    def patch(self, request, product_id):
        print(product_id)
        return Response('ok')
