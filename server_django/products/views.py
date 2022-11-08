from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from . import models
import random


class Index(APIView):
    def get(self, request):
        return Response('Route works on index')


class CreateOneProduct(APIView):

    def put(self, request):
        data = request.data
        data['product_stock'] = random.randint(1, 100)
        serializer = serializers.ProductsSerializer(data=data)
        print(serializer.is_valid)
        if serializer.is_valid():
            response = {'status': 'ok', 'message': 'created'}
            return Response(response)
        else:
            return Response('failed')


class UpdateOneProduct(APIView):

    def patch(self, request, product_id):
        print(product_id)
        return Response('ok')
