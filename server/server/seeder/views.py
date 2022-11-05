from django.shortcuts import HttpResponse
# from .models import Members


def index(request):
    return HttpResponse('Route works on index')


def seed_products(request):

    return HttpResponse('seeding success')
