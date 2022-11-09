from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Account
from .serializers import AccountSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class AccountCreate(APIView):
    def put(self, request):
        new_user = Account.objects.create_user(
            email=request.data['email'],
            given_name=request.data['given_name'],
            name=request.data['name'],
            password=request.data['password']
        )

        serializer = AccountSerializer(new_user)
        return Response(serializer.data)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['company'] = 'GA'  # extra claims is added here (payload)

        return token


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class JWTDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        response = JWTAuthentication().authenticate(request)
        if response is not None:
            account, token = response
            print(account.id)

            return Response(token.payload)
        else:
            return Response('token error')


class TaskList(APIView):
    permission_classes = (IsAuthenticated, )
