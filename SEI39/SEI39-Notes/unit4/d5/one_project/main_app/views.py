from django.shortcuts import HttpResponse
from .models import Members


def index(request):
    members = Members.objects.all()
    # members = Members.objects.all() [5:10] for pagination [offset:limit]
    output = ', '.join([member.name for member in members])
    return HttpResponse(output)


def add_member(request):
    member = Members(name='Harry')
    member.save()
    return HttpResponse('created')


def del_member(request):
    member = Members.objects.filter(name='HARRY')  # return many

    member.delete()
    return HttpResponse('deleted')


def update_member(request):
    member = Members.objects.get(name='Harry')  # return first one
    member.name = 'HARRY'
    member.save()
    return HttpResponse('updated')