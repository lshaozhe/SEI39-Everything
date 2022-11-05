from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView


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
    permission_classes = (IsAuthenticated, )  # tuple so need ,
