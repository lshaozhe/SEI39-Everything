from rest_framework.response import Response
from rest_framework.views import APIView
from seeder.models import Products
from seeder.serializers import ProductsSerializer, ProductsImagesSerializer, CombinedSerializer


class Index(APIView):
    def get(self, request):
        return Response('Route works on index')


class GetOneProduct(APIView):

    def get(self, request, product_id):
        items = Products.objects.get(pk=product_id)
        serializer = CombinedSerializer(items)
        return Response(serializer.data)
