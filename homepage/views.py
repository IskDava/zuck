from django.shortcuts import render
from zucks.models import Zuck

# Create your views here.

def show_homepage(request):
    all_zucks = Zuck.objects.all()

    return render(request, "home.html", {
        "zucks": all_zucks
    })