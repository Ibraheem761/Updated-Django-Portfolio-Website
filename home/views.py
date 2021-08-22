from django.shortcuts import render
from home.models import Contact
from django.contrib import messages


# Create your views here.
def home(request):
    if request.method =="POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        print(name, email, message) 
        ins = Contact(name=name, email=email, message=message)
        ins.save()
        messages.success(request, "Thank you for your interest in my profile! I'll get back to you shortly.")
        return render(request, 'home.html', {})


    else:
        return render(request, 'home.html', {})