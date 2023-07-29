[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# User Auth with JSON Web Tokens

Authentication comes built in to Django and DRF. The built-in authentication system can handle user accounts, groups, and permissions. The default configuration will work great for most projects, but
Django's authentication system is also flexible and adaptable for larger projects and additional auth technologies - like JSON Web Tokens! - to make our applications more secure.

## Prerequisites

- Python
- Django
- Django REST Framework

## Objectives

By the end of this, developers should be able to:

- Explain user authentication and authorization
- Explain JWTs and the benefits of using them in auth
- Set up and link an accounts app to a Django project
- Set up JWTs and implement them them with user signup and login
- Set up permissions for users based on whether or not they are signed in or signed out

## Preparation

1. Fork and clone this repository.
2. Look inside the `assets` directory for:
   - Tunr.postman_collection.json
   - Tunr.postman_environment.json
3. Import them into your Postman desktop application

## JSON Web Tokens (JWTs)

On a high level, JSON Web Token (JWT) is a way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair.

Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

There are there parts of a JWT: the **header**, **payload** and **signature**. Each part is separated by a `.`, structuring it like this: `xxxxx.yyyyy.zzzzz`.

1. **Header |** The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. **Payload |** The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

3. **Signature |** The signature is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header, and then digitally sign it. It is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

The end result looks something like this:

> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
>
> eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
>
> SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

## Accounts App

Remember when we talked about the modularity of Django? One of the benefits of using Django is that we can separate the functionality of our app into independent, interchangeable pieces. We already have a `tunr` app that we have connected to our overall project in the `urls.py` file. We can make another app dedicated to user accounts, authentication and authorization and connect it in the same way.

### Create an Accounts App

Inside or your virtual environment, run the command:

```bash
django-admin startapp accounts
```

### Connect Accounts App

In the `settings.py` file, add the app to your `INSTALLED_APPS` list:

```py
# settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tunr',
    'django_extensions',
    'rest_framework',
    'accounts',
]
```

In the `urls.py` file, add the path to the accounts app to `urlpatterns`:

```py
# urls.py

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tunr.urls')),
    path('', include('accounts.urls')),
]
```

## Simple JWT

In order to work with JWTs, we will first install the [Simple JWT](https://github.com/davesque/django-rest-framework-simplejwt) library, which is the recommendation of the DRF developers.

From inside the virtual environment, run the command:

```bash
pipenv install djangorestframework_simplejwt
```

> Check and see if the dependency was added to your Pipfile!

Next, we must configure our project to use JWT Simple by adding a `REST_FRAMEWORK` dictionary to our `settings.py` file. In this list, we'll also add some configuration for permissions.

### Permissions

Permissions determine whether a request should be granted or denied access when it comes to different classes of users accessing different parts of the API. For example, a public API could be read-only. However, a group of admin users may be able to create, update and delete data.

Here, we have the global permissions set to `DjangoModelPermissionsOrAnonReadOnly`, which basically means that views will require permission, but anyone who isn't authenticated - or anonymous - will only have read-only access.

```py
# settings.py

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',
    ),
}
```

We also need to add a dictionary with JWT settings to assist with defining the defaults to use for JWT.

```py
# settings.py

from datetime import timedelta

...

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}
```

Finally, we'll need to set up a `urls.py` file and add two paths that we will use to obtain two tokens: an **access token** and a **refresh token**. These tokens will be obtained when the user signs in to the application. We are also going to include a path that will return a new access token.

<details>
<summary>What is the difference between an access token and a refresh token?</summary>

---

*Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. The client uses the access token to access the protected resources hosted by the resource server.

- Refresh Tokens are credentials used to obtain access tokens. Refresh tokens are issued to the client by the authorization server and are used to obtain a new access token when the current access token becomes invalid or expires, or to obtain additional access tokens with identical or narrower scope.

</details>

```py
# accounts.urls.py

from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
]
```

Now, if we run our server and navigate to the `http://localhost:8000/api/token`, we can enter the username and password to generate our token!

![Token Obtain Pair](https://i.imgur.com/I8yLfVW.png)

You can also try using the `POST User Signup` Postman request.

Using the path `http://localhost8000/api/token/refresh`, we can use the refresh token that we just generated to get a new access token, in case the original one has expired.

You can only `refresh` a token by sending a `POST` request; utilize the `POST Refresh Token` Postman request.

![Token Refresh](https://i.imgur.com/KMukupM.png)

## I Do: User Login

At this point, you're probably thinking to yourself, ok, I have these JSON Web Tokens. So what? What can I use them for? On the client side, you'll want to store your tokens somewhere, most likely in `localStorage` so that they can be saved and used across browser sessions. Today, we aren't working on the client side - we're working on the back end! So, let's create a view to obtain the access token and refresh token when a user signs in!

Create a path in `accounts.urls.py` and add it to the `urlpatterns`.

```py
# accounts.urls.py

urlpatterns = [
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('user/login/', views.LoginView.as_view(), name="auth-login"),
]
```

### User Serializer

Next, we need to create a serializer for our User.

What a minute! Aren't we missing something? What would we have normally created already to import into the serializer file? A model! Lucky for us, the User model is something that Django Auth provides for us, so all we have to do is import it.

It's definitely possible to customize users for future applications or projects, but for our purposed today, we'll use the "out-of-the-box" User model.

### Token Serializer

We also need to create a Token Serializer. Since your view will respond with a JWT, you will need a serializer to serialize this response.

In the `accounts` directory, create a `serializers.py` file and add the following:

```py
# accounts.serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'password', 'email')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)
```

Now we need to add login functionality to views:

```py
# accounts.views.py

# Here, we are adding all of the necessary imports for our LoginView
from django.shortcuts import render, redirect
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .serializers import UserSerializer, TokenSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# JWT settings
from rest_framework_simplejwt.tokens import RefreshToken

class LoginView(generics.ListCreateAPIView):
    """
    POST user/login/
    """

    # This permission class will overide the global permission class setting
    # Permission checks are always run at the very start of the view, before any other code is allowed to proceed.
    # The permission class here is set to AllowAny, which overwrites the global class to allow anyone to have access to login.
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
    queryset = User.objects.all()


    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # login saves the user’s ID in the session,
            # using Django’s session framework.
            login(request, user)
            refresh = RefreshToken.for_user(user)
            serializer = TokenSerializer(data={
                # using DRF JWT utility functions to generate a token
                "token": str(refresh.access_token)
                })
            serializer.is_valid()
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)
```

Navigate to `http://localhost:8000/user/login`, fill in the form with a user's credentials and click POST. What gets returned? A JWT!

<!-- ![Login](./assets/login.png) -->

## You Do: User Signup

Logging in is great if your user has already registered for the application. You probably have several apps that you use regularly on your phone or computer. What has been the first step to using all them? Signing up!

Add a signup path to the accounts app's `urlpatterns`.

```py
# accounts.urls.py

urlpatterns = [
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('user/login/', views.LoginView.as_view(), name="user-login"),
    path('user/signup/', views.RegisterUsersView.as_view(), name="user-signup"),
]
```

And add signup functionality to views:

```py
class RegisterUsersView(generics.ListCreateAPIView):
    """
    POST user/signup/
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        email = request.data.get("email", "")
        if not username or not password or not email:
            return Response(sl
                data={
                    "message": "username, password and email is required to register a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = User.objects.create_user(
            username=username, password=password, email=email
        )
        return Response(status=status.HTTP_201_CREATED)
```

Test your route in the browser and create a new user.
![Signup](https://i.imgur.com/xgO955l.png)

## Adding Permissions

Now that we have auth set up in our application, it's time to apply permissions to the other routes in our application.

### I Do: Artist Views

At the top of the `tunr.views.py` file, import permissions. Then, we will set the permission class on the Artist views to require the user to be authenticated to be able to read the data from the API.

```py
from rest_framework import permissions

class ArtistList(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ArtistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = (permissions.IsAuthenticated,)
```

### You Do: Song Views

Add permissions to the song list and song detail views.

## Additional Resources

- [JWT Documentation](https://jwt.io/introduction/)
- [Simple JWT Documentation](https://github.com/davesque/django-rest-framework-simplejwt)
- [DRF Permissions](https://www.django-rest-framework.org/api-guide/permissions/)
- [How to Extend Django User Model](https://simpleisbetterthancomplex.com/tutorial/2016/07/22/how-to-extend-django-user-model)
- [*args and **kwargs in Python](https://www.geeksforgeeks.org/args-kwargs-python/)
- [DRF Responses](https://www.django-rest-framework.org/api-guide/responses/)
- [DRF Attributes](https://www.django-rest-framework.org/api-guide/responses/#attributes)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
