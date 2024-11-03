from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello")

def about(request):
    return

def devlog(request):
    return

def projects(request):
    return