from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'html/index.html')

def project_list(request):
    return render(request, 'html/project_list.html')

def services(request):
    return render(request, 'html/services.html')

def project_description(request):
    return render(request, 'html/project_description.html')

def about_us(request):
    return render(request, 'html/about_us.html')
