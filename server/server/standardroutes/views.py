from rest_framework.response import Response
from rest_framework.views import APIView
from seeder.models import Products
from seeder.serializers import ProductsSerializer, ProductsImagesSerializer


class Index(APIView):
    def get(self, request):
        return Response('Route works on index')


class GetOneProduct(APIView):

    def get(self, request, product_id):
        items = Products.objects.get(pk=product_id)
        images = items.productsimages_set.all()

        # serializer = ProductsSerializer(images, many=True)
        serializer = ProductsImagesSerializer(images, many=True)
        return Response(serializer.data)
