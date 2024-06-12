from django.shortcuts import render

def homepage(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def gallery(request):
    return render(request, 'gallery.html')

def hotel(request):
    return render(request, 'hotel.html')

def contact(request):
    return render(request, 'contact.html')