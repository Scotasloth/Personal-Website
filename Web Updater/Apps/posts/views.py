from django.shortcuts import render

# Create your views here.
def postlist (request):
    return render(request, 'posts/postlist.html')