from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from . import models


class Index(APIView):
    def post(self, request):
        print(request.data.key)
        return Response('Route works on index')


class SeedProducts(APIView):
    def put(self, request):
        serializer = serializers.ProductsSerializer(data=request.data)
        print(request.data)

        if serializer.is_valid():  # required to check if serializer is correct before saving
            serializer.save()
            return Response(serializer.data)

        else:
            return Response(serializer.errors)
