from django.shortcuts import HttpResponse
# from .models import Members


def index(request):
    return HttpResponse('output')


def add_member(request):
    return HttpResponse('created')


def del_member(request):

    return HttpResponse('deleted')


def update_member(request):

    return HttpResponse('updated')