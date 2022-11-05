from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializer
from . import models


class Index(APIView):
    def get(self, request):
        return Response('Route works on index')


class SeedProducts(APIView):
    def get(self, request):

        return Response('seed route accessed')
