from django.shortcuts import render

def homepage(request):
    return render(request, 'Home.html')

def about(request):
    return render(request, 'about.html')

def devlog(request):
    return render(request, 'devlog.html')

def projects(request):
    return render(request, 'projects.html')

def other(request):
    return render(request, 'other.html')

def code_request(request):
    return render(request, 'requests.html')