from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Account
from .serializers import AccountSerializer


class AccountCreate(APIView):
    def put(self, request):
        new_user = Account.objects.create_user(
            email=request.data['email'],
            given_name=request.data['given_name'],
            other_name=request.data['other_name'],
            password=request.data['password']
        )

        serializer = AccountSerializer(new_user)
        return Response(serializer.data)
