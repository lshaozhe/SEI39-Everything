from rest_framework.response import Response
from rest_framework.views import APIView


class Index(APIView):
    def get(self, request):
        return Response('Route works on index')
