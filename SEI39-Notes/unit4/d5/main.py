
# django-admin startproject one_project

# cd one_project

# python manage.py

# python manage.py startapp main_app

# add 'main_app' into settings.py(in one project) under INSTALLED_APPS

# add path('routes/', include('main_app.urls')), into urls.py (in one_project)

# create the urls.py in main_app, and with the codes within

# go to views.py (in one_project) and write the codes within

# python manage.py runserver (to run the project)

# so it runs by urls (in one_project) > urls (in main_app) > views (in main_app)

# pipenv install psycopg2-binary

# add the following into settings:
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'django',
#         'USER': 'db_user',
#         'PASSWORD': 'example',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

# add the models in models.py (in main_app)

# python manage.py makemigrations

# python manage.py migrate

# aftn - use our own usertable so that we can use email to sign in to django admin

# python manage.py startapp account

# do models.py (in account folder)

# then makemigration and migrate (from morn lesson)

# python manage.py createsuperuser

# amend setting file
# AUTH_USER_MODEL = 'account.Account'
#
# AUTHENTICATION_BACKENDS = (
#     'django.contrib.auth.backends.AllowAllUsersModelBackend',
#     'account.backends.CaseInsensitiveModelBackend',
# )

# add backends.py (in account folder) to remove case sensitive in email when login
